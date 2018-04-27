import h from "snabbdom/h";

const events = {
  click: true
};

const isEvent = arg => arg && events[arg.type];

const reducer = args => (acc, curr, index) => {
  const currentArg = args[index];
  if (isEvent(currentArg)) {
    return {
      ...acc,
      events: { ...acc.events, ...currentArg.directive }
    };
  }
  return {
    ...acc,
    template: `${acc.template}${curr}${args[index] || ""}`
  };
};

export const div = (strings, ...args) => {
  const divReducer = reducer(args);
  const { events, template } = strings.reduce(divReducer, {
    template: "",
    events: {}
  });

  return h("div", { on: events }, template);
};
