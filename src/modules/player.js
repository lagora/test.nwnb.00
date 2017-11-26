import { reducerMaker } from '../utils';

export const initialState = {
  self: {
    position: {
      x: 22,
      y: 0.5,
      z: 22,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
};

const SET_PLAYER_POSITION = 'set the player position';
const SET_PLAYER_ROTATION = 'set the player rotation';

export const types = {
  SET_PLAYER_POSITION,
    SET_PLAYER_ROTATION,
};

export const setPlayerPosition = position => dispatch =>
  dispatch({ type: SET_PLAYER_POSITION, payload: { position } });

export const setPlayerRotation = rotation => dispatch =>
  dispatch({ type: SET_PLAYER_ROTATION, payload: { rotation } });

export const actions = {
  setPlayerPosition,
  setPlayerRotation,
};

export const mapping = {
  [SET_PLAYER_POSITION]: (state, action) =>
    ({ ...state, self: { ...state.self, position: action.payload.position } }),
  [SET_PLAYER_ROTATION]: (state, action) =>
    ({ ...state, self: { ...state.self, rotation: action.payload.rotation } }),
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
