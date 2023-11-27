import Joi from "joi";
import {IRouterContext}  from "koa-router";
import { Controller } from "../../baseController";

export class GetUser extends Controller {
    constructor() {
        super({
            path :   "/user",
            method : "GET"
        });
    }

    private querySchema = Joi.object({
        id : Joi.string().required()
    });


    public async api(ctx: IRouterContext):Promise<void> {
        this.validateQueryParams(ctx, this.querySchema);
        ctx.body = {
            message : "validation oke"
        };
    }


}