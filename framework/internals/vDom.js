import * as snabbdom from "snabbdom";
import toVNode from "snabbdom/tovnode";

export const patch = snabbdom.init([
  // Init patch function with chosen modules
  require("snabbdom/modules/class").default, // makes it easy to toggle classes
  require("snabbdom/modules/props").default, // for setting properties on DOM elements
  require("snabbdom/modules/style").default, // handles styling on elements with support for animations
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);

export const initApplication = (selector, vNode) =>
  patch(toVNode(document.querySelector(selector)), vNode);
