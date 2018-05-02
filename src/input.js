import _ from "../framework";

const state = {};
const template = ({ handleKeyUp }) => _.input`${_.className({
  "form-control": true,
  "mr-sm-2": true
})}
${_.props({ type: "text", placeholder: "Search" })}
${_.keyUp(e => handleKeyUp(e.target.value))}
`;

export const Input = _.createComponent({ template, state });
