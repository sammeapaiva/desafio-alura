const inputEntrada = document.querySelector ('#texto-encriptografar');
const inputSaida = document.querySelector ('.texto-resultado');

const antigoResultado = document.querySelector ('.bloco-resultado');
const novoResultado = document.querySelector('.bloco-resultado-2');

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["aimes", "ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length ; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

const botaocriptografar = document.querySelector ('.criptografar');
botaocriptografar.addEventListener('click', function(){
	antigoResultado.classList.add ('invisivel');
	novoResultado.classList.add('visivel');

	const textoEncriptado = encriptar(inputEntrada.value);
	inputSaida.textContent = textoEncriptado;
});
