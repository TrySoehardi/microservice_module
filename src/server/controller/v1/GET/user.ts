import { DefaultContext, DefaultState, ParameterizedContext } from "koa";

export class GetUser {

    public method = "GET";
    public path = "/user";

    public async api(ctx: ParameterizedContext<DefaultContext, DefaultState>) {
        ctx.body = {
            message : "from  get user controller"
        };
    }


}