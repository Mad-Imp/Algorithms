let someArr = [12, 5, 92, 23, 8, 2];

let count = someArr.length - 1;

for (let i = 0, k = 0; i < count; count--) {
	for (let j = 0; j < count; j++) {
		if (someArr[j] > someArr[j + 1]) {

			[someArr[j], someArr[j + 1]] = [someArr[j + 1], someArr[j]];
			k++;
		}
	}
	if (k == 0) {
		break;
	} 
}

console.log(someArr);
