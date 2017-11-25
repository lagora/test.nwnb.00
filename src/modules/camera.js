import { v4 } from 'uuid';
import { reducerMaker, xyzStringToObject } from '../utils';

export const initialState = {
  current: undefined,
  player: {
    thirdPerson: true,
  },
  list: [],
};

const ADD_CAMERA = 'add a camera';
const SET_CURRENT_CAMERA = 'set the current camera';

export const types = {
  ADD_CAMERA,
  SET_CURRENT_CAMERA,
};

export const addCamera = ({ position, rotation }) => dispatch => {
  const id = v4();
  const positionObject = typeof position === 'string' ? xyzStringToObject(position) : position;
  const rotationObject = typeof rotation === 'string' ? xyzStringToObject(rotation) : rotation;
  dispatch({
    type: ADD_CAMERA,
    payload: {
      camera: {
        id,
        position: positionObject,
        rotation: rotationObject,
      },
    },
  });
};

export const setCurrentCamera = id => dispatch =>
  dispatch({
    type: SET_CURRENT_CAMERA,
    payload: { id },
  });

export const actions = {
  addCamera,
  setCurrentCamera,
};

export const mapping = {
  [ADD_CAMERA]: (state, action) =>
    ({ ...state, list: state.list.concat(action.payload.camera) }),
  [SET_CURRENT_CAMERA]: (state, action) =>
    ({ ...state, current: action.payload.id }),
};

export const reducer = reducerMaker(initialState, mapping);

export default reducer;
