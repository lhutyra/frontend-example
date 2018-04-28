import _ from "../framework";

const template = ({ value }) => _.span`
	${_.className({ label: true, "label-default": true })}
	${value}
`;

export const Label = _.createComponent(template);
