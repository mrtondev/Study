//pessoa -> 123 -> {...}

const pessoa = {nome:'Jõao'}
pessoa.nome = 'Pedro'

console.log(pessoa)

//pesssoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome= 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)