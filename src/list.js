import _ from "../framework";

const ucFirst = str => `${str[0].toUpperCase()}${str.slice(1)}`;

const template = ({ items, selectItem }) => _.div`
	${_.className({ "list-group": true })}
	${_.forEach(
    items,
    item =>
      _.a`
		${_.onClick(() => selectItem(item))}
	 	 ${_.className({
       "list-group-item": true,
       "list-group-item-action": true,
       active: item.selected
     })}${ucFirst(item.name)}`
  )}
	`;

export const List = _.createComponent({ template });
