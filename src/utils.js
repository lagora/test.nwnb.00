export const actionMapper = unboundActions => binder => dispatch =>
  ({
    actions: Object.keys(unboundActions).reduce(
      (all, k) => ({ ...all, [k]: binder(unboundActions[k], dispatch) }),
      {},
    ),
  });

export const domBinder = document => selector =>
  document.querySelector(selector);

export const makeAreas = areas => areas.map(p =>
  <LevelArea key={`level-area-${JSON.stringify(p)}`} { ...p} />
);

export const range = max => (min = 0) => (previous = []) =>
  (previous.length < (max - min) ? range(max)(min)(previous.concat('')) : previous.map((x, i) => i + min));

export const reducerMaker = (initialState, mapping) => (state = initialState, action) =>
  (action && mapping[action.type] ? mapping[action.type](state, action) : state);

export const xyzToString = ({ x, y, z }) =>
  `${x} ${y} ${z}`;

export default {
  domBinder,
  reducerMaker,
  xyzToString,
};
