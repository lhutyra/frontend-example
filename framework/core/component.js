export const createComponent = (node, defaultState, actions) => (
  props = {}
) => {
  const state = defaultState;

  const mappedActions = Object.keys(actions).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (...args) => actions[key](state, ...args)
    }),
    {}
  );

  return node({ ...state, ...props, actions: mappedActions });
};
