import React from 'react';
// import { PropTypes } from 'prop-types';
import { xyzToString } from '../../utils';
import { BuildingStory } from '../molecules/BuildingStory';
import { range } from '../../utils';
import { PropTypes } from 'prop-types';

const storyHeigh = 4;

export const Building = props => (
  <a-entity>
    <a-box
      position={props.position}
      width={props.width}
      height={props.height}
      depth={props.depth}
      shadow="receive: false;"
    />
    {props.stories.map(floor => <BuildingStory {...floor} />)}
  </a-entity>
);

Building.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    depth: PropTypes.number.isRequired,
    // stories: PropTypes.arrayOf(PropTypes.shape({
    //   position: PropTypes.string.isRequired,
    //   width: PropTypes.number.isRequired,
    //   height: PropTypes.number.isRequired,
    //   depth: PropTypes.number.isRequired,
    // })).isRequired,
  })).isRequired,
};

export default Building;
