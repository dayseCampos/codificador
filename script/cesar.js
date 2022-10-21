var resposta = document.querySelector(".resposta");
var mensagem1 = document.getElementById("mensagem1");
var mensagem2 = document.getElementById("mensagem2");
var imagem = document.getElementById("imagem");
var copiar = document.getElementById("copiar");

//codifica
function codificarCifra(mensagem, chave) {
  mensagem = mensagem.split("");
  chave = parseInt(chave, 10);
  var codigo = "";
  for (var i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      codigo += String.fromCharCode(((charCode + chave - 65) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      codigo += String.fromCharCode(((charCode + chave - 97) % 26) + 97);
    } else {
      codigo += mensagem[i];
    }
  }
  mensagem1.style.display = "none";
  mensagem2.style.display = "none";
  imagem.style.display = "none";
  resposta.innerText = codigo;
  copiar.style.display = "initial";
}
//decodifica
function decodificarCifra(mensagem, chave) {
  mensagem = mensagem.split("");
  chave = parseInt(chave, 10);
  var codigo = "";
  for (var i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      codigo += String.fromCharCode(((charCode - chave - 90) % 26) + 90);
    } else if (charCode >= 97 && charCode <= 122) {
      codigo += String.fromCharCode(((charCode - chave - 122) % 26) + 122);
    } else {
      codigo += mensagem[i];
    }
  }
  mensagem1.style.display = "none";
  mensagem2.style.display = "none";
  imagem.style.display = "none";
  resposta.innerText = codigo;
  copiar.style.display = "initial";
}
//botao de copiar
copiar.onclick = () => {
  navigator.clipboard.writeText(resposta.innerText);
}
