let comparaComThis  = function (param) {
    console.log(this === param)
}
// This numa função se refere ao global 'Executando pelo Node ou pelo Browser'
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
// Com o bind o this se referência ao objeto que o invocou

let comparaComThisArrow = param => console.log(this === param)
// Em arrow function o this sempre se referência a ela própia
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThis(obj)