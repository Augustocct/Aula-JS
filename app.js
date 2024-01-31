alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao n. s.
while (chute != numeroSecreto) {
    chute = prompt("Insira um numero entre 1 e 10");
    //se o chute for igual a o numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ae! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    if (chute > numeroSecreto) {
        alert(`o numero secreto é menor do que ${chute}`);
    } else {
        alert(`o numero secreto é maior do que ${chute}`);
    }
    //tentativas= tentativas + 1;
    tentativas++;
}
}
