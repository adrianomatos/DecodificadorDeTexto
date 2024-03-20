// responsiveVoice.speak(
//   "Bem vindo ao Decript. Insira sua mensagem",
//   "Brazilian Portuguese Female",
//   {
//     rate: 1.2,
//   }
// );

function limparInput() {
  textoInserido = document.querySelector("input");
  textoInserido.value = "";
}

function exibirBotaoCopiar() {
  document.getElementById("botaoCopiar").removeAttribute("disabled");
}
function ocultarBotaoCopiar() {
  document.getElementById("botaoCopiar").setAttribute("disabled", true);
}

function copiarTexto() {
  var msg = document.getElementById("p").innerHTML;
  navigator.clipboard.writeText(msg);
}

// -------------------- FUNÇÕES ACIMA --------------------

document.getElementById("botaoCopiar").addEventListener("click", copiarTexto);
ocultarBotaoCopiar();

function criptografar() {
  let mensagemOriginal = document.querySelector("input").value;
  let textoCifrado = mensagemOriginal
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  let paragrafo = document.querySelector("p");
  paragrafo.innerHTML = textoCifrado;
  limparInput();
  exibirBotaoCopiar();
}

function descriptografar() {
  let textoCifrado = document.querySelector("input").value;
  let mensagemOriginal = textoCifrado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  let paragrafo = document.querySelector("p");
  paragrafo.innerHTML = mensagemOriginal;
  limparInput();
  ocultarBotaoCopiar();
}
