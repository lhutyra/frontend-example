export const createEventHandlerFor = name => props => ({
  type: "directive",
  [name]: { ...props }
});

export const className = createEventHandlerFor("className");
export const style = createEventHandlerFor("style");
