import _ from "../framework";
import { Navbar } from "./navbar";
import { Label } from "./label";

const state = {
  appName: "Pokeworld",
  pageTitle: "Research results",
  resultSet: []
};

const actions = {
  changeResultSet: (state, resultSet) => ({ ...state, resultSet })
};

const fetchPokemon = dispatch => {
  return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(dataSet => dataSet.results)
    .then(dispatch);
};

const template = ({ appName, pageTitle, resultSet, actions }) => {
  //fetchPokemon(actions.changeResultSet);

  return _.div`
  ${Navbar({ title: appName })}
  ${_.div`
      ${_.className({ container: true })}
      ${_.h2`${pageTitle}
        ${Label({ value: `${resultSet.length} found` })}
      `}
    `}
  `;
};

export const App = _.createComponent(template, state, actions);
