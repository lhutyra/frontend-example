import _ from "../framework";

const state = { items: ["Marvin", "Frachet"] };
const actions = {};
const template = ({ items, title }) =>
  _.div`
	${_.h1`${title}`}
	${_.forEach(items, item => _.a`${item} ${_.props({ href: item })}`)}
  `;

export const Navbar = _.createComponent(template, state, actions);
