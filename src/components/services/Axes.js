import React from 'react';
import { PropTypes } from 'prop-types';

export const Axes = (props) => {
  const position = ['x', 'y', 'z'].reduce((a, k, i) => ({ ...a, [k]: props.position[i] }), {});
  const {
    children, width, height, depth,
  } = props;
  const lineProps = [
    [`${position.x + (width / 2) + 1}, ${position.y}, ${position.z};`, 'red'],
    [`${position.x}, ${position.y + (height / 2) + 1}, ${position.z};`, 'green'],
    [`${position.x}, ${position.y}, ${position.z + (depth / 2) + 1};`, 'blue'],
    [`${position.x - (width / 2) - 1}, ${position.y}, ${position.z};`, 'pink'],
    [`${position.x}, ${position.y - (height / 2) - 1}, ${position.z};`, 'yellow'],
    [`${position.x}, ${position.y}, ${position.z - (depth / 2) - 1};`, 'violet'],
  ].map(p => ({
    line: {
      start: `${position.x}, ${position.y}, ${position.z};`,
      end: p[0],
      color: p[1],
    },
  }));
  return (
    <a-entity {...lineProps}>
      {typeof children !== 'undefined' && children}
    </a-entity>
  );
};

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
  // position: PropTypes.anyOf([
  //   PropTypes.shape({
  //     x: PropTypes.number.isRequired,
  //     y: PropTypes.number.isRequired,
  //     z: PropTypes.number.isRequired,
  //   }),
  //   PropTypes.string,
  // ]),
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
};

export default Axes;
