let numeroSecreto = getNumeroAleatorio();
let quantidaDeTentativas = 1;

console.log(numeroSecreto);


function getNumeroAleatorio() {
    return parseInt(Math.random() *100 +1);    
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial () {
    exibirTextoNaTela("h1", "jogo do número secreto");
    exibirTextoNaTela("p", "Digite um número de 1 a 100");
}

mensagemInicial ();

function verificarChute() { 
    let chute = document.querySelector("input").value;
    

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
}

function novoJogo () {
    limparCampo ();
    mensagemInicial ();
    document.getElementById("reiniciar").setAttribute ("disabled", true);
    quantidaDeTentativas = 1;
    numeroSecreto = getNumeroAleatorio();
}