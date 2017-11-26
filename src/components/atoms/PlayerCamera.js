import React from 'react';
// import { number, shape } from 'prop-types';
import { xyzToString } from '../../utils';

export const PlayerCamera = props => (
  <a-entity
    id="camera"
    camera="fov: 90; zoom: 1;"
    position={
      xyzToString({
        ...props.position,
        y: props.position.y + 3,
        z: props.position.z + 4,
      })
    }
    orbit-controls={[
      ['enabled', ['TPS'].includes(props.preset)],
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
        ...props.position,
        y: props.position.y + 2,
      }],
    ].map(markup => markup.join(':')).join(';')}
    mouse-cursor=""
    look-controls-enabled="false"
  />
);

// PlayerCamera.propTypes = {
//   self: shape({
//     position: shape({
//       x: number.isRequired,
//       y: number.isRequired,
//       z: number.isRequired,
//     }),
//     rotation: shape({
//       x: number.isRequired,
//       y: number.isRequired,
//       z: number.isRequired,
//     }),
//   }).isRequired,
// };

export default PlayerCamera;
