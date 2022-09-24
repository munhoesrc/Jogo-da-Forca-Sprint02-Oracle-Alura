//letiaáveis
let palavras = ["BANANA", "ANA", "ALURA",
  "CIDADE", "RADIO", "CARRO",
  "FAZENDA", "AVENIDA", "UNIDADE",
  "SECULO", "SALADA", "MEDO",
  "PASSARO", "URSO", "MEL", "CHAPEU",
  "CHAVE", "EXPORTAR", "ORACLE", "JAVA", "CUIA",
"CELULAR", "CASA", "CARTEIRA", "LATA", "CARTEIRA", "ANEL",
"CADEIRA", "MESA", "MALA"];
let palavraSorteada = [];
let contador = 0;
let novaPalavra;
let botaoIniciarJogo = document.querySelector('.blue');
let modal = document.querySelector(".modal");
let input = document.querySelector('.input-letras');
let inputLetra = document.createElement('input');
let botaoAdicionaPalavra = document.querySelector(".white")
let erros = 0;
let acertos = 0;
let botaoNovoJogo = document.querySelector("#start")
let exibeGameOver = document.querySelector("#over")
let exibeWin = document.querySelector("#win")
let botaoWin = document.querySelector("#winB")

//Teclado

// letras = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

//Jogo


botaoIniciarJogo.addEventListener('click', function startGame(event) {

  event.preventDefault();

  palavraSorteada = [];

  modal.classList.remove("modal");
  modal.style.zIndex = -3;
  box.style.zIndex = -3
  sorteiaPalavra();
  dividePalavra();
  criaInputLetra();

}, false);


//Functions

function sorteiaPalavra() {
  while (palavraSorteada.length < 1) {
    let i = Math.floor(Math.random() * palavras.length);
    if (palavraSorteada.indexOf(palavras[i]) < 0) {
      palavraSorteada.push(palavras[i])
    }
  }
  return palavraSorteada;
}

function dividePalavra() {

  novaPalavra = palavraSorteada[0].split("");

}

function criaInputLetra() {

  for (let i = 0; i < novaPalavra.length; i++) {
    let inputLetra = document.createElement('input');
    let div = document.getElementById('msg');
    inputLetra.classList.add("input-palavra");
    div.appendChild(inputLetra);

  }
}

botaoAdicionaPalavra.addEventListener("click", function adcionarPalavra(event) {

  event.preventDefault();

  let inputPalavra = document.querySelector("#palavra-digitada");
  let palavraDigitada = inputPalavra.value;
  palavraDigitada = palavraDigitada.toUpperCase();
  palavras.push(palavraDigitada)
  document.querySelector('#palavra-digitada').value = palavraDigitada;

  inputPalavra.value = "";

})

function gameOver() {
  exibeGameOver.style.zIndex = 3;
  botaoNovoJogo.addEventListener('click', function () {
    document.location.reload(true);

  }, false)
}

function gameWin() {
  exibeWin.style.zIndex = 3;
  botaoWin.addEventListener('click', function () {
    document.location.reload(true);
  }, false)
}


let letraClicada = document.querySelectorAll('.button-letra')
let divs = document.querySelector('#butons-letras')

divs.addEventListener('click', (event) => {

  if (event.target.textContent.length > 1) return;

  letra = event.target.textContent;

  let inputAll = document.querySelectorAll(".input-palavra");

  let valida = true;


  for (i = 0; i < novaPalavra.length; i++) {
    if (letra === novaPalavra[i]) {
      valida = false;
      inputAll[i].value = letra;
      event.target.style.backgroundColor = "rgba(14, 238, 6, 0.89)"
      acertos++;

      if (acertos === novaPalavra.length) {
        gameWin();

      }

    }
  }

  if (valida) {
    event.target.style.backgroundColor = "rgba(255, 0, 0, 0.89)"
    erros++;
    desenha(erros);
    if (erros === 6) {
      gameOver();
    }
  }

}, false);
