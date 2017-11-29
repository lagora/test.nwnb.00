import React from 'react';
import { PropTypes } from 'prop-types';

const directionalLightProps = {
  day: [
    'type: directional',
    'castShadow: true',
    'decay: 0.1',
    'intensity: 0.9',
    'shadowCameraVisible: false',
    'shadowMapHeight: 4096',
    'shadowMapWidth: 4096',
  ].join(';'),
  night: [
    'type: directional',
    'castShadow: true',
    'decay: 0.1',
    'intensity: 0.1',
    'shadowCameraVisible: false',
    'shadowMapHeight: 4096',
    'shadowMapWidth: 4096',
  ].join(';'),
};

const hemisphereLightProps = {
  day: [
    'type: hemisphere',
    'intensity: 0.1',
    'color: #fff',
    'backgroundColor: #000',
  ].join(';'),
  night: [
    'type: hemisphere',
    'intensity: 0.01',
    'color: #777',
    'backgroundColor: #000',
  ].join(';'),
};

export const Light = ({ mode }) => (
  <a-entity
    id="lights"
  >
    <a-entity light={hemisphereLightProps[mode]} />
    <a-entity position="-1 1 1"light={directionalLightProps[mode]} />
  </a-entity>
);

Light.propTypes = {
  mode: PropTypes.oneOf(['day', 'night']),
};

export default Light;
