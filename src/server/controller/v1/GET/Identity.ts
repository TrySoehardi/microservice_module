import { IRouterContext } from "koa-router";
import { Controller } from "../../baseController";
import Joi from "joi";



export class GetIdentity extends Controller {
    constructor() {
        super({
            path :   "/identity",
            method : "GET"
        });

    }

    private QuerySchema = Joi.object({
        id :            Joi.string().required(),
        privateNumber : Joi.number().required()
    });


    public async api(ctx: IRouterContext): Promise<void> {
        this.validateQueryParams(ctx,this.QuerySchema);
        ctx.body = {
            message : "oke bosku"
        };
    }

}