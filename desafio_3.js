/* CALCULO DO IMC

FORMULA DO IMC: IMC = peso / (altura * altura)

*/

const readline = require('readline-sync')

let weight, height, imc

weight = readline.question("Digite o seu peso em Kg: ")
height = readline.question("Digite a sua altura em m: ")

imc = weight / (height^2)

console.log("O seu IMC é: " + imc.toFixed(2))

if(imc< 18.5){
    console.log("Você está abaixo do peso!")
}else if(imc >= 18.5 && imc <25){
    console.log("Você está no peso ideal!")
}else if(imc >= 25 && imc <30){
    console.log("Você está acima do peso!!")
}else if(imc >= 30 && imc <40){
    console.log("Você está obeso!!")
}else if(imc > 40){
    console.log("Você está obeso GRAVE!! VAI MORRER")
}else{
    console.log("reveja os dados digitados")
}
