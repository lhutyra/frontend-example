export const forEach = (list, handler) => ({
  type: "iterable",
  element: list.map(item => handler(item).element)
});
