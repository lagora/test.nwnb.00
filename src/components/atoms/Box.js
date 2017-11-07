import React from 'react';
import { PropTypes } from 'prop-types';
import { xyzToString } from '../../utils';

export const Box =
({ position, rotation, size }) => (
  <a-box
    position={xyzToString(position)}
    rotation={xyzToString(rotation)}
    material={
      [
        'color: #fff',
        'roughness: 1',
        'metalness: 0',
        ].join(';')
    }
    width={size.width}
    height={size.height}
    depth={size.depth}
    shadow="receive: true"
  />
);

Box.defaultProps = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
};

Box.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
  rotation: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    depth: PropTypes.number,
  }).isRequired,
};

export default Box;
