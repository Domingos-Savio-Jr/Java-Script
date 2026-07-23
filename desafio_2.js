/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    Média < 5,0 = Reprovado
    Média >= 5,0 e < 7,0 = Recuperação
    Média >= 7,0 = Aprovado
*/

const readline = require('readline-sync')

let grade1, grade2, grade3, average

grade1 = readline.question("Digite a primeira nota: ")
grade2 = readline.question("Digite a segunda nota: ")
grade3 = readline.question("Digite a terceira nota: ")

average = (grade1 + grade2 + grade3) / 3

if(average < 5.0){
    console.log("Reprovado")
} else if(average >= 5.0 && average < 7.0){
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}
