import { createComponent } from "./framework/core/component";
import { div, h1, h2, span, button } from "./framework/templates/element";
import { onClick } from "./framework/directives/directive";

const actions = { changeName: state => ({ ...state, name: "Marvin" }) };
const defaultState = { name: "Jack" };

export const User = createComponent(
  ({ name, actions }) => div`
    ${h1`This is the page title`}
    ${h2`This is the page subtitle ${name}`}

    ${div`
        ${span`This is a div`}
        ${h2`With its children on h2`}
        ${button`Click me ${onClick(actions.changeName)}`}
      `}
    `,
  defaultState,
  actions
);
