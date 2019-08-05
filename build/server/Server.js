"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var body_parser_1 = __importDefault(require("body-parser"));
// let server = new InversifyExpressServer(container)
// server.setConfig((app) => {
//   // add body parser
//   app.use(bodyParser.urlencoded({
//     extended: true
//   }))
//   app.use(bodyParser.json())
// })
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(container) {
        var _this = _super.call(this, container) || this;
        _this.setConfig(function (app) {
            // add body parser
            app.use(body_parser_1.default.urlencoded({
                extended: true
            }));
            app.use(body_parser_1.default.json());
        });
        return _this;
    }
    return Server;
}(inversify_express_utils_1.InversifyExpressServer));
exports.default = Server;
