import _ from "../framework";

const state = {};
const template = ({ handleKeyUp }) => _.form`${_.className({
  "form-group": true
})}
	${_.input`${_.className({ "form-control": true })}
	${_.props({ type: "text", placeholder: "Search" })}
	${_.keyUp(e => handleKeyUp(e.target.value))}
	`}
`;

export const Input = _.createComponent({ template, state });
