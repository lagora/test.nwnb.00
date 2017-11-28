import { reducerMaker } from '../utils';

export const presets = ['FPS', 'OTS', 'TPS', 'STR', 'MAP'];

/**
 * CAMERA TYPES LIST:
 * - FPS: First Person
 * - OTS : Over The Shoulder
 * - TPS: Third Person
 * - STR: Strategic View, elevated, centered on player
 * - MAP: Synthetic level + npc + objectives view
 */

export const initialState = {
  preset: 'FPS',
};

const SWITCH_CAMERA = 'switch to another camera';

export const types = { SWITCH_CAMERA };

export const switchCamera = preset => dispatch =>
// export const switchCamera = () => dispatch =>
  // dispatch({ type: SWITCH_CAMERA, payload: { preset: 'FPS' } });
  (presets.includes(preset) ? dispatch({
    type: SWITCH_CAMERA,
    payload: { preset },
  }) : Promise.reject());

export const actions = { switchCamera };

export const mapping = {
  [SWITCH_CAMERA]: (state, action) =>
    ({ ...state, preset: action.payload.preset }),
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
