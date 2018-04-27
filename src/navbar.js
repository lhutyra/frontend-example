import _ from "../framework";

console.log(_);

const state = {
  items: ["Marvin", "Frachet"]
};
const actions = {};

const template = ({ items, actions }) =>
  _.div`
	${_.a`check that ${_.props({ href: "https://google.com" })}`}
  `;

export const Navbar = _.createComponent(template, state, actions);
