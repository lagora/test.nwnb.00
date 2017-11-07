import React from 'react';
import { BuildingFloor } from '../atoms/BuildingFloor';

export const BuildingStory = props => (
  <a-entity>
    <a-box
      position={props.position}
      width={props.width}
      height={props.height}
      depth={props.depth}
      material="side: double;"
    />
    <BuildingFloor {...props.floor} />
  </a-entity>
);

export default BuildingStory;
