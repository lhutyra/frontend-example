import _ from "../framework";
import { Loader } from "./loader";

const template = ({ title, image }) =>
  _.div`
	${_.className({ card: true })}
	
	${_.div`
		${_.style({ backgroundColor: "#efefef", textAlign: "center" })}
		${
      image
        ? _.img`
			${_.className({ "card-img-top": true })}
			${_.style({ height: "128px", width: "128px" })}
			${_.props({ src: image })}
		`
        : Loader({ size: "small" })
    }
	`}
	${_.div`
		${_.className({ "card-body": true })}
		${_.h5`
			${_.className({ "card-title": true })}
			${title}
		`}
	`}
`;

export const Card = _.createComponent({ template });
