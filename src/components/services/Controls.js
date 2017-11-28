import React from 'react';
import { GameControls } from './GameControls';
import { DebugControls } from './DebugControls';

export const Controls = props => (
  <div>
    <DebugControls {...props} />
    <GameControls {...props} />
  </div>

);

export default Controls;
