function descriptografar(stringDescriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length ; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptada;
}

var botaodescriptografar = document.querySelector ('.descriptografar');
botaodescriptografar.addEventListener('click', function(){
	antigoResultado.classList.add ('invisivel');
	novoResultado.classList.add('visivel');

	const textoDescriptado = descriptografar (inputEntrada.value);
	inputSaida.textContent = textoDescriptado;
});