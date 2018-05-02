import _ from "../framework";
import loaderPath from "./loader.gif";

const sizes = {
  medium: {
    height: "250px"
  },
  small: {
    height: "128px"
  }
};

const template = ({ size = "medium" }) => _.div`
	${_.className({ "text-center": true })}
	${_.img`
		${_.props({ src: loaderPath })}
		${_.style(sizes[size])}
		${_.className({ rounded: true, "mx-auto": true, "d-block": true })}
	`}
`;

export const Loader = _.createComponent({ template });
