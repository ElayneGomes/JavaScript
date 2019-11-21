
function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
}

// var fox = new Carro('FOX', ''AAA-111);

var fox = {};
var gol = {};

Carro.call(fox, 'Fox', 'AAA-111');

Carro.apply(gol, ['Gol', 'AAA-222']);

console.log('FOX: ', fox);
console.log('GOL: ', gol);