
var Carro = function(nome, placa){
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}

var fox = new Carro('FOX', 'AAA-111');
console.log('FOX: ', fox);