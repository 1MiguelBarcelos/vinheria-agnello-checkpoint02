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

function estoqueBaixo(quantidade) {
  return quantidade < 5;
}

function classificarVinho(safra) {
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - safra;

  if (idade <= 5) {
    return "Jovem";
  } else if (idade <= 15) {
    return "Amadurecido";
  } else {
    return "Antigo";
  }
}

function mostrarVinho(numero, nome, safra, quantidade, classificacao, baixo) {
  let aviso = baixo ? "⚠️ ESTOQUE BAIXO!" : "✅ Estoque ok";
  let texto =
    "Vinho nº " + numero + "\n" +
    "Nome: " + nome + "\n" +
    "Safra: " + safra + " (" + classificacao + ")\n" +
    "Quantidade: " + quantidade + "\n" +
    aviso;

  console.log(texto);
  alert(texto);
}

const LIMITE = 5;
let anoAtual = new Date().getFullYear();

let contador = 0;
let totalBaixos = 0;
let continuar = true;

let nome1 = "", safra1 = 0, quant1 = 0;
let nome2 = "", safra2 = 0, quant2 = 0;
let nome3 = "", safra3 = 0, quant3 = 0;
let nome4 = "", safra4 = 0, quant4 = 0;
let nome5 = "", safra5 = 0, quant5 = 0;

let nomeAntigo = "";
let safraAntiga = 0;

while (continuar && contador < LIMITE) {
  contador++;

  let nome = pedirTexto("Vinho " + contador + " – Nome do vinho:");
  let safra = pedirNumero("Vinho " + contador + " – Ano da safra (1900 a " + anoAtual + "):", 1900, anoAtual);
  let quant = pedirNumero("Vinho " + contador + " – Quantidade em estoque:", 0, 100000);

  let classificacao = classificarVinho(safra);
  let baixo = estoqueBaixo(quant);

  if (baixo) {
    totalBaixos++;
  }

  switch (contador) {
    case 1: nome1 = nome; safra1 = safra; quant1 = quant; break;
    case 2: nome2 = nome; safra2 = safra; quant2 = quant; break;
    case 3: nome3 = nome; safra3 = safra; quant3 = quant; break;
    case 4: nome4 = nome; safra4 = safra; quant4 = quant; break;
    case 5: nome5 = nome; safra5 = safra; quant5 = quant; break;
  }

  if (contador === 1 || safra < safraAntiga) {
    nomeAntigo = nome;
    safraAntiga = safra;
  }

  mostrarVinho(contador, nome, safra, quant, classificacao, baixo);

  if (contador < LIMITE) {
    continuar = perguntarSimNao("Cadastrar outro vinho?");
  }
}

let resumo =
  "📋 RESUMO FINAL\n" +
  "Vinhos cadastrados: " + contador + "\n" +
  "Vinhos com estoque baixo: " + totalBaixos + "\n" +
  "Vinho mais antigo: " + nomeAntigo + " (safra " + safraAntiga + ")";

console.log(resumo);
alert(resumo);