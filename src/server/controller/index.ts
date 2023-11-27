// ~~ GET ~~ //
import { GetIdentity } from "./v1/GET/Identity";
import { GetUser } from "./v1/GET/user";

// ~~ POST ~~ //
import { PostUser } from "./v1/POST/user";

export const controllers = [
    new GetUser(),
    new PostUser(),
    new GetIdentity()
];