$(function(){

	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e){

		var keyCode = e.keyCode;

		if(keyCode === 13){
			//Disparar Evento
			//listaAtividades.prepend('<li>' + atividade.val() + '</li>'); 

			//adicionarNaLista(atividade.val());

			atividade.trigger('enter', atividade.val());
			atividade.val('');			
		}

	});


	/*function adicionarNaLista(texto){
		listaAtividades.prepend('<li>' + texto + '</li>');
	}*?*/

	atividade.on('enter', function(evento, texto){
		listaAtividades.prepend('<li>' + texto + '</li>');
	});

});