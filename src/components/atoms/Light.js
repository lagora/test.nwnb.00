import React from 'react';

export const Light = props => (
  <a-entity>
    <a-entity light="type: ambient; intensity: 0.75;" />
    <a-entity
      light={
        [
          'type: point',
          'castShadow: true',
          'decay: 0.1',
          'intensity: 1',
          'shadowCameraVisible: false',
          'shadowMapHeight: 4096',
          'shadowMapWidth: 4096',
        ].join(';')
      }
      position="-5 30 15"
    />
  </a-entity>
);

export default Light;
