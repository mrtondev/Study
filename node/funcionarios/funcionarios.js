
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
    
const soChineses = c => c.pais === "China"
const soMulheres = g => g.genero === "F"

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const chinesas = funcionarios
        .filter(soChineses)
        .filter(soMulheres)
    salario = chinesas.sort((maior,menor)=> maior.salario - menor.salario)

    const final = salario[0]
    console.log(final)


})

