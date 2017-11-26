import React from 'react';
// import { PropTypes } from 'prop-types';
// import { Camera } from '../atoms/Camera';
// import { camera, selfPlayer } from '../proptypes';
import { PlayerCamera } from '../atoms/PlayerCamera';
import { xyzToString } from '../../utils';

export const Player = props => (
  <a-entity
    id="player"
    {...props}
    position={xyzToString(props.self.position)}
    rotation={xyzToString(props.self.rotation)}
    kinematic-body
  >
    {/* {props.debug ? (
      <a-entity>
        <a-ring
          color="#F00"
          position={xyzToString({
            ...props.self.position,
            y: props.self.position.y + 0.1,
          })}
          rotation={xyzToString({
            ...props.self.rotation,
            x: -90,
          })}
          radius-inner="1.9"
          radius-outer="2"
        />
        <a-plane
          color="#F00"
          position="2 0.11 0"
          rotation="-90 -90 0"
          width="0.25"
          height="0.5"
        />
      </a-entity>
    ) : false} */}
    {props.camera.preset === 'TPS' ? (
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
    ) : false}
    <a-camera
      active={props.camera.preset === 'FPS'}
    />
  </a-entity>
);

// Player.propTypes = {
//   camera: camera.isRequired,
//   self: selfPlayer.isRequired,
// };

export default Player;
