import Clientes from './clientes.js';
import Impuestos from './impuestos.js';


const cliente1 = new Clientes('Manuel');
const impuesto1 = new Impuestos('1200000','1000000');
cliente1.calcularImpuesto(impuesto1)

console.log(cliente1);