'use strict'

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;

            // [arr[min], arr[i]] = [arr[i], arr[min]]; //с помощью деструктуризации
        }
    }
    console.log(arr);
}

const arr = [-50, 500, 5, 200, 46, 27, 6, 23, -60, 74, 51, 157, 0, 33, 5, 82, 1, 19, 4, 143];

selectionSort(arr);