import koa, { DefaultContext, DefaultState } from "koa";
import "./framework/middleware/log";
import {logger} from "./framework/middleware/logger";
import { Routers } from "./server/router";
const router = new Routers;

const app:koa<DefaultState, DefaultContext> = new koa();
const port = 3000;


(async()=>{
    try {
        await app.use(logger);
        await app.use(router.KoaRouter.routes());
        await app.listen(port);
        console.log(`server run in port ${port}`);
    } catch(error) {
        console.log(error);
    }
})();