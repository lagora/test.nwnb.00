import { reducerMaker } from '../utils';
import { range } from '../utils';

const areaSize = 10;

export const initialState = {
  areas: [],
  hash: undefined,
  size: -1,
};

const RESET_LEVEL = 'reset the level';

export const types = {
  RESET_LEVEL,
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

export const getSize = size => ({ width: size * 0.75, height: size * 1.25, depth: size * 0.75 });

export const cross = a => b => a.map((x, i) => ({ ...a[i], ...b[i] }));

export const expand = size => i => i * size;

export const makeBuilding = () => expandFunction => (i, x, z) => (size, areaSize) => ({
  i,
  ...size,
  position: {
    x: expandFunction(areaSize)(x),
    y: (size.height / 2),
    z: expandFunction(areaSize)(z),
  },
});

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
};

export const mapping = {
  [RESET_LEVEL]: (state, action) => ({
    ...state,
    areas: action.payload.areas,
    hash: action.payload.hash,
    size: action.payload.size,
  }),
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
