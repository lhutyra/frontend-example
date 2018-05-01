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
  changeResultSet: (state, resultSet) => ({ ...state, resultSet })
};

const onLoad = ({ changeResultSet }) =>
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(({ results }) => results)
    .then(changeResultSet);

const template = ({ appName, pageTitle, resultSet }) => {
  return _.div`
  ${Navbar({ title: appName })}
  ${_.div`
      ${_.className({ container: true })}
      ${_.h2`${pageTitle}
        ${Label({ value: `${resultSet.length} found` })}
      `}
      ${List({ items: resultSet })}
    `}
  `;
};

export const App = _.createComponent({ template, state, methods, onLoad });
