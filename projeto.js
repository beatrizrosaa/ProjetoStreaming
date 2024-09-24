const buttonClassificar = document.getElementById("buttonReview");
const buttonUma = document.getElementById("umaEstrela");
const buttonDuas = document.getElementById("duasEstrelas");
const buttonTres = document.getElementById("tresEstrelas");
const buttonQuatro = document.getElementById("quatroEstrelas");
const buttonCinco = document.getElementById("cincoEstrelas");

let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;


// funçoes que acionam os botoes estrelas de classificaçao
function botao1() {
    A = (A + 1) % 2;

    if (A === 1) {
        buttonUma.style.backgroundColor = "#ffd700";
    } else {
        buttonUma.style.backgroundColor = "#FFFFFF";
    }
}

function botao2(){
    B = (B + 1) % 2;

    if (B === 1) {
        buttonDuas.style.backgroundColor = "#ffd700";
    } else {
        buttonDuas.style.backgroundColor = "#FFFFFF";
    }
}

function botao3(){
    C = (C + 1) % 2;

    if (C === 1) {
        buttonTres.style.backgroundColor = "#ffd700";
    } else {
        buttonTres.style.backgroundColor = "#FFFFFF";
    }
}

function botao4(){
    D = (D + 1) % 2;

    if (D === 1) {
        buttonQuatro.style.backgroundColor = "#ffd700";
    } else {
        buttonQuatro.style.backgroundColor = "#FFFFFF";
    }
}

function botao5(){
    E = (E + 1) % 2;

    if (E === 1) {
        buttonCinco.style.backgroundColor = "#ffd700";
    } else {
        buttonCinco.style.backgroundColor = "#FFFFFF";
    }
}

//acionando botoes
buttonUma.addEventListener("click",botao1);
buttonDuas.addEventListener("click",botao2);
buttonTres.addEventListener("click",botao3);
buttonQuatro.addEventListener("click",botao4);
buttonCinco.addEventListener("click",botao5);

// funçao que reseta as cores da estrelas
function resetarCores() {
    buttonUma.style.backgroundColor = "#FFFFFF";
    buttonDuas.style.backgroundColor = "#FFFFFF";
    buttonTres.style.backgroundColor = "#FFFFFF";
    buttonQuatro.style.backgroundColor = "#FFFFFF";
    buttonCinco.style.backgroundColor = "#FFFFFF";

    A = B = C = D = E = 0;
}

buttonClassificar.addEventListener("click", classificar);

// funçao que monta na tabela as avaliaçoes feitas pelo usuario
function classificar(){
    let estrelas = A+B+C+D+E;
    let filme = document.getElementById("filme").value;
    let comentario = document.getElementById("comentarios").value;
    let tabela = document.getElementById("tabela");

    const newRow = tabela.insertRow(1);
    const cellFilme = newRow.insertCell(0);
    const cellEstrelas = newRow.insertCell(1);
    const cellComentarios = newRow.insertCell(2);

    cellFilme.innerHTML = filme;
    cellEstrelas.innerHTML = estrelas;
    cellComentarios.innerHTML = comentario;

    document.getElementById("filme").value = "";
    document.getElementById("comentarios").value = "";  
    
    resetarCores();
}

//caixa do trailer
const iniciarTrailer = document.getElementById("trailer");
const botaoFechar1 = document.getElementById("fechar1");
const popUp = document.getElementById("popup");
let video = document.getElementById("videoTrailer");

iniciarTrailer.addEventListener("click", () => {
    popUp.classList.add("show");
    video.play()
})

botaoFechar1.addEventListener("click", () => {
    popUp.classList.remove("show");
    video.pause();
    video.currentTime = 0;
})

//adicionado com sucesso
const popUp2 = document.getElementById("popup2");
const exibir = document.getElementById("lista");
const botaoFechar2 = document.getElementById("fechar2");

function exibe(){
    popUp2.classList.add("show");
    exibir.innerHTML = "Ver na lista";
}

exibir.addEventListener("click", exibe);

botaoFechar2.addEventListener("click", () => {
    popUp2.classList.remove("show");
    exibir.removeEventListener("click", exibe);
})

//expandir informações série
const serie = document.getElementById("friends");
const popUp3 = document.getElementById("popup3");
const botaoFechar3 = document.getElementById("fechar3");

serie.addEventListener("mouseover", () => {
    popUp3.classList.add("show");
})

botaoFechar3.addEventListener("click", () => {
    popUp3.classList.remove("show");
})


//botao pesquisar
document.getElementById("pesquisar").addEventListener("click", function() {
    document.getElementById("buscar").style.display = "block";
  });
  
const buttonpesquisar = document.getElementById("pesquisar");

  
buttonpesquisa.addEventListener("click", function() {
    
  });


  //document.addEventListener('keypress', function(event) {
 // if (event.key === 'Enter') {
    // Ações a serem executadas quando o Enter for pressionado
 // }
//})

