// ~~ GET ~~ //
import { GetUser } from "./v1/GET/user";

// ~~ POST ~~ //
import { PostUser } from "./v1/POST/user";

export const controllers = [
    new GetUser(),
    new PostUser,
];