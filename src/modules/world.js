import { reducerMaker } from '../utils';

export const initialState = {
  light: {
    mode: 'day',
  }
};

const SET_LIGHT_MODE = 'SET_LIGHT_MODE';

export const types = {
  SET_LIGHT_MODE,
};

export const setLightMode = mode => dispatch =>
  dispatch({ type: SET_LIGHT_MODE, payload: { mode } });

export const setNightMode = () =>
  setLightMode('night');

export const setDayMode = () =>
  setLightMode('day');

export const toggleLightMode = () => (dispatch, getState) =>
  setLightMode(getState().level.lightMode === 'night' ? 'day' : 'night')(dispatch);


export const actions = {
  toggleLightMode,
};

export const mapping = {
  [SET_LIGHT_MODE]: (state, { payload }) => ({
    ...state,
    light: {
      mode: payload.mode,
    }
  }),
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
