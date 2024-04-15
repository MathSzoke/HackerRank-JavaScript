'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

/*
 * parameters:
    bill = array de inteiros representando o custo de cada item pedido
    k = o indice da array na qual a Anna não quis comer.
    b = a quantia de dinheiro que Anna vai contribuir com o pedido
    
 * Sample input:
    4 1
    3 10 2 9
    12

 * Sample Output 0
    5

 * Objetivo:
    Deve determinar se o calculo que Anna irá pagar está correto.
    
    Por exemplo, considerando que a conta tenha os seguintes preços: [2, 4, 6]
    e Anna se recusa a comer o item da posiçao bill[2] na qual custa 6
    Se Brian calcular corretamente, Anna irá pagar (2 + 4) / 2 = 3. Se incluir o item bill[2],
    ele vai calcular (2 + 4 + 6) / 2 = 6. No segundo caso, deve reembolsar 3 para a Anna.

 * Returns:
    Deve printar "Bon Appetit" se Brian calculou corretamente.
    Caso contrário, deve printar quanto Brian deve á Anna.
*/
function bonAppetit(bill, k, b)
{
    // Calcula a soma dos itens do array 'bill', excluindo o item na posição 'k'
    let sum = bill.reduce((acc, curr, index) =>
    {
        // Se o índice atual não for igual a 'k', adiciona o valor do item à soma
        if (index !== k)
        {
            return acc + curr;
        }
        else // Caso contrário, mantém a soma atual
        {
            return acc;
        }
    }, 0);
    
    // Calcula a média dividindo a soma por 2
    let average = sum / 2;

    // Verifica se a média é igual ao valor 'b'
    if (average === b)
    {
        // Se for igual, exibe a mensagem "Bon Appetit"
        console.log("Bon Appetit");
    }   
    else // Caso contrário, exibe a diferença entre a média e o valor 'b'
    {
        console.log(b - average);
    }
}
function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
