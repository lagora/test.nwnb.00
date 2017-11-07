import React from 'react';
import { PropTypes } from 'prop-types';

export const Axes = (props) => {
  const p = ['x', 'y', 'z'].reduce((a, k, i) => ({ ...a, [k]: props.position[i] }), {});
  const { children, width, height, depth } = props;
  const lineProps = [
    [`${p.x + (width / 2) + 1}, ${p.y}, ${p.z};`, 'red'],
    [`${p.x}, ${p.y + (height / 2) + 1}, ${p.z};`, 'green'],
    [`${p.x}, ${p.y}, ${p.z + (depth / 2) + 1};`, 'blue'],
    [`${p.x - (width / 2) - 1}, ${p.y}, ${p.z};`, 'pink'],
    [`${p.x}, ${p.y - (height / 2) - 1}, ${p.z};`, 'yellow'],
    [`${p.x}, ${p.y}, ${p.z - (depth / 2) - 1};`, 'violet'],
  ].map(a => ({
    line: {
      start: `${p.x}, ${p.y}, ${p.z};`,
      end: a[0],
      color: a[1],
    },
  }));
  return (
    <a-entity {...lineProps}>
      {typeof children !== 'undefined' && children}
    </a-entity>
  );
};

Axes.defaultProps = {
  position: { x: 0, y: 0, z: 0,},
  width: 1000, height: 1000, depth: 1000,
};

Axes.propTypes = {
  children: PropTypes.any, // eslint-disable-line
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
};

export default Axes;
