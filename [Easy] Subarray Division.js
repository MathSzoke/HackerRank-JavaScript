// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example



// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

// Constraints

// , where ()
// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2
// Explanation 0

// Lily wants to give Ron  squares summing to . The following two segments meet the criteria:

// image

// Sample Input 1

// 6
// 1 1 1 1 1 1
// 3 2
// Sample Output 1

// 0
// Explanation 1

// Lily only wants to give Ron  consecutive squares of chocolate whose integers sum to . There are no possible pieces satisfying these constraints:

// image

// Thus, we print  as our answer.

// Sample Input 2

// 1
// 4
// 4 1
// Sample Output 2

// 1
// Explanation 2

// Lily only wants to give Ron  square of chocolate with an integer value of . Because the only square of chocolate in the bar satisfies this constraint, we print  as our answer.

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

/*
	O objetivo neste desafio é:
	
	Somar "m" itens da array "s" e contar quantas vezes se repete os calculos que resultam o valor igual ao "d".
	
	Por exemplo, se "s" tem esses itens: [3, 7, 4, 4, 6, 7, 8]
	e "d" tem esse valor: 18;
	e "m" tem esse valor: 4;
	
	O retorno deverá ser 2, pois irá pegar 4 itens da array "s" e somá-los, após a soma irá verificar se o resultado da soma tem o mesmo valor da variavel "d": 18.
*/
function birthday(s, d, m)
{
    const n = s.length; // Quantidade de itens na array "s"
    let count = 0; // inicio do contador
    for(let i = 0; i < n; i++) // cria um looping onde percorre uma variavel "i" até o ultimo item da array "s"
    {
        let sum = 0; // inicio da soma
        for (let j = i; j < i + m; j++) // Cria um looping onde percorre uma variavel "j" com o valor de "i" até o valor de "i" menos o valor da variavel "m". Por exemplo, se "m" for 5, o for looping vai percorrer até 4
        {
            sum += s[j]; // Realiza o calculo sum + o array "s" com a posiçao da variavel "j". O que significa que se a array for assim: [1, 2, 3, 4, 5], a soma ficará assim: 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6; 6 + 4 = 10; 10 + 5 = 15
        }
        
        if (sum === d) // Verifica se o valor da soma é igual a variavel "d"
        {
            count++; // Se for true a condição, adiciona 1 á contagem.
        }
    }
    return count; // retorna a contagem.
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
