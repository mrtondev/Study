const alunos = [ 
{ nome:'Joao' ,nota: 7.3,bolsista:false},
{ nome:'Maria' ,nota: 9.2,bolsista:true},
{ nome:'Pedro' ,nota: 9.8,bolsista:false},
{ nome:'Ana' ,nota: 8.7,bolsista:true},
]

// 1° Desafio: Todos os alunos são bolsistas?

 //const verficar = alunos.map(a => a.bolsista)
 //console.log( verficar)

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// 2° Desafio: Algum aluno é bolsista?

// const newArray = []

//verficar.reduce(function(acumulador, atual) {
  //  if (this.bolsista = true){
     //   newArray.push(atual)
       
   // }
   // return newArray
        
    
//})

//console.log(newArray)


const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(algumBolsista))