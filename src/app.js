import _ from "../framework";
import { Navbar } from "./navbar";
import { Label } from "./label";
import { List } from "./list";
import { Loader } from "./loader";
import { Card } from "./card";

const state = {
  appName: "Pokeworld",
  pageTitle: "Research results",
  resultSet: [],
  selectedItem: { item: {}, details: {} },
  filter: ""
};

const methods = {
  onLoad: methods => fetchPokemon(methods.changeResultSet),
  changeResultSet: (state, resultSet) => ({ ...state, resultSet }),
  optimistSelectItem: (state, item) => ({
    ...state,
    selectedItem: { item, details: {} }
  }),
  setDetails: (state, details) => ({
    ...state,
    selectedItem: { ...state.selectedItem, details }
  }),
  filter: (state, filter) => ({ ...state, filter })
};

// const fetchDetails = ({ optimistSelectItem, setDetails }) => item => {
//   optimistSelectItem(item);
//   return Promise.resolve({
//     name: item.name,
//     weight: 69,
//     sprites: {
//       front_default:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//     }
//   }).then(setDetails);
// };

const fetchDetails = ({ optimistSelectItem, setDetails }) => item => {
  optimistSelectItem(item);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${item.name.toLowerCase()}`)
    .then(res => res.json())
    .then(setDetails);
};

const ucFirst = str => `${str[0].toUpperCase()}${str.slice(1)}`;

// const onLoad = ({ changeResultSet }) =>
//   Promise.resolve([
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/1/",
//       name: "bulbasaur"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/2/",
//       name: "ivysaur"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/3/",
//       name: "venusaur"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/4/",
//       name: "charmander"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/5/",
//       name: "charmeleon"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/6/",
//       name: "charizard"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/7/",
//       name: "squirtle"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/8/",
//       name: "wartortle"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/9/",
//       name: "blastoise"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/10/",
//       name: "caterpie"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/11/",
//       name: "metapod"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/12/",
//       name: "butterfree"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/13/",
//       name: "weedle"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/14/",
//       name: "kakuna"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/15/",
//       name: "beedrill"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/16/",
//       name: "pidgey"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/17/",
//       name: "pidgeotto"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/18/",
//       name: "pidgeot"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/19/",
//       name: "rattata"
//     },
//     {
//       url: "https://pokeapi.co/api/v2/pokemon/20/",
//       name: "raticate"
//     }
//   ]).then(res =>
//     changeResultSet(
//       res.map(item => ({ ...item, name: ucFirst(item.name), selected: false }))
//     )
//   );

const onLoad = ({ changeResultSet }) =>
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(({ results }) => results)
    .then(res =>
      changeResultSet(
        res.map(item => ({
          ...item,
          name: ucFirst(item.name),
          selected: false
        }))
      )
    );

const template = ({
  appName,
  pageTitle,
  resultSet,
  selectedItem,
  filter,
  methods
}) => {
  return _.div`
  ${Navbar({ title: appName, handleSearch: methods.filter })}
  ${_.div`
      ${_.className({ container: true })}
      ${_.h2`${pageTitle}
        ${_.style({ marginTop: "30px", marginBottom: "30px" })}
        ${Label({ value: `${resultSet.length} found` })}
      `}
      ${
        resultSet.length
          ? _.div`
          ${_.className({ row: true })}
            ${_.div`
              ${_.className({
                "col-10": !!selectedItem.item.name,
                "col-12": !!!selectedItem.item.name
              })}
              ${List({
                items: resultSet,
                selectItem: fetchDetails(methods),
                criteria: filter,
                selectedItem
              })}
          `}
          ${selectedItem.item.name &&
            _.div`
                ${_.className({ "col-2": true })}
                ${Card({
                  title: selectedItem.item.name,
                  image: selectedItem.details.sprites
                    ? selectedItem.details.sprites.front_default
                    : null,
                  types: selectedItem.details.types
                })}
              `}
      `
          : Loader()
      }
    `}
  `;
};

export const App = _.createComponent({ template, state, methods, onLoad });
