import _ from "../framework";
import { Input } from "./input";

const state = { items: ["Home", "About me"] };
const template = ({ items, title, handleSearch }) => _.nav`
	${_.className({ navbar: true, "navbar-light": true, "bg-light": true })}
	${_.div`${_.className({ "container-fluid": true })}
			${_.div`${_.className({ "navbar-header": true })}
				${_.a`${_.className({ "navbar-brand": true })}
					${title}
				`}
			`}
			${_.div`
				${_.form`${_.className({ "form-inline": true, "my-2": true, "my-lg-0": true })}
					${Input({ handleKeyUp: handleSearch })}
			`}
		`}
	`}
`;

export const Navbar = _.createComponent({ template, state });
