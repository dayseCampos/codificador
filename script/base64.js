var resposta = document.querySelector(".resposta");
var mensagem1 = document.getElementById("mensagem1");
var mensagem2 = document.getElementById("mensagem2");
var imagem = document.getElementById("imagem");
var copiar = document.getElementById("copiar");

//codifica
function codificarBase64(mensagem) {
  var codigo = btoa(mensagem);
  mensagem1.style.display = "none";
  mensagem2.style.display = "none";
  imagem.style.display = "none";
  resposta.innerText = codigo;
  copiar.style.display = "initial";
}
//decodifica
function decodificarBase64(codigo) {
  var valido = true;
  // para evitar Failed to execute 'atob'
  for (var i = 0; i < codigo.length; i++) {
    var charCode = codigo[i].charCodeAt();
    if (
      !(
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode == 61 ||
        charCode == 43 ||
        charCode == 47 ||
        charCode == 32
      )
    ) {
      valido = false;
      tipo.style.backgroundColor = "lightcoral";
      setTimeout(
        () => (tipo.style.backgroundColor = "#009eff"),
        1000
      );
      tipo.style.transition = "1s";
      break;
    }
  } 
  if (valido) {
    var mensagem = atob(codigo);
    mensagem1.style.display = "none";
    mensagem2.style.display = "none";
    imagem.style.display = "none";
    resposta.innerText = mensagem;
    copiar.style.display = "initial";
  }
}
//botao de copiar
copiar.onclick = () => {
  navigator.clipboard.writeText(resposta.innerText);
}
