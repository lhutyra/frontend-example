export const createDirective = name => f => ({
  type: name,
  directive: { [name]: f }
});
