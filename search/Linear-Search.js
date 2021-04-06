
/*Реализация линейного поиска по массиву целых чисел.
В функцию передается три аргумента: массив, искомое число, запрос в виде строки.
Три вида запроса:
'FIRST' - вывести в консоль индекс первого вхождения искомого числа в массиве,
'ALL' - вывести в консоль индексы всех вхождений числа в массиве,
'LAST' - вывести в консоль индекс последнего вхождения искомого числа в массиве.
Если искомого числа в массиве не найдено, вывести в консоль сообщение об этом.
*/

/*Implementation of linear search on an array of integers.
Three arguments are passed to the function: an array, the desired number, and a query in the form of a string.
We have three types of queries:
'FIRST' - outputs the index of the first occurrence of the desired number to the console,
'ALL' - outputs the indexes of all occurrences of the desired number to the console,
'LAST' - outputs the index of the last occurrence of the desired number on the console.
If the desired number is not found in the array, output a message to the console about it.*/

'use strict'

function linearSearch(arr, num, query) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (query === 'FIRST' && arr[i] === num) {
            return i;

        } else if (query === 'ALL' && arr[i] === num) {
            result.push(i);

        } else if (query === 'LAST') {
            for (let j = arr.length - 1; j >= 0; j--) {
                if (arr[j] === num) {
                    return j;
                }
            }
        }
    }

    if (!result.length) {
        return 'The desired number was not found in the array';
    } else {
        return result;
    }
}

let arr = [2, 7, 3, 45, 82, 6, 7, 2, 8, 9, 7, 3, 2];

console.log(linearSearch(arr, 100, 'FIRST'));
console.log(linearSearch(arr, 7, 'ALL'));
console.log(linearSearch(arr, 7, 'LAST'));