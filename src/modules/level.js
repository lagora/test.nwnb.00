import { reducerMaker, xyzToString } from '../utils';

const areaSize = 50;

export const initialState = {
  areas: [],
  hash: undefined,
  size: -1,
  lightMode: 'day',
};

const RESET_LEVEL = 'reset the level';

const SET_LIGHT_MODE = 'SET_LIGHT_MODE';

export const types = {
  RESET_LEVEL,
  SET_LIGHT_MODE,
};

export const getLevelArea = index => ({
  position: {
    x: ((index * 10) + 1) / 8,
    y: 5,
    z: ((index) % 8) * 10,
  },
  width: 10,
  height: 10,
  depth: 10,
});

export const setLightMode = lightMode => dispatch =>
  dispatch({ type: SET_LIGHT_MODE, payload: { lightMode } });

export const setNightMode = () =>
  setLightMode('night');

export const setDayMode = () =>
  setLightMode('day');

export const toggleLightMode = () => (dispatch, getState) =>
  setLightMode(getState().level.lightMode === 'night' ? 'day' : 'night')(dispatch);

export const getSize = size => ({ width: size * 0.5, height: size * 1.5, depth: size * 0.5 });

export const cross = a => b => a.map((x, i) => ({ ...a[i], ...b[i] }));

export const expand = size => i => i * size;

export const makeBuilding = () => expandFunction => (i, x, z) => (size, levelAreaSize) => {
  const position = xyzToString({
    x: expandFunction(levelAreaSize)(x),
    y: (size.height / 2),
    z: expandFunction(levelAreaSize)(z),
  });
  const id = `building-${i}`;
  return {
    i, id, key: id, position, ...size,
  };
};

export const resetLevel = ({ hash, size } = { size: 8 }) => (dispatch) => {
  const areas = [];
  for (let z = 0, i = 0; z < size; z += 1) {
    for (let x = 0; x < size; x += 1, i += 1) {
      const s = getSize(areaSize);
      areas.push(makeBuilding(hash)(expand)(i, x, z)(s, areaSize * 1.1));
    }
  }
  return dispatch({
    type: RESET_LEVEL,
    payload: { areas, hash, size },
  });
};

export const actions = {
  resetLevel,
  toggleLightMode,
};

export const mapping = {
  [RESET_LEVEL]: (state, { payload }) => ({
    ...state,
    areas: payload.areas,
    hash: payload.hash,
    size: payload.size,
  }),
  [SET_LIGHT_MODE]: (state, { payload }) => ({
    ...state,
    lightMode: payload.lightMode,
  })
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
