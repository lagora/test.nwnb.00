import React from 'react';
// import { PropTypes } from 'prop-types';
import { BuildingFloor } from '../atoms/BuildingFloor';
// import { BuildingCorner } from '../atoms/BuildingCorner';

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
