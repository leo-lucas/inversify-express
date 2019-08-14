"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeOperacoes_1 = require("./TypeOperacoes");
var Operacao = /** @class */ (function () {
    function Operacao() {
    }
    Operacao.prototype.calc = function (valor, valor2, operacao) {
        var _a;
        return (_a = {}, _a[TypeOperacoes_1.TypeOperacoes.add] = valor + valor2, _a[TypeOperacoes_1.TypeOperacoes.sub] = valor - valor2, _a[TypeOperacoes_1.TypeOperacoes.div] = valor / valor2, _a[TypeOperacoes_1.TypeOperacoes.mul] = valor * valor2, _a)[operacao];
    };
    return Operacao;
}());
exports.Operacao = Operacao;
