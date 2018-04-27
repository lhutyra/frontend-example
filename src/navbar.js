import _ from "../framework";

const state = {
  items: ["Marvin", "Frachet"]
};
const actions = {};

const template = ({ items, actions }) =>
  _.div`
	${_.forEach(items, item => _.a`${item} ${_.props({ href: item })}`)}
  `;

export const Navbar = _.createComponent(template, state, actions);
