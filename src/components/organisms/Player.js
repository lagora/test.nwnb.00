import React from 'react';
import { PropTypes } from 'prop-types';
// import { Camera } from '../atoms/Camera';
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
    <a-entity
      id="camera"
      camera="fov: 90; zoom: 1;"
      position={
        xyzToString({
          ...props.self.position,
          y: props.self.position.y + 3,
          z: props.self.position.z + 4,
        })
      }
      orbit-controls={[
        // ['enabled', props.camera.player.thirdPerson],
        ['autoRotate', false],
        ['target', '#player'],
        ['enableDamping', true],
        ['enableZoom', false],
        ['rotateSpeed', false],
        ['dampingFactor', 0.125],
        ['rotateSpeed', 0.25],
        ['minDistance', 3],
        ['maxDistance', 100],
        ['enableKeys', false],
        ['minPolarAngle', 0.5],
        ['maxPolarAngle', Math.PI / 2.1],
        ['rotateTo', {
          ...props.self.position,
          y: props.self.position.y + 2,
        }],
      ].map(markup => markup.join(':')).join(';')}
      mouse-cursor=""
      look-controls-enabled="false"
    />
    {/* <Camera
      position={{ x: 0, y: 0, z: 1.5 }}
      rotation={{ x: 9, y: -30, z: 0 }}
    /> */}
  </a-entity>
);

Player.propTypes = {
  camera: PropTypes.shape({
    player: PropTypes.shape({
      thirdPerson: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  self: PropTypes.shape({
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
  }).isRequired,
};

export default Player;
