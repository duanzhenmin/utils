import local from "./local";
import session from "./session";
import cookie from "./cookie";

export default {
  ...local,
  ...session,
  ...cookie
}
