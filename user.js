// const div = (strings, ...args) =>
//   strings.reduce((acc, curr, index) => acc + curr + (args[index] || ""), "");

// const color = "blue";
// const red = "red";

// console.log(div`lol ${color} hahah ${red}`);
const div = require("./div");

const User = (props, actions) => div`Hello ${props.name}`;

module.exports = User;
