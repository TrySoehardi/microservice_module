import "dotenv/config";
import koa from "koa";
import "./framework/middleware/log";
import {logger} from "./framework/middleware/logger";
import { Routers } from "./server/router";
import koaBody from "koa-body";
import helmet from "koa-helmet";
const router = new Routers;

const app = new koa();
const port = 3000;
console.log(process.env.ENVIRONTMENT);
(async()=>{
    try {
        await app.use(helmet());
        await app.use(koaBody());
        await app.use(logger);
        await app.use(router.getRouter().routes());
        await app.listen(port);
        console.log(`server run in port ${port}`);
    } catch(error) {
        console.log(error);
    }
})();

//TEST INTEGRATION
interface Itest {
    app?: null | typeof app
}
const test: Itest = {};
if(process.env.ENVIRONMENT === "development") {
    test.app = app;
}
export default test;
