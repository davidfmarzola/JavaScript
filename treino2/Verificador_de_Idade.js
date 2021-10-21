function carregar() {
  submit.onclick = () => {
    const anoAtual = 2021;
    let ano_nascimento = document.getElementById("anoNascimento").value;
    let genero = "";
    if (ano_nascimento > anoAtual || ano_nascimento == "") {
      alert("[Erro]Ano de Nascimento inválido"); // não avança enquanto o valor não atender as condições desse if
    } else {
      var fsex = document.getElementsByName("radsex");
      let idade = anoAtual - ano_nascimento;
      secao.style.height = "450px";
      saida.innerHTML = `<div>
        <p id = "output"></p>
        <img id="foto" style="border-radius: 50%" width="250" height="250" src="fotoManha.jpg" alt="Foto do Horário">
        </div>`;
      saida.style.textAlign = "center";
      if (fsex[0].checked) {
        genero = "Homem";
        if (idade < 15) foto.src = "bebeHomem.jpg";
        else if (idade >= 15 && idade < 25) foto.src = "jovemHomem.jpg";
        else if (idade >= 25 && idade < 60) foto.src = "adulto.jpg";
        else foto.src = "idoso.jpg";
      } else if (fsex[1].checked) {
        genero = "Mulher";
        if (idade < 15) foto.src = "bebeMulher.jpg";
        else if (idade >= 15 && idade < 25) foto.src = "jovemMulher.jpg";
        else if (idade >= 25 && idade < 60) foto.src = "adulta.jpg";
        else foto.src = "idosa.jpg";
      }
      output.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`;
    }
  };
}
