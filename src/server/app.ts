import koa from "koa";
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