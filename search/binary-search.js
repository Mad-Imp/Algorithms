/*Реализация бинарного поиска по отсортированному массиву целых чисел.
В функцию передается два аргумента: массив и искомое число.
Вывести в консоль индекс искомого элемента в отсортированном массиве.
Если искомого числа в массиве не найдено, вывести в консоль сообщение об этом.
*/

/*Implementation of binary search on a sorted array of integers.
Two arguments are passed to the function: an array and the desired number.
Outputs the index of the desired element in the sorted array to the console.
If the desired number is not found in the array, outputs a message to the console about it.
*/

'use strict'

function binarySearch(arr, num) {
    arr.sort((a, b) => a - b);

    let firstPosition = -1;
    let lastPosition = arr.length;

    while (lastPosition - firstPosition > 1 ) {
        let middlePosition = Math.floor((firstPosition + lastPosition) / 2);

        if (arr[middlePosition] === num) return middlePosition;

        num < arr[middlePosition] ? lastPosition = middlePosition : firstPosition = middlePosition;
    }

    return 'The desired number was not found in the array';
}

let arr = [5, 10, 35, 71, 6, 20, 29, 13, 2];

console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 13));
console.log(binarySearch(arr, 35));