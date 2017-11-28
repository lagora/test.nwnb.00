import { reducerMaker } from '../utils';
import { v4 } from 'uuid';
import { hash as h } from 'spark-md5';

const defaultSeed = 'nwnb';

export const initialState = {
  hash: '0',
  seed: defaultSeed,
};

const GET_SEED = 'getting the seed';
const HASH_FROM_SEED = 'hashing the seed';

export const types = {
  GET_SEED,
  HASH_FROM_SEED,
};

export const getSeed = (seed = defaultSeed) => dispatch => {
  dispatch({ type: GET_SEED, payload: { seed } });
  dispatch({ type: HASH_FROM_SEED, payload: { hash: h(seed) } });
};

export const getLevelSymbol = () => (dispatch, getState) =>
  getState().game.hash.substr(0, 1);

export const actions = {
  getLevelSymbol,
  getSeed,
};

export const mapping = {
  [GET_SEED]: (state, action) =>
    ({ ...state, seed: action.payload.seed }),
  [HASH_FROM_SEED]: (state, action) =>
    ({ ...state, hash: action.payload.hash }),
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
