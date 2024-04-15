'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin)
{
    inputString += inputStdin;
});

process.stdin.on('end', function()
{
    inputString = inputString.split('\n');

    main();
});

function readLine()
{
    return inputString[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
function breakingRecords(scores)
{
    let minScore = scores[0]; // Pega o primeiro score
    let maxScore = scores[0]; // Pega o primeiro score
    let minCount = 0; // Contagem de scores minimos feito
    let maxCount = 0; // Contagem de scores maximo feito

    for (let i = 1; i < scores.length; i++) // Aqui esta iteirando uma variavel "i" até a quantidade de itens que existe na array scores
    {
        if (scores[i] < minScore) // Está verificando se o atual score da posição i é menor que o score minimo registrado
        {
            minScore = scores[i]; // Se for menor, atualiza o valor do score minimo para o valor do score da posição i
            minCount++; // Adiciona 1 contagem de score minimo feito.
        }
        else if (scores[i] > maxScore) // Está verificando se o atual score da posição i é maior que o score maximo registrado
        {
            maxScore = scores[i]; // Se for maior, atualiza o valor do score máximo para o valor do score da posição i
            maxCount++; // Adiciona 1 contagem de score máxima feito.
        }
    }

    return [maxCount, minCount]; // retorna um array com o maxCount na primeira posição e minCount na segunda posição
}

function main()
{
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
