export const createEventHandlerFor = name => props => ({
  type: "directive",
  name,
  [name]: { ...props }
});

export const className = createEventHandlerFor("class");
export const style = createEventHandlerFor("style");
