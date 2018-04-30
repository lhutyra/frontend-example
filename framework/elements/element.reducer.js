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
  iterable: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString, ...newElement.element]
  }),
  text: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, `${templateString || ""}${newElement || ""}`]
  })
};

export const initialElementState = {
  children: [],
  props: {}
};

export const elementReducer = (args, elementName) => (
  acc,
  templateString,
  index
) => {
  const currentArg = args[index];
  const type = (currentArg && currentArg.type) || "text";

  return actionHandlers[type](acc, templateString, currentArg);
};
