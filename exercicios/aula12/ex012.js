var agora = new Date
var hora = agora.getHours()
console.log (` Agora sao exactamente ${hora} horas`)
if (hora <8 ) {
    console.log ('Boa madrugada')
} else if (hora <= 12){
    console.log('Bom dia')
} else if (hora <= 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}