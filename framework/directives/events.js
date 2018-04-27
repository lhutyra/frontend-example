export const createEventHandlerFor = name => f => ({
  type: "event",
  event: { [name]: f }
});

export const onClick = createEventHandlerFor("click");
