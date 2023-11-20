import { Context, Next } from "koa";


export async function logger(ctx: Context, next: Next) {
    console.log(`REQUEST: ${ctx.method} ${ctx.path}`);
    console.log("REQ_HEADER:", ctx.header);
    console.log("REQ_BODY:", ctx.body);


    await next();
    console.log("RESPONSE:",ctx.response);
}