import _ from "../framework";
import { Navbar } from "./navbar";
import { Label } from "./label";

const state = {
  appName: "Pokeworld",
  pageTitle: "Research results",
  resultSet: []
};

const methods = {
  changeResultSet: (state, resultSet) => ({ ...state, resultSet })
};

const fetchPokemon = dispatch => {
  return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(({ results }) => results)
    .then(dispatch);
};

const template = ({ appName, pageTitle, resultSet, actions }) => _.div`
  ${Navbar({ title: appName })}
  ${_.div`
      ${_.className({ container: true })}
      ${_.h2`${pageTitle}
        ${Label({ value: `${resultSet.length} found` })}
      `}
    `}
  `;

export const App = _.createComponent({ template, state, methods });
