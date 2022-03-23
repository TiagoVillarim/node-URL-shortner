"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var urlController_1 = require("./controller/urlController");
var api = (0, express_1.default)();
api.use(express_1.default.json());
var urlController = new urlController_1.URLController();
api.post("/shorten", urlController.shorten);
api.get("/teste", function (req, res) {
    res.send({ message: "ok" });
});
api.listen(3000, function () { return console.log("express is listening"); });
