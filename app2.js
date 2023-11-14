//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

let numeroSecreto = getNumeroAleatorio();



function getNumeroAleatorio() {
    return parseInt(Math.random() *100 +1);    
}
console.log(numeroSecreto)


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela("h1", "jogo do número secreto");
exibirTextoNaTela("p", "Digite um número de 1 a 100");





function verificarChute() { 
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1", "você acertou o número secreto");
        exibirTextoNaTela ("p", "Só tenho duas palavras... PARA BÉNS!!!");
    }    
    else { 
        if (chute < numeroSecreto) {
            exibirTextoNaTela ("p", `O número secreto é maior que ${chute}`);
        }
            else {
                exibirTextoNaTela ("p", `O número secreto é menor que ${chute}`);
            }
    }
}


