"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var TestController_1 = require("../Controllers/TestController");
var TestControllerTwo_1 = require("../Controllers/TestControllerTwo");
// set up container
var container = new inversify_1.Container();
// set up bindings
container.bind('TestController').to(TestController_1.TestController);
container.bind('TestControllerTwo').to(TestControllerTwo_1.TestControllerTwo);
exports.default = container;
