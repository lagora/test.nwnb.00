import React from 'react';
import { PropTypes } from 'prop-types';

export const Axes = ({
  children, position, width, height, depth,
}) => (
  <a-entity
    line={`
      start: ${position.x}, ${position.y}, ${position.z};
      end: ${position.x + (width / 2) + 1}, ${position.y}, ${position.z};
      color: red;
    `}
    line__2={`
      start: ${position.x}, ${position.y}, ${position.z};
      end: ${position.x}, ${position.y + (height / 2) + 1}, ${position.z};
      color: green;
    `}
    line__3={`
      start: ${position.x}, ${position.y}, ${position.z};
      end: ${position.x}, ${position.y}, ${position.z + (depth / 2) + 1};
      color: blue;
    `}
    line__4={`
      start: ${position.x}, ${position.y}, ${position.z};
      end: ${position.x - (width / 2) - 1}, ${position.y}, ${position.z};
      color: pink;
    `}
    line__5={`
      start: ${position.x}, ${position.y}, ${position.z};
      end: ${position.x}, ${position.y - (height / 2) - 1}, ${position.z};
      color: yellow;
    `}
    line__6={`
      start: ${position.x}, ${position.y}, ${position.z};
      end: ${position.x}, ${position.y}, ${position.z - (depth / 2) - 1};
      color: violet;
    `}
  >
    {typeof children !== 'undefined' && children}
  </a-entity>
);

Axes.defaultProps = {
  position: {
    x: 0, y: 0, z: 0,
  },
  width: 1000,
  height: 1000,
  depth: 1000,
};

Axes.propTypes = {
  children: PropTypes.any, // eslint-disable-line
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  }),
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
};

export default Axes;
