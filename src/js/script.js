function pedirTexto(mensagem) {
  let valor = prompt(mensagem);
  while (valor === null || valor.trim() === "") {
    alert("⚠️ Entrada inválida! Digite um valor.");
    valor = prompt(mensagem);
  }
  return valor.trim();
}

function pedirNumero(mensagem, minimo, maximo) {
  let texto = prompt(mensagem);
  while (
    texto === null || texto.trim() === "" ||
    isNaN(Number(texto)) || !Number.isInteger(Number(texto)) ||
    Number(texto) < minimo || Number(texto) > maximo
  ) {
    alert("⚠️ Digite um número inteiro entre " + minimo + " e " + maximo + ".");
    texto = prompt(mensagem);
  }
  return Number(texto);
}

function perguntarSimNao(mensagem) {
  let resposta = pedirTexto(mensagem + " (s/n)").toLowerCase();
  while (resposta !== "s" && resposta !== "n") {
    alert("⚠️ Responda apenas com 's' ou 'n'.");
    resposta = pedirTexto(mensagem + " (s/n)").toLowerCase();
  }
  return resposta === "s";
}
