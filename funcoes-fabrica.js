 
 var criarCarroDaVolks = function(nome, placa){
 	return {
 		nome: nome,
 		placa: placa,
 		fabricante: 'VW'
 	};
 }

 var fox = criarCarroDaVolks('Fox', 'AAA-111');
 console.log('FOX: ', fox);

 var gol = criarCarroDaVolks('Gol', 'AAA-222');
 console.log('GOL: ', gol);