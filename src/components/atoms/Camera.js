import React from 'react';
import { PropTypes } from 'prop-types';
import { xyzToString } from '../../utils';

export const Camera =
({ position, rotation }) => (
  <a-camera
    position={xyzToString(position)}
    rotation={xyzToString(rotation)}
    material="color: red"
  />
);

Camera.defaultProps = {
  position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 },
};

Camera.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number, y: PropTypes.number, z: PropTypes.number,
  }),
  rotation: PropTypes.shape({
    x: PropTypes.number, y: PropTypes.number, z: PropTypes.number,
  }),
};

export default Camera;
