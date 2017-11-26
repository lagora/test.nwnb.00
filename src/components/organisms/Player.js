import React from 'react';
import { PropTypes } from 'prop-types';
// import { Camera } from '../atoms/Camera';
import { camera, position, rotation } from '../proptypes';
import { PlayerCamera } from '../atoms/PlayerCamera';
import { xyzToString } from '../../utils';

export const Player = props => (
  <a-entity
    id="player"
    {...props}
    position={xyzToString(props.self.position)}
    rotation={xyzToString(props.self.rotation)}
  >
    <a-box
      position={xyzToString({
        ...props.self.position,
        y: props.self.position.y + 1,
      })}
      width="1"
      height="2"
      depth="1"
      material="color: #F90"
    />
    <PlayerCamera {...props} />
    {/* <Camera
      position={{ x: 0, y: 0, z: 1.5 }}
      rotation={{ x: 9, y: -30, z: 0 }}
    /> */}
  </a-entity>
);

Player.propTypes = {
  camera: camera, // eslint-disable-line
  self: PropTypes.shape({
    position,
    rotation,
  }).isRequired,
};

export default Player;
