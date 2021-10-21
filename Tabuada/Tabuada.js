function tabuada() {
  let numero = document.getElementById("txtn");
  let tab = document.getElementById("caixa");
  if (numero.value.length == 0) {
    alert("[ERRO]Não há valor para gerar a tabuada");
  } else {
    tab.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      //Cria um elemento "item" e anexa ao elemento "tab"
      let item = document.createElement("option");
      item.text = `${numero.value}x${i} = ${numero.value * i}`;
      tab.appendChild(item);
    }
  }
  numero.value = "";
  //foca no campo de entrada correspondente sem ter de clicar no campo
  numero.focus();
}
