import { createComponent } from "./core/component";
import { initApplication } from "./core/vDom";
import * as events from "./directives/events";
import * as attributes from "./directives/attributes";
import * as directives from "./directives/directives";
import * as elements from "./elements/element";

export default {
  createComponent,
  initApplication,
  ...elements,
  ...directives,
  ...attributes,
  ...events
};
