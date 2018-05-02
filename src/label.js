import _ from "../framework";

const template = ({ value }) => _.span`
	${_.className({ badge: true, "badge-secondary": true })}
	${value}
`;

export const Label = _.createComponent({ template });
