import h from "snabbdom/h";

const initialElementState = {
  children: [],
  props: {}
};

const actionHandlers = {
  directive: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString],
    props: {
      ...state.props,
      [newElement.name]: {
        ...state.props[newElement.name],
        ...newElement[newElement.name]
      }
    }
  }),
  event: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString],
    props: { ...state.props, on: { ...state.props.on, ...newElement.event } }
  }),
  element: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString, newElement.element]
  }),
  text: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, `${templateString || ""}${newElement || ""}`]
  })
};

const elementReducer = (args, elementName) => (acc, templateString, index) => {
  const currentArg = args[index];
  const type = (currentArg && currentArg.type) || "text";

  return actionHandlers[type](acc, templateString, currentArg);
};

const createElement = elementName => (strings, ...args) => {
  const { props, children } = strings.reduce(
    elementReducer(args, elementName),
    initialElementState
  );

  return {
    type: "element",
    element: h(elementName, props, children)
  };
};

export const div = createElement("div");
export const h1 = createElement("h1");
export const h2 = createElement("h2");
export const span = createElement("span");
export const button = createElement("button");
