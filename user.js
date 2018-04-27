import { div } from "./framework/templates/div";
import { onClick } from "./framework/directives/onClick";

export const User = (props, actions) =>
  div`Hello ${props.name} ${onClick(() => console.log(props.name))}`;
