import { div, h1, h2, span, button } from "./framework/templates/element";
import { onClick } from "./framework/directives/directive";

export const User = ({ name = "Jeff" }) =>
  div`
    ${h1`This is the page title`}
    ${h2`This is the page subtitle ${name}`}

    ${div`
        ${span`This is a div`}
        ${h2`With its children on h2`}
        ${button`Click me ${onClick(() => console.log("baaam"))}`}
      `}
  `;
