import React from 'react';
import { KeyUp } from './KeyUp';

export const GameControls = props => (
  <div>
    <KeyUp
      action={() =>
        props.actions.camera.switchCamera(
          props.camera.preset === 'TPS' ? 'FPS' : 'TPS',
        )
      }
      code="KeyC"
    />
  </div>
);

export default GameControls;
