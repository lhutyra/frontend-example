import _ from "../framework";

const toStringEquals = (first = "", second = "") =>
  first.toLowerCase() === second.toLowerCase();
const contains = (text, filter) =>
  filter ? text.toLowerCase().includes(filter.toLowerCase()) : true;

const template = ({ items, selectItem, criteria, selectedItem }) => _.div`
	${_.className({ "list-group": true })}
	${_.forEach(
    items,
    item =>
      contains(item.name, criteria)
        ? _.a`${_.onClick(() => selectItem(item))}
	 	 ${_.className({
       "list-group-item": true,
       "list-group-item-action": true,
       active: toStringEquals(item.name, selectedItem.item.name)
     })}${item.name}`
        : ""
  )}
	`;

export const List = _.createComponent({ template });
