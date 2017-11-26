import React from 'react';
import { PropTypes } from 'prop-types';
import { position, rotation } from '../proptypes';
import { xyzToString } from '../../utils';

export const PlayerCamera = props => (
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
);

PlayerCamera.propTypes = {
  self: PropTypes.shape({
    position,
    rotation,
  }).isRequired,
};

export default PlayerCamera;
