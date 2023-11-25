import {IRouterContext}  from "koa-router";

export class GetUser {

    public method = "GET";
    public path = "/user";

    public async api(ctx: IRouterContext):Promise<void> {
        ctx.body = {
            message : "from  get user controller"
        };
    }


}