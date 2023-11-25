import Router from "koa-router";
import { controllers } from "./controller";

export class Routers {
    public KoaRouter;
    private prefix = "/api";
    constructor() {
        this.KoaRouter = new Router;
        for (const controller of controllers) {
            if (controller.method == "GET") {
                this.KoaRouter.get(this.prefix+controller.path,(ctx)=>(controller.api(ctx)));
            } else if (controller.method == "POST") {
                this.KoaRouter.post(this.prefix+controller.path, (ctx)=>(controller.api(ctx)));
            } else if (controller.method == "DELETE") {
                this.KoaRouter.delete(this.prefix+controller.path, (ctx)=>(controller.api(ctx)));
            } else if (controller.method == "PUT") {
                this.KoaRouter.put(this.prefix+controller.path, (ctx)=>(controller.api(ctx)));
            }
        }
    }
    public getRouter() {
        return this.KoaRouter;
    }

}