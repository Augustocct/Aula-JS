alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt("Insira um numero entre 1 e 10");

//se o chute for igual a o numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ae! Voce descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert("voce errou:")
}