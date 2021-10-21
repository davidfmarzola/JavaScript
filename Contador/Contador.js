function carregar() {
  submit.onclick = () => {
    let comeco = Number(document.getElementById("inicio").value);
    let final = Number(document.getElementById("fim").value);
    let intervalo = Number(document.getElementById("passo").value);
    let saida = document.getElementById("saida");
    if (intervalo <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      intervalo = 1;
    }
    if (comeco == "" || final == "" || intervalo == "") {
      saida.innerHTML = "Impossível contar!";
    } else if (comeco < final) {
      saida.innerHTML = "Contando: ";
      for (let i = comeco; i <= final; i += intervalo) {
        //emoji obtido no unicode.org
        saida.innerHTML += `${i} \u{1F449}`;
        console.log(i);
      }
      saida.innerHTML += `\u{1F3C1}`;
    } else if (comeco > final) {
      saida.innerHTML = "Contando: ";
      for (let i = comeco; i >= final; i -= intervalo) {
        saida.innerHTML += `${i} \u{1F449}`;
        console.log(i);
      }
      saida.innerHTML += `\u{1F3C1}`;
    }
    //saida.innerHTML += `Contando:
    //        ${i}`;
  };
}
