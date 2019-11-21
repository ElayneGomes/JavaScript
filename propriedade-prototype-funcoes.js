
function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
//	this.fabricante = 'VW'
} 

Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function(){
	console.log('Ligando o carro!!!...');
}

var fox = new Carro('FOX', 'AAA-111');
console.log('Fox', fox);

var gol = new Carro('GOL', 'AAA-222');
console.log('Gol', gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

fox.ligar();