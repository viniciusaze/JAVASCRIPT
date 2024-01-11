function calcular(){
    var num = document.getElementById('inum')
    var tabuada = document.getElementById('tabuada')


    if (num.value.length == 0){
        tabuada.innerHTML = '<p>[ERRO] Digite um número para calcular a tabuada</p>'
    } else {
        var n = Number(num.value)
        var mult = 0
        tabuada.innerHTML = '<p>Cálculo: ' // Para limpar a area antes de mostra outra tabuada
    }

    while (mult <= 10) {
        mult ++
        tabuada.innerHTML += `${n} x ${mult} = ${n*mult} <br>`
    }



    /*for (var r = n; n * mult; mult < 10){
        mult ++
        tabuada.innerHTML += `${n} x ${mult} = ${r} <br>`
    }*/
}

function limpar(){
    tabuada.innerHTML = `<p>Cálculo: </p>`
}