import _ from "../framework";

const state = {};
const template = ({ items, title }) => _.form`${_.className({
  "form-group": true
})}
	${_.input`${_.className({ "form-control": true })}
	${_.props({ type: "text", placeholder: "Search" })}
	${_.keyUp(() => console.log("lol"))}
	`}
`;

export const Input = _.createComponent({ template, state });
