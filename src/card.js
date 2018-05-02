import _ from "../framework";

const template = ({ title, image }) =>
  _.div`
	${_.className({ card: true })}
	${_.img`
		${_.className({ "card-img-top": true })}
		${_.style({ backgroundColor: "#efefef" })}
		${_.props({ src: image })}
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
