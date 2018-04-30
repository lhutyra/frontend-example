import h from "snabbdom/h";

export const node = (elementName, props, children) => ({
  type: "element",
  element: h(elementName, props, children)
});
