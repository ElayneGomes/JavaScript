
var contador = (function(){
	var valor = 0; //privado
	
	var incrementar = function(){
		valor++;
	};

	var reset = function(){
		console.log('Valor atual do contador: ', valor);
		valor = 0;		
	}

	return {
		incrementar: incrementar,
		reset: reset
	}
	
})();

contador.incrementar();
contador.incrementar();
contador.reset();

contador.incrementar();
contador.reset();

