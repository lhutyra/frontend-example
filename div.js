const h = require("snabbdom/h").default;

const div = (strings, ...args) => {
  const str = strings.reduce(
    (acc, curr, index) => acc + curr + (args[index] || ""),
    ""
  );

  return h("div", {}, str);
};

module.exports = div;
