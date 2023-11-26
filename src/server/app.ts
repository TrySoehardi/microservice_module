// import "dotenv/config";
// import https from "https";
// import fs from "fs";
// import path from "path";
import koa from "koa";
// import "./framework/middleware/log";
import {logger} from "../framework/middleware/logger";
import { Routers } from "../server/router";
import koaBody from "koa-body";
import helmet from "koa-helmet";
const router = new Routers;


export class App {
    private app;
    constructor() {
        this.app = new koa();
        this.app.use(helmet());
        this.app.use(koaBody());
        this.app.use(logger);
        this.app.use(router.getRouter().routes());
    }

    public getApp() {
        return this.app;
    }

}













// const app = new koa();
// const port = process.env.PORT;
// console.log(process.env.ENVIRONTMENT);
// (async()=>{
//     try {
      


//         await app.use(helmet());
//         await app.use(koaBody());
//         await app.use(logger);
//         await app.use(router.getRouter().routes());
//         await app.listen(port);
//         console.log(`server run in port ${port}`);

//         // // ~~ secure layer ~~ //
//         // https.createServer(
//         //     {
//         //         key :  fs.readFileSync(path.resolve(__dirname,"../",keyFileName)),
//         //         cert : fs.readFileSync(path.resolve(__dirname,"../",certFileName))
//         //     },
//         //     app.callback
//         //     )
//         //     .listen(port);
//         // console.log("SERVER RUN IN PORT ",port);

//     } catch(error) {
//         console.log(error);
//     }
// })();

// //TEST INTEGRATION
// interface Itest {
//     app?: null | typeof app
// }
// const test: Itest = {};
// if(process.env.ENVIRONMENT === "development") {
//     test.app = app;
// }
// export default test;