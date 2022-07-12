function tratarErrroLancar(error) {
    throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    } 
}

function imprimirNomeGritado (obj) {
   try{ 
    console.log(obj.name.toUpperCase()+'!!!')
    } catch (e) {
        tratarErrroLancar(e)
    } finally {
        console.log ('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)