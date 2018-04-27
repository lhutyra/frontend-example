import { createComponent } from "./core/component";
import { initApplication } from "./core/vDom";
import { onClick } from "./directives/events";
import { className, style, props } from "./directives/attributes";
import { forEach } from "./directives/directives";
import { div, h1, h2, button, span, a } from "./elements/element";

export default {
  createComponent,
  initApplication,
  onClick,
  className,
  div,
  h1,
  h2,
  button,
  span,
  style,
  a,
  props,
  forEach
};
