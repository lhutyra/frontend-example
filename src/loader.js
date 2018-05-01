import _ from "../framework";
import loaderPath from "./loader.gif";

const template = () => _.div`
	${_.className({ "text-center": true })}
	${_.img`
		${_.props({ src: loaderPath })}
		${_.className({ rounded: true, "mx-auto": true, "d-block": true })}
	`}
`;

export const Loader = _.createComponent({ template });
