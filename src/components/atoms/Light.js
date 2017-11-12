import React from 'react';

const pointLightProps = [
  'type: point', 'castShadow: true',
  'decay: 0.1', 'intensity: 0.15',
  'shadowCameraVisible: false',
  'shadowMapHeight: 4096', 'shadowMapWidth: 4096',
].join(';');

const ambientLightProps = [
  'type: ambient',
  'intensity: 0.6',
  'color: #000',
  'backgroundColor: #fff',
].join(';');

export const Light = props => (
  <a-entity
    id="lights"
    position="200 200 200"
  >
    <a-entity light={ambientLightProps} />
    <a-entity light={pointLightProps} />
  </a-entity>
);

export default Light;
