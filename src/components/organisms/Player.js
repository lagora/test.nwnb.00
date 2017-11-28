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
    camera
    universal-controls
    mouse-controls
    keyboard-controls
    kinematic-body="mass: 10;"
  >
    <a-box
      height="2"
      material="color: #F90"
    />
  </a-entity>
);

export default Player;
