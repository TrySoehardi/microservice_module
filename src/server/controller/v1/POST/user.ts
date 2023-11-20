import { DefaultContext, DefaultState, ParameterizedContext } from "koa";

export class PostUser {

    public method = "POST";
    public path = "/user";

    public async api(ctx: ParameterizedContext<DefaultContext, DefaultState>) {
        ctx.body = {
            message : "from post user controller"
        };
    }


}