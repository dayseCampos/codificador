var metodo = document.querySelector(".metodo");
var passo = document.querySelector(".passo");
var enviar = document.querySelector(".enviar");
var tipoRadio = document.forms[0].coddecod;
var tipo = document.querySelector(".tipo");
var chave = document.getElementById("chave").value;
var entrada = document.querySelector("#entrada");

//metodo muda a cor se não for selecionado
passo.style.display = "none";
metodo.addEventListener("change", function () {
  metodo.style.backgroundColor = "#009eff";
  metodo.style.transition = "none";
  if (metodo.selectedIndex == 1) {
    //"passo" aparece se Cifra for selecionado
    passo.style.display = "flex";
  } else {
    passo.style.display = "none";
  }
});

tipo.addEventListener("change", function () {
  //muda a mensagem do botão enviar conforme selecionado
  if (tipoRadio[0].checked) {
    enviar.textContent = "Codificar";
  } else {
    enviar.textContent = "Decodificar";
  }
});

passo.addEventListener("change", function () {
  // atualiza o valor da chave de cesar
  chave = document.getElementById("chave").value;
});

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  var mensagem = entrada.value;
  if (metodo.selectedIndex == 0) {
    metodo.style.backgroundColor = "#ff6b6b";
    setTimeout(
      () => (metodo.style.backgroundColor = "#ff6b6b"),
      1000
    );
    metodo.style.transition = "1s";
  } else if (metodo.selectedIndex == 1) {
    if (tipoRadio[0].checked) {
      codificarCifra(mensagem, chave);
    } else {
      decodificarCifra(mensagem, chave);
    }
  } else {
    if (tipoRadio[0].checked) {
      codificarBase64(mensagem);
    } else {
      decodificarBase64(mensagem);
    }
  }
});
