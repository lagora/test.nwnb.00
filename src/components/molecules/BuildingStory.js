import React from 'react';
import { PropTypes } from 'prop-types';
import { xyzToString } from '../../utils';
import { BuildingFloor } from '../atoms/BuildingFloor';
import { BuildingCorner } from '../atoms/BuildingCorner';
import { Axes } from '../services/Axes';

export const BuildingStory = props => (
  <a-entity>
    <Axes {...props} />
    <BuildingFloor
      position={xyzToString({
        ...props.position,
        y: (props.position.y - (props.height / 2)) + 0.125,
      })}
      width={props.width - (0.125 * 2)}
      height={0.1}
      depth={props.depth - (0.125 * 2)}
      material="color: pink"
    />
    {/* <BuildingCorner
      {...props}
      position={xyzToString({
        ...props.position,
        x: props.position.x + (props.width / 2),
        z: props.position.z + (props.depth / 2),
      })}
    />
    <BuildingCorner
      {...props}
      position={xyzToString({
        ...props.position,
        x: props.position.x - (props.width / 2),
        z: props.position.z - (props.depth / 2),
      })}
    />
    <BuildingCorner
      {...props}
      position={xyzToString({
        ...props.position,
        x: props.position.x + (props.width / 2),
        z: props.position.z - (props.depth / 2),
      })}
    />
    <BuildingCorner
      {...props}
      position={xyzToString({
        ...props.position,
        x: props.position.x - (props.width / 2),
        z: props.position.z + (props.depth / 2),
      })}
    /> */}
  </a-entity>
);

export default BuildingStory;
