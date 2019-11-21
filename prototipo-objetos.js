 
 var volks = {
 	fabricante: 'VW'
 }

/*
 var fox = {
 	nome: 'Fox',
 	placa: 'AAA-111'
 }
*/

/*
 var gol = {
 	nome: 'Gol', 
 	placa: 'AAA-222'
 }
*/

 var fox = Object.create(volks);
 fox.nome = 'Fox',
 fox.placa = 'AAA-111'

 var gol = Object.create(volks);
 gol.nome = 'Gol',
 gol.placa = 'AAA-222'

 console.log('Fox: ', fox);
 console.log('Gol: ', gol);

 console.log(Object.getPrototypeOf(fox));

 console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

 console.log('fox.fabricante', fox.fabricante);
 console.log('gol.fabricante', gol.fabricante);

 Object.setPrototypeOf(fox, volks);
 console.log('fox.fabricante ->', fox.fabricante);
 console.log('gol.fabricante ->', gol.fabricante);

 console.log('toString do Fox: ', fox);