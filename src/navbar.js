import _ from "../framework";
import { Input } from "./input";

const state = { items: ["Home", "About me"] };
const template = ({ items, title, handleSearch }) => _.nav`
	${_.className({ navbar: true, "navbar-default": true })}
	${_.div`${_.className({ "container-fluid": true })}
			${_.div`${_.className({ "navbar-header": true })}
				${_.a`${_.className({ "navbar-brand": true })}
					${title}
				`}
			`}
			${_.div`${_.className({ collapse: true, "navbar-collapse": true })}
				${_.ul`${_.className({ nav: true, "navbar-nav": true })}`}
				${_.form`${_.className({ "navbar-form": true, "navbar-left": true })}
					${Input({ handleKeyUp: handleSearch })}
			`}
		`}
	`}
`;

export const Navbar = _.createComponent({ template, state });
