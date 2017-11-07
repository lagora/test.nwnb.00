import { v4 } from 'uuid';
import { hash as h } from 'spark-md5';
import { range, reducerMaker, xyzToString } from '../utils';

const areaSize = 50;
const storyHeight = 4;
const colorMapping = ['red', 'orange', 'yellow', 'green'];

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

export const getSize = size => ({ width: size * 0.5, height: size * 1.5, depth: size * 0.5 });

export const cross = a => b => a.map((x, i) => ({ ...a[i], ...b[i] }));

export const expand = size => i => i * size;

export const getStoriesCount = ({ height }) => heightOfAfloor => parseInt(height / heightOfAfloor, 10);

// export const makeStoryCorner = ({ id, position, size }) => {
// };

export const makeBuildingFloor = ({ id, position, size }) => {
  const s = { width: size.width - 0.1, height: 0.1, depth: size.depth - 0.1 };
  const floorPosition = {
    ...position,
    y: (position.y - (size.height / 2)),
  };
  const key = `${id}-floor-${h(v4())}`;
  const material = 'color: red';
  return ({
    id: key, key, position: xyzToString(floorPosition), ...s, material,
  });
};

export const makeBuildingStories = ({ id, position, size }) =>
  range(getStoriesCount(size)(storyHeight))(0)().map((story, i) => {
    const s = { ...size, height: storyHeight };
    const storyPosition = {
      ...position,
      y: (position.y - (size.height / 2)) + (s.height * i) + (s.height / 2),
    };
    const key = `${id}-story-${i}`;
    // const material = `color: ${colorMapping[parseInt(i % colorMapping.length, 10)]}`;
    const floor = makeBuildingFloor({ id: key, position: storyPosition, size: s });
    return ({
      id: key, key, position: xyzToString(storyPosition), ...s, floor,
    });
  });

export const makeBuilding = () => expandFunction => (i, x, z) => (size, levelAreaSize) => {
  const position = {
    x: expandFunction(levelAreaSize)(x),
    y: (size.height / 2),
    z: expandFunction(levelAreaSize)(z),
  };
  const id = `building-${i}`;
  const stories = makeBuildingStories({ id, position, size });
  return {
    i, id, key: id, position, stories, ...size,
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
