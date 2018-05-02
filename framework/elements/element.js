import { node } from "../core/node";
import { initialElementState, elementReducer } from "./element.reducer";
import { h } from "snabbdom";

const createElement = elementName => (strings, ...args) => {
  const { props, children } = strings.reduce(
    elementReducer(args, elementName),
    initialElementState
  );

  return node(elementName, props, children);
};

export const div = createElement("div");
export const p = createElement("p");
export const h1 = createElement("h1");
export const h2 = createElement("h2");
export const h5 = createElement("h5");
export const span = createElement("span");
export const img = createElement("img");
export const button = createElement("button");
export const a = createElement("a");
export const nav = createElement("nav");
export const ul = createElement("ul");
export const li = createElement("li");
export const form = createElement("form");
export const input = createElement("input");
