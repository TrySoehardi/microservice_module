import { DefaultContext, DefaultState, ParameterizedContext } from "koa";

export class UserController {

    public method = "GET";
    public path = "/user";
    public async api(ctx: ParameterizedContext<DefaultContext, DefaultState>) {
        ctx.body = {
            message : "from user controller"
        };
    }


}