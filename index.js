import express from "express";
import * as server from "./server.js";
const PORT = 3000;

const app = express();

server.start();