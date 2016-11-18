import express from "express";
import * as routes from "./routes.js";
import {SurvivorHandler} from "./handlers/survivor.js";
const PORT = 3000;

const app = express();

var handlers = {
  survivor: new SurvivorHandler()
};

export function start(){
    routes.setup(app, handlers);
    app.listen(PORT, () => console.log(`ZSSN API - port ${PORT}`));
}