import React from 'react';
import { xyzToString } from '../../utils';

const floorHeight = 0.01;
const storyHeight = 10;
const crateSize = 2;

export const Box = props => (
  <a-entity>
    <a-box {...props} />
    <a-animation
      attribute="position"
      dur="1000"
      from="0 0 0"
      to={xyzToString(props.position)}
    />
  </a-entity>
);

export const TestBuildingPillar = ({ position }) => (
  <a-box
    position={position}
    height={storyHeight}
    castShadow="true"
    shadow="receive: true;"
    static-body
  />
);

export const Crate = ({ position }) => (
  <a-box
    position={position}
    width={crateSize}
    height={crateSize}
    depth={crateSize}
    castShadow="true"
    shadow="receive: true;"
    dynamic-body="0.5"
    test-shader
  />
);

export const TestBuildingWall = ({ length, position, side }) => (
  <a-box
    position={position}
    width={`${['north', 'south'].includes(side) ? floorHeight : length}`}
    height={`${storyHeight - (floorHeight * 2)}`}
    depth={`${['east', 'west'].includes(side) ? floorHeight : length}`}
    castShadow="true"
    shadow="receive: true;"
    static-body
  />
);

const spotLightProps = {
  day: [
    'type: spot',
    'castShadow: true',
    'intensity: 0.9',
    'shadowCameraVisible: false',
    'shadowMapHeight: 4096',
    'shadowMapWidth: 4096',
  ].join(';'),
  night: [
    'type: spot',
    'castShadow: true',
    'decay: 0.9',
    'intensity: 0.15',
    'shadowCameraVisible: false',
    'shadowMapHeight: 4096',
    'shadowMapWidth: 4096',
  ].join(';'),
};

export const TestBuildingstory = ({ floor, elevation, mode }) => (
  <a-entity>
    {/* <a-light
      light={spotLightProps[mode]}
      position={`0 ${(elevation + (floorHeight / 2)) - 1} 0`}
    /> */}
    {floor === 0 ? (
      <a-box
        position={`0 ${elevation + (floorHeight / 2)} 0`}
        width="50"
        height={floorHeight}
        depth="50"
        castShadow="true"
        shadow="receive: true;"
        static-body
      />
    ) : false}
    <a-box
      position={`0 ${(elevation + storyHeight) - (floorHeight / 2)} 0`}
      width="50"
      height={floorHeight}
      depth="50"
      castShadow="true"
      shadow="receive: true;"
      static-body
    />
    {/* <TestBuildingWall
      side="north"
      length="50"
      position={`${25 - floorHeight} ${elevation + (storyHeight / 2)} 0`}
    /> */}
    <TestBuildingWall
      side="south"
      length="50"
      position={`${(25 * -1) - floorHeight} ${elevation + (storyHeight / 2)} 0`}
    />
    <TestBuildingWall
      side="east"
      length="50"
      position={`0 ${elevation + (storyHeight / 2)} ${25 - floorHeight}`}
    />
    <TestBuildingWall
      side="west"
      length="50"
      position={`0z ${elevation + (storyHeight / 2)} ${(25 * -1) - floorHeight}`}
    />
    {[1, 2].map(z =>
      [1, 2].map(x => (
        <a-entity key={`pillar-${x}-${z}-story-${elevation * floor}`}>
          <TestBuildingPillar position={`${(x * 10)} ${(storyHeight / 2) + (floor * storyHeight)} ${(z * 10)}`} />
          <TestBuildingPillar position={`${(x * 10)} ${(storyHeight / 2) + (floor * storyHeight)} ${(z * 10) * -1}`} />
          <TestBuildingPillar position={`${(x * 10) * -1} ${(storyHeight / 2) + (floor * storyHeight)} ${(z * 10)}`} />
          <TestBuildingPillar position={`${(x * 10) * -1} ${(storyHeight / 2) + (floor * storyHeight)} ${(z * 10) * -1}`} />
        </a-entity>
      )
    ))}
    {floor === 0 && [0.5, 1.5, 2.5, 3.5, 4.5].map(z =>
      [0.5, 1.5, 2.5, 3.5, 4.5].map(x => z !== 2.5 && x !== 2.5 && (
        <a-entity key={`crate-${x}-${z}`}>
          <Crate position={`${(x * 4)} ${crateSize / 2} ${(z * 4)}`} />
          <Crate position={`${(x * 4)} ${crateSize / 2} ${(z * 4) * -1}`} />
          <Crate position={`${(x * 4) * -1} ${crateSize / 2} ${(z * 4)}`} />
          <Crate position={`${(x * 4) * -1} ${crateSize / 2} ${(z * 4) * -1}`} />
        </a-entity>
    ))
    )}
  </a-entity>
);

export const TestBuilding = ({ mode }) => (
  <a-entity>
    <TestBuildingstory floor={0} elevation={0.1} mode={mode} />
    <TestBuildingstory floor={1} elevation={storyHeight} mode={mode} />
  </a-entity>
);

export const TestLevel = props => (
  <a-entity>
    <TestBuilding mode={props.mode}/>
  </a-entity>
);

export default TestLevel;
