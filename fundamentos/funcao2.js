//armazenando funcao em variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2,3)

// Armazenando funcao em arrow function
const soma = (a,b) => {
    return a + b
}

console.log(soma(5,9))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 6))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')