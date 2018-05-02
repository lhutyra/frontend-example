import _ from "../framework";

const template = ({ name, types = [] }) => _.p`
	${name} is a pokemon of types: ${types.map(type => type.type.name).join(", ")}
`;

export const Types = _.createComponent({ template });
