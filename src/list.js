import _ from "../framework";

const ucFirst = str => `${str[0].toUpperCase()}${str.slice(1)}`;

const template = ({ items }) => _.ul`
	${_.className({ "list-group": true })}
	${_.forEach(
    items,
    item =>
      _.li`${_.className({ "list-group-item": true })}${ucFirst(item.name)}`
  )}
	`;

export const List = _.createComponent({ template });
