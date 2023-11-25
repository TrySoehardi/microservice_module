import Joi from "joi";
import { IRouterContext } from "koa-router";

export class PostUser {
    public method = "POST";
    public path = "/user";

// ~~ body validation ~~ //
    private async validation(ctx: IRouterContext) {
        const result = await Joi.object().keys({
            userName : Joi.string()
        }).validate(ctx.request.body).error;
        if(result) {
            ctx.status = 500;
            ctx.body = result;
        }
        return;
    }
// ~~~~~~~~~~~~~~~~~~~~~ //

    public async api(ctx: IRouterContext) {
        this.validation(ctx);
        ctx.body = {
            message : "validation oke"
        };
    }

}