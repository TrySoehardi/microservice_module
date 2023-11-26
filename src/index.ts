import "dotenv/config";
import "./framework/middleware/log";
import https from "https";
import fs from "fs";
import path from "path";

import { App } from "./server/app";


const port = process.env.PORT;
console.log(process.env.ENVIRONTMENT);
(async()=>{
      try {
        const app = new App();
        const certFileName = process.env.CERT_FILE || "bang.pem";
        const keyFileName = process.env.KEY_FILE || "bang.pem";
          https.createServer(
            {
                key :  fs.readFileSync(path.resolve(__dirname,"../",keyFileName)),
                cert : fs.readFileSync(path.resolve(__dirname,"../",certFileName))
            },
            app.getApp().callback()
            )
            .listen(port);
        console.log("SERVER RUN IN PORT ",port);
      }catch(error) {
        console.log(error);
      }
})();

