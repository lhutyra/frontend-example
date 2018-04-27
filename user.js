import { div } from "./framework/templates/div";
import { onClick } from "./framework/directives/onClick";

export const User = ({ name }) =>
  div`Hello ${name} ${onClick(() => console.log(name))}`;
