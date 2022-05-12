var cabecalho = document.querySelector(".cabecalho");

cabecalho.addEventListener('mouseover', function (){
	var textopequeno = document.querySelector(".texto-pequeno");
	textopequeno.classList.add("fadeIn");
});

cabecalho.addEventListener('click', function(){
	cabecalho.classList.add("invisivel");
});

/*var puxaCabecalho = document.querySelector(".simbolo-lampada");
puxaCabecalho.addEventListener('click', function(){
	if (cabecalho.classList != 'invisivel') {
		cabecalho.classList.add('invisivel');
	} else {
		cabecalho.classList.remove ('invisivel');
	}
});
Essa nem era a forma final, tentei também direto as
condições, inclusive 'cabecalho invisivel', e não 
consegui de jeito nenhum o resultado que eu queria */

function some (){
	cabecalho.classList.add('invisivel');
}
function aparece (){
	cabecalho.classList.remove('invisivel');
}

var puxaCabecalho = document.querySelector(".simbolo-lampada");
puxaCabecalho.addEventListener('click', function(){
	if (cabecalho.classList == 'cabecalho invisivel'){
		aparece();
	} else {
		some();
	}
});

