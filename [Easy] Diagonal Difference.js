'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr)
{
    let leftToRight = 0;
    let rightToLeft = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++)
    {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][n - i - 1];
    }

    return Math.abs(leftToRight - rightToLeft);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

// leftToRight += arr[i][i];: Aqui, estamos adicionando o elemento da diagonal esquerda para a direita à variável leftToRight.
// Para encontrar os elementos da diagonal esquerda para a direita, usamos o índice i duas vezes: arr[i][i].
// O primeiro i representa a linha atual, e o segundo i representa a coluna atual.
// Isso significa que estamos adicionando o elemento na posição [i][i] à soma leftToRight.

// rightToLeft += arr[i][n - i - 1];: Similarmente, aqui estamos adicionando o elemento da diagonal direita para a esquerda à variável rightToLeft.
// Para encontrar os elementos da diagonal direita para a esquerda, usamos o índice i e o tamanho da matriz n: arr[i][n - i - 1].
// O índice n - i - 1 representa a coluna onde o elemento da diagonal direita para a esquerda está localizado.

// return Math.abs(leftToRight - rightToLeft);: Por fim, calculamos a diferença absoluta entre leftToRight e rightToLeft e retornamos esse valor.
// A função Math.abs() é usada para garantir que a diferença seja um valor positivo, independentemente da ordem dos elementos diagonais.
