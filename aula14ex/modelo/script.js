function contar(){
    var NumInicio = document.getElementById('iinicio')
    var NumFinal = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resultado = document.getElementById('resultado')

    if (passo.value.length == 0 || NumInicio.value.length == 0 || NumFinal.value.length == 0 ){
       alert('[ERRO] Faltam dados.')
       resultado.innerHTML = `Impossível contar`

    } else {
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(NumInicio.value)
        var f = Number(NumFinal.value)
        var p = Number(passo.value) // Para tranformar a string em valor numerico

        if (passo <= 0){
            alert('Passo inválido')
            p = 1
        }

        if (passo >= NumFinal){
            alert('Passo maior que o número final')
            p = 1
        }


        //Contagem progressiva
        if (i < f){
            for(var c = i; c <= f; c += p){
            resultado.innerHTML += ` ${c} \u{1F449}`
        }

        //Contagem regressiva
        } else {
            for(var c = i; c >=f; c -= p)
            resultado.innerHTML += ` ${c} \u{1F449}`
    }
        resultado.innerHTML += `\u{1F3C1}`
    }
}