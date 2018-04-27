import * as snabbdom from "snabbdom";
import toVNode from "snabbdom/tovnode";

export const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);

export const initApplication = (selector, vNode) =>
  patch(toVNode(document.querySelector(selector)), vNode.element);
