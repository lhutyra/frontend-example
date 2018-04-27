import h from "snabbdom/h";

const reducer = args => ({ events, children }, curr, index) => {
  const currentArg = args[index];

  return {
    events:
      currentArg && currentArg.event
        ? { ...events, ...currentArg.event }
        : events,
    children: [
      ...children,
      currentArg && currentArg.element
        ? currentArg.element
        : `${curr || ""}${currentArg || ""}`
    ]
  };
};

const createComponent = key => (strings, ...args) => {
  const elementReducer = reducer(args);
  const { events, children } = strings.reduce(elementReducer, {
    children: [],
    events: {}
  });

  return { type: key, element: h(key, { on: events }, children) };
};

export const div = createComponent("div");
export const h1 = createComponent("h1");
export const h2 = createComponent("h2");
export const span = createComponent("span");
export const button = createComponent("button");
