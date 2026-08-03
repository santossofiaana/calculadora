function insert(num) {
    var resultado = document.getElementById('resultado');
    
    // Evita que a mensagem "nada para calcular" ou "Erro" continue na tela ao clicar em um número
    if (resultado.innerHTML === "nada para calcular" || resultado.innerHTML === "Erro") {
        resultado.innerHTML = "";
    }
    
    resultado.innerHTML += num;
}

function clean() { 
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            // Function() é uma alternativa mais segura que eval() para calcular expressões simples
            document.getElementById('resultado').innerHTML = Function(`'use strict'; return (${resultado})`)();
        } catch (error) {
            // Se o usuário digitar algo inválido (ex: 5++5), exibe "Erro" em vez de quebrar a aplicação
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "nada para calcular";
    }
}