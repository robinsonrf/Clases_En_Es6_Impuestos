"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cliente1 = new _clientes["default"]('Manuel');
var impuesto1 = new _impuestos["default"]('1200000', '1000000');
cliente1.calcularImpuesto(impuesto1);
console.log(cliente1);