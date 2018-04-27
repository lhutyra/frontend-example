export const createEventHandlerFor = name => f => ({
  type: name,
  event: { [name]: f }
});

export const onClick = createEventHandlerFor("click");
