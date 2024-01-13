let valores = [8,1,7,4,2,9]

console.log(`Valores : ${valores}`)

/*
for (let posição=0; posição < valores.length; posição++){
    console.log(`A posição ${posição} tem os valores do vetor: ${valores[posição]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem os valores do vetor: ${valores[pos]} `)
}
