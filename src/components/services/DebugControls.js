import React from 'react';
import { KeyUp } from './KeyUp';

export const DebugControls = props => (
  <div>
    <KeyUp
      action={props.actions.world.toggleLightMode}
      code="KeyL"
    />
  </div>
);

export default DebugControls;
