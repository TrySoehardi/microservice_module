import Joi from "joi";
import { IRouterContext } from "koa-router";

interface data {
    path: string
    method: string
}


export class Controller {
    path: string;
    method: string;
    constructor(data:data) {
        this.path = data.path;
        this.method = data.method;
    }

    public async validateBody(ctx: IRouterContext, schema: Joi.ObjectSchema): Promise<void> {
        const result = await schema.validate(ctx.request.body).error;
        if(result) {
            ctx.status = 422;
            ctx.body = result;
        }
    }

    public async validateQueryParams(ctx: IRouterContext, schema: Joi.ObjectSchema): Promise<void> {
        const result = await schema.validate(ctx.query).error;
        if(result) {
            ctx.status = 422;
            ctx.body = result;
        }
    }
}