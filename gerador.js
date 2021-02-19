const botaoGerar = document.querySelector('.botaoGerar')
let campoGerado = document.querySelector('.campoGerado')

function geraSenha() {
    let tamanhoSenha = document.querySelector('.tamanhoSenha');
    let tamanho = tamanhoSenha.value
    const menor = "abcdefghijklmnopqrstuvwxyz";
    const maior = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!#@_$*";
    
    let tudo = `${maior}${menor}${numeros}${simbolos}`;
    
    let tudoFormat = tudo.split('')
    
    let letrasGeradas = [];
    let senha = [];
    
    for (var i = 0; senha.length < tamanho; i++) {
        const letraSaida = tudo[Math.floor(Math.random() * tudo.length)]
        letrasGeradas.push(letraSaida);
        if (senha.indexOf(letrasGeradas[i]) == -1) {
            senha.push(letrasGeradas[i]);
        }
    }
    let senhaGerada = senha.join('');

    return senhaGerada

}

botaoGerar.onclick = () => {
    campoGerado.value = geraSenha();
}


