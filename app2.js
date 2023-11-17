let numerosSorteados = [];
let quantidadeDeSorteios = 100;
let numeroSecreto = getNumeroAleatorio();
let quantidaDeTentativas = 1;
let limiteDeTentativas = 10;
const botaoOk = document.querySelector("dialog button");
const modal = document.querySelector("dialog");
let dialog = document.getElementById("modal");



function mostrarMensagemDeTentativas () {
    let campo = document.querySelector("dialog");
    campo = campo.showModal();  
}


function invisible () {
    
        if (dialog.style.display == "none") {
            dialog.style.display = "grid";
            mostrarMensagemDeTentativas ();
        } else {
            dialog.style.display = "none";
        }
}


function fecharModal () {
    let campo = document.querySelector("dialog");
    campo = campo.close();
    dialog.style.display = "none"; 
}



function getNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * quantidadeDeSorteios +1);
    let tamanhoDaLista = numerosSorteados.length;
    console.log(numeroSorteado);

    if (tamanhoDaLista == quantidadeDeSorteios) {
        numerosSorteados = [];
    }    
    if (numerosSorteados.includes(numeroSorteado)) {
        return getNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroSorteado);
        console.log(numerosSorteados);
        return numeroSorteado;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
}

function mensagemInicial () {
    exibirTextoNaTela("h1", "jogo do número secreto");
    exibirTextoNaTela("p", `Digite um número de 1 a ${quantidadeDeSorteios}`);
    alert(`Você tem ${limiteDeTentativas} tentativas`);    
}

mensagemInicial ();

exibirTextoNaTela("dialog", `Você tem ${limiteDeTentativas} tentativas`);

function verificarChute() { 
    let chute = document.querySelector("input").value;
    
    if (quantidaDeTentativas == limiteDeTentativas) {
        exibirTextoNaTela ("h1", "você excedeu a quantidade de tentativas");
        exibirTextoNaTela ("p", "Clique em novo jogo");                
        habilitarBotao()
        document.getElementById("chute").setAttribute ("disabled", true);        
    }

    if (chute == numeroSecreto) {
        let palavraTentativa = quantidaDeTentativas > 1 ? 'tentativa' : 'tentativas';
        let mensagem = `Você acertou com ${quantidaDeTentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("h1", "você acertou o número secreto");
        exibirTextoNaTela ("p", mensagem);        
        habilitarBotao()               
    }
        else {              

            if (chute < numeroSecreto) {
            exibirTextoNaTela ("p", `O número secreto é maior que ${chute}`);
            }
                else {
                exibirTextoNaTela ("p", `O número secreto é menor que ${chute}`);
                }

                    quantidaDeTentativas++;
                    limparCampo();
    }
}



function limparCampo () {
    chute = document.querySelector("input");        
    chute.value = "";
}

function habilitarBotao () {
    document.getElementById("reiniciar").removeAttribute ("disabled");
    document.getElementById("chute").removeAttribute ("disabled");
}

function novoJogo () {
    limparCampo ();
    mensagemInicial ();
    document.getElementById("reiniciar").setAttribute ("disabled", true);
    quantidaDeTentativas = 1;
    numeroSecreto = getNumeroAleatorio();
    mostrarMensagemDeTentativas ();
}