alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao n. s.
while (chute != numeroSecreto) {
    chute = prompt("Insira um numero entre 1 e 100");
    //se o chute for igual a o numero secreto
if (chute == numeroSecreto) {
    break;
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

//operador ternario, mercado usa assim ao inves de muitos if e else para uma mudanca pequena na condicao
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso ae! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

