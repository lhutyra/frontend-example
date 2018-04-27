import h from "snabbdom/h";

export const div = (strings, ...args) => {
  const component = strings.reduce(
    (acc, curr, index) => ({
      ...acc,
      template: `${acc.template}${curr}${args[index] || ""}`
    }),
    { template: "", events: {} }
  );

  return h("div", {}, component.template);
};
