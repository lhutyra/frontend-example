import h from "snabbdom/h";

const actionHandlers = {
  directive: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString],
    className: { ...state.className, ...newElement.className }
  }),
  event: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString],
    events: { ...state.events, ...newElement.event }
  }),
  element: (state, templateString, newElement) => ({
    ...state,
    children: [...state.children, templateString, newElement.element]
  }),
  text: (state, current, currentArg) => ({
    ...state,
    children: [...state.children, `${current || ""}${currentArg || ""}`]
  })
};

const elementReducer = (args, elementName) => (acc, templateString, index) => {
  const currentArg = args[index];

  if (currentArg && currentArg.type) {
    return actionHandlers[currentArg.type](acc, templateString, currentArg);
  }

  return actionHandlers.text(acc, templateString, currentArg);
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
    type: "element",
    element: h(elementName, { on: events, class: className }, children)
  };
};

export const div = createElement("div");
export const h1 = createElement("h1");
export const h2 = createElement("h2");
export const span = createElement("span");
export const button = createElement("button");
