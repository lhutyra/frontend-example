import _ from "../framework";
import { Navbar } from "./navbar";
import { Label } from "./label";
import { List } from "./list";

const state = {
  appName: "Pokeworld",
  pageTitle: "Research results",
  resultSet: []
};

const methods = {
  onLoad: methods => fetchPokemon(methods.changeResultSet),
  changeResultSet: (state, resultSet) => ({ ...state, resultSet }),
  selectItem: (state, item) => ({
    ...state,
    resultSet: state.resultSet.map(
      i =>
        i.name === item.name
          ? { ...i, selected: !i.selected }
          : { ...i, selected: false }
    )
  })
};

const onLoad = ({ changeResultSet }) =>
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(({ results }) => results)
    .then(res =>
      changeResultSet(res.map(item => ({ ...item, selected: false })))
    );

const template = ({ appName, pageTitle, resultSet, methods }) => {
  return _.div`
  ${Navbar({ title: appName })}
  ${_.div`
      ${_.className({ container: true })}
      ${_.h2`${pageTitle}
        ${Label({ value: `${resultSet.length} found` })}
      `}
      ${List({ items: resultSet, selectItem: methods.selectItem })}
    `}
  `;
};

export const App = _.createComponent({ template, state, methods, onLoad });
