const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas =[]
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notas)
console.log(notasBaixas)


// Com callback
// Minha Primeira Arrow Function Solo Sem Pesquisa
notasBaixas = notas.filter ((nota) => {return nota < 7},
)
console.log(notasBaixas)

// Callback do Prof

 const notasBaixas3 = notas.filter(nota => nota < 7)

 console.log(notasBaixas3)