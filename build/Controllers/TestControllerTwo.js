"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var inversify_express_utils_1 = require("inversify-express-utils");
// import { injectable, inject } from 'inversify'
var TestControllerTwo = /** @class */ (function () {
    function TestControllerTwo() {
    }
    TestControllerTwo.prototype.index = function (req, res, next) {
        return 'this.fooService.get(req.query.id)';
    };
    TestControllerTwo.prototype.list = function (start, count) {
        return 'this.fooService.get(start, count)';
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", String)
    ], TestControllerTwo.prototype, "index", null);
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __param(0, inversify_express_utils_1.queryParam('start')), __param(1, inversify_express_utils_1.queryParam('count')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", String)
    ], TestControllerTwo.prototype, "list", null);
    TestControllerTwo = __decorate([
        inversify_express_utils_1.controller('/foo')
    ], TestControllerTwo);
    return TestControllerTwo;
}());
exports.TestControllerTwo = TestControllerTwo;
