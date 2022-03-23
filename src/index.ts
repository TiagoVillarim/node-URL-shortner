import express from "express";
import { URLController } from "./controller/urlController";
import { MongoConnection } from "./database/mongoConnection";



const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect()

const urlController = new URLController();

api.post("/shorten", urlController.shorten);

api.get("/:hash", urlController.redirect);

api.listen(3000, () => console.log("express is listening"));