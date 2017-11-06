import React from 'react';
import { PropTypes } from 'prop-types';
import Axes from '../services/Axes'; // eslint-disable-line
import { xyzToString } from '../../utils';

export const Ground =
({ position, size }) => (
  <a-entity>
    <a-plane
      position={xyzToString(position)}
      rotation="-90 0 0"
      material="color: #fff"
      width={size.width}
      height={size.height}
      opacity="0.9"
      shadow="receive: true"
      static-body
    />
  </a-entity>
);

Ground.defaultProps = {
  position: { x: 0, y: 0, z: 0 },
  size: { width: 10000, height: 10000 },
};

Ground.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    depth: PropTypes.number,
  }),
};

export default Ground;
