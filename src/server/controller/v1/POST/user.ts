import Joi from "joi";
import { IRouterContext } from "koa-router";
import { Controller } from "../../baseController";

export class PostUser extends Controller {
    constructor() {
        super({
            path :   "/user",
            method : "POST"
        });
    }

    private bodyFormatSchema = Joi.object({
        userName : Joi.string().required()
    });

    public async api(ctx: IRouterContext) {
        this.validateBody(ctx, this.bodyFormatSchema);
        ctx.body = {
            message : "validation oke"
        };
    }

}