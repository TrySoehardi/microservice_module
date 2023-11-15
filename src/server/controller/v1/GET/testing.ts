import { DefaultContext, DefaultState, ParameterizedContext } from "koa";

export class Testing {

    public path = "GET";
    public async api(ctx: ParameterizedContext<DefaultContext, DefaultState>) {
        ctx.body = {
            message : "oke testing"
        };
    }


}