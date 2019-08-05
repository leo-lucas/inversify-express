"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Server_1 = __importDefault(require("./Server/Server"));
var container_1 = __importDefault(require("./Server/container"));
var app = new Server_1.default(container_1.default).build();
app.listen(3000);
