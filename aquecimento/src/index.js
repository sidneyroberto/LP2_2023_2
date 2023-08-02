"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum = function (a, b) {
    return a + b;
};
var n1 = 5;
// n2 é do tipo number por inferência
var n2 = 6;
console.log(sum(n1, n2));
var str1 = 'Oi';
var str2 = ' galerinha';
// A linha abaixo causa um erro
//console.log(sum(str1, str2))
var c1 = {
    name: 'Sidney Sousa',
    phone: '(99) 99999-99999',
};
console.log(c1.name);
var name = c1.name;
console.log(name);
var decimal = -1;
if (decimal) {
    console.log('decimal tem valor');
}
var binary = 2;
console.log(binary);
var hex = 0xf;
console.log(hex);
/*const big: bigint = 19828923876234823487234675234n
console.log(big)*/
var arr1 = [1, 2, 4, 56, 86, -3, 5];
var arr2 = [12, -6, 12, 123];
var arr3 = [];
// Criando uma Tupla
var t1 = ['LPs', 4];
var t2 = ['orange', 'laranja'];
var cep1 = ['79200-000', 'Aquidauana'];
var ceps;
ceps = ['79200-000', 'Aquidauana'];
