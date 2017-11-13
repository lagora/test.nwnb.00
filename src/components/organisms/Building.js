import React from 'react';
import { xyzToString } from '../../utils';
import { BuildingStory } from '../molecules/BuildingStory';
import { range } from '../../utils';
import { PropTypes } from 'prop-types';

const storyHeigh = 4;

export const Building = props => (
  <a-entity id={props.id}>
    <a-box
      position={props.position}
      width={props.width}
      height={props.height}
      depth={props.depth}
      castShadow="true"
      shadow="receive: true;"
    />
    {/* {props.stories.map(floor => <BuildingStory {...floor} />)} */}
  </a-entity>
);

Building.propTypes = {
};

export default Building;
