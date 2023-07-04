/*
let num = [5,8,2,9,3]
num.push(1)   // primeiro acrescenta elemento e depois ordena
num.sort()
console.log(`${num}`)
console.log(`Nosso vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
*/

let num = [5,8,2,9,3]
num.sort()   // primeiro ordena e depois acrescenta elemento
num.push(1)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}