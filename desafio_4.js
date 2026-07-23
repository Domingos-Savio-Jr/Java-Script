/* CALCULAR O PRECO DE UM PRODUTO COM BASE NAS CONDICOES ABAIXO

1 - Pagamento no débito - 10% off
2 - Pagamento no dinheiro ou pix - 15% off
3 - Pagamento em 2 x - Preço de etiqueta
4 - Pagamento em mais de 2x - acréscimo de 10% de juros

*/

const readline = require('readline-sync')

let price, payMethod, times, newPrice

price = Number(readline.question("Digite o preco do produto em R$: "))

payMethod = readline.question("Digite o meio de pagamento:\n1 - Debito\n2 - Dinheiro ou PIX\n3 - Parcelado\nEscolha uma opcao: ")

if(Number(payMethod) === 1){
    newPrice = price - (price*0.10)
    console.log("Voce tem 10% de desconto ========= Valor final: R$ " + newPrice.toFixed(2))
}else if (Number(payMethod) === 2){
    newPrice = price - (price * 0.15)
    console.log ("Você tem 15% de desconto ========= Valor final: R$ " + newPrice.toFixed(2))
}else if (Number(payMethod) === 3){
    times = readline.question("Digite a quantidade de parcelas: ")
    if(Number(times) <= 2){
        newPrice = price
        console.log("O preco e: R$ "+ price)
    }else if(Number(times) > 2){
        newPrice = price + (price*0.10)
        console.log ("O preco final e: R$ " + newPrice.toFixed(2))
    }
}else{
    console.log("Digite um valor válido")
}