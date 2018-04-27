import x from "../framework";

const state = { name: "Jack" };
const actions = {
  changeName: state => ({
    ...state,
    name: state.name === "Marvin" ? "Thomas" : "Marvin"
  })
};

const template = ({ name, actions }) =>
  x.div`
  ${x.h1`This is the page title`}
  ${x.h2`This is the page subtitle ${name}`}

  ${x.div`
      ${x.span`This is a div ${x.style({
        backgroundColor: name === "Marvin" ? "blue" : "red"
      })}`}
      ${x.h2`With its children on h2`}
      ${x.button`Click me ${x.onClick(actions.changeName)}`}
    `}
  `;

export const User = x.createComponent(template, state, actions);
