import { initApplication } from "./framework/internals/vDom";
import { User } from "./user";

initApplication("#app", User({}));
