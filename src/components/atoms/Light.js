import React from 'react';
import { PropTypes } from 'prop-types';

const pointLightProps = {
  day: [
    'type: point',
    'castShadow: true',
    'decay: 0.1',
    'intensity: 0.5',
    'shadowCameraVisible: false',
    'shadowMapHeight: 4096',
    'shadowMapWidth: 4096',
  ].join(';'),
  night: [
    'type: point',
    'castShadow: true',
    'decay: 0.1',
    'intensity: 0.15',
    'shadowCameraVisible: false',
    'shadowMapHeight: 4096',
    'shadowMapWidth: 4096',
  ].join(';'),
};

const ambientLightProps = {
  day: [
    'type: ambient',
    'intensity: 0.6',
    'color: #fff',
    'backgroundColor: #fff',
  ].join(';'),
  night: [
    'type: ambient',
    'intensity: 0.6',
    'color: #000',
    'backgroundColor: #fff',
  ].join(';'),
};

export const Light = ({ mode }) => (
  <a-entity
    id="lights"
    position="200 200 200"
  >
    <a-entity light={ambientLightProps[mode]} />
    <a-entity light={pointLightProps[mode]} />
  </a-entity>
);

Light.propTypes = {
  mode: PropTypes.oneOf(['day', 'night']),
};

export default Light;
