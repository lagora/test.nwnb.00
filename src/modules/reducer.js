import { combineReducers } from 'redux';
import { reducer as game } from './game';
import { reducer as level } from './level';
import {reducer as player } from './player';
import { reducer as world } from './world';

export const rootReducer = combineReducers({
  debug: () => process.env.NODE_ENV === 'dev',
  game,
  level,
  player,
  world,
});

export default rootReducer;
