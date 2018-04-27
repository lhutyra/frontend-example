import { patch } from "./vDom";

export const createComponent = (node, defaultState, actions) => {
  let state = defaultState;
  let previous;

  const mappedActions = props =>
    Object.keys(actions).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = { ...actions[key](state, ...args) };
          const newNode = node({
            ...state,
            ...props,
            actions: mappedActions(props)
          });
          patch(previous.element, newNode.element);
          previous = newNode;
        }
      }),
      {}
    );

  return (props = {}) => {
    previous = node({ ...state, ...props, actions: mappedActions(props) });
    return previous;
  };
};
