import _ from "../framework";
import { Navbar } from "./navbar";

const state = { name: "Jack" };
const actions = {
  changeName: state => ({
    ...state,
    name: state.name === "Marvin" ? "Thomas" : "Marvin"
  })
};

const template = ({ name, actions }) =>
  _.div`
  ${Navbar()}
  ${_.h1`This is the page title`}
  ${_.h2`This is the page subtitle ${name}`}

  ${_.div`
      ${_.span`This is a div ${_.style({
        backgroundColor: name === "Marvin" ? "blue" : "red"
      })}`}
      ${_.h2`With its children on h2`}
      ${_.button`Click me ${_.onClick(actions.changeName)}`}
    `}
  `;

export const User = _.createComponent(template, state, actions);
