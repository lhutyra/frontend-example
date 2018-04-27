import { initApplication } from "./framework/internals/vDom";
import { User } from "./user";

console.log(User({ name: "Marvin" }));
initApplication("#app", User({ name: "Marvin" }));
