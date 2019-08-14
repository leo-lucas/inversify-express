"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var Operacao_1 = require("Core/Operacao");
var ResourceOperacao_1 = require("Controllers/ResourceOperacao");
// set up container
var container = new inversify_1.Container();
// set up bindings
container.bind('ResourceOperacao').to(ResourceOperacao_1.ResourceOperacao);
container.bind('Operacao').to(Operacao_1.Operacao);
exports.default = container;
