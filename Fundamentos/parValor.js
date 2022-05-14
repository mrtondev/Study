//contexto léxico 1
const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares de nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)