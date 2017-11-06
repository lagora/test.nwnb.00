import React from 'react';
// import { PropTypes } from 'prop-types';
import { xyzToString } from '../../utils';
import { BuildingStory } from '../molecules/BuildingStory';
import { Axes } from '../services/Axes';
import { range } from '../../utils';

const storyHeigh = 4;

export const Building = props => (
  <a-entity>
    <Axes
      position={{ ...props.position }}
      width={props.width}
      height={props.height}
      depth={props.depth}
    />
    {/* <BuildingStory {...props} /> */}
    {range(props.height / storyHeigh)()().map(elevation => (
      <BuildingStory
        key={`building-${props.i}-${elevation}-story`}
        {...props}
        position={{
          ...props.position,
          y: ((storyHeigh / 2) - 0.125) + (elevation * storyHeigh),
        }}
        height={storyHeigh}
      />
      ))}
    <a-box
      position={xyzToString(props.position)}
      width={props.width}
      height={props.height}
      depth={props.depth}
      shadow="receive: false;"
    />
  </a-entity>
);

Building.propTypes = {

};

export default Building;
