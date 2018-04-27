import { create } from "domain";

const createAttribute = name => props => ({
  type: "directive",
  name,
  [name]: { ...props }
});

export const className = createAttribute("class");
export const style = createAttribute("style");
export const props = createAttribute("props");
