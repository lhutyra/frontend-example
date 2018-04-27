export const createEventHandlerFor = name => props => ({
  type: name,
  [name]: { ...props }
});

export const className = createEventHandlerFor("className");
