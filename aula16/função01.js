function parimp(n) {
    if (n % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimp(90)

console.log(`O número executado é ${res}`)