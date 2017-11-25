import React from 'react';
import { PropTypes } from 'prop-types';
import { Camera } from '../atoms/Camera';
import { xyzToString } from '../../utils';

export const Player = props => (
  <a-entity
    id="player"
    {...props}
    position={xyzToString(props.position)}
    rotation={xyzToString(props.rotation)}
  >
    <Camera
      position={{ x: 0, y: 0, z: 1.5 }}
      rotation={{ x: 9, y: -30, z: 0 }}
    />
  </a-entity>
);

Player.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  }).isRequired,
  rotation: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  }).isRequired,
};

export default Player;
