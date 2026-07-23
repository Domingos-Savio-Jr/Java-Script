/* Crie um programa para calcular o valor de uma viagem
 voce tera 3 variaveis, sendo elas:
 1 - preco do combustivel
 2 - Gasto medio de combustivel do carro por km;
 3 - Distancia em km;
 imprima o valor que sera gasto com combustivel para realizar a viagem
 */


const readline = require('readline-sync')

let gasPrice, gasPrice2
let carConsumption
let distance
let gasType

let tripCost

gasType = readline.question("Digite o tipo de combustível (Gasolina, Etanol): ")
carConsumption = readline.question("Digite o consumo do veículo em Km/L: ")
distance = readline.question("Digite a distância da viagem em Km: ")

if(gasType == "Gasolina"){
    gasPrice = readline.question("Digite o preço da gasolina em R$: ")
    tripCost = ((distance/carConsumption)*gasPrice)
}else {
    gasPrice2 =readline.question("Digite o preço do etanol em R$: ")
    tripCost = ((distance/carConsumption)*gasPrice2)
    }



console.log("O custo da viagem é: R$ " + tripCost.toFixed(2))