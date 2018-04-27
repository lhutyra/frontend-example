import h from "snabbdom/h";

const actionHandlers = {
  className: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString],
    className: { ...state.className, ...newElement.className }
  }),
  event: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString],
    events: { ...state.events, ...newElement.event }
  }),
  element: (state, newElement) => ({
    ...state,
    children: [...state.children, newElement.element]
  }),
  default: (state, current, currentArg) => ({
    ...state,
    children: [...state.children, `${current || ""}${currentArg || ""}`]
  })
};

const elementReducer = (args, elementName) => (acc, templateString, index) => {
  const currentArg = args[index];

  if (currentArg) {
    if (currentArg.event) {
      return actionHandlers.event(acc, templateString, currentArg);
    }

    if (currentArg.className) {
      return actionHandlers.className(acc, templateString, currentArg);
    }

    if (currentArg.element) {
      return actionHandlers.element(acc, currentArg);
    }
  }

  return actionHandlers.default(acc, templateString, currentArg);
};

const createElement = elementName => (strings, ...args) => {
  const { events, children, className } = strings.reduce(
    elementReducer(args, elementName),
    {
      children: [],
      events: {},
      className: {}
    }
  );

  return {
    type: elementName,
    element: h(elementName, { on: events, class: className }, children)
  };
};

export const div = createElement("div");
export const h1 = createElement("h1");
export const h2 = createElement("h2");
export const span = createElement("span");
export const button = createElement("button");
