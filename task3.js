

		
function findMaxDivider (a, b) {

	if (a < 1 || b < 1 || a > 10000 || b > 10000) {
		console.log("Необходимо вводить целые числа в диапазоне от 1 до 10000 включительно");
		return;
	}

	if (isNaN(a) || isNaN(b)) {
		console.log("Необходимо ввести числа!");
		return;

	}

	let aDel = findDividers(a); //Находим все делители числа a

	let bDel = findDividers(b); //Находим все делители числа b


	let res = compareArrays(aDel, bDel); // Находим общие делители

	process.stdout.write(String(Math.max(...res)));


}


function findDividers (a) {
	let dels = [];
	for (let i = 1; i <= a; i++){
		 if (a%i === 0) {
		 	dels.push(i);
		 }
	}

	return dels;
}


function compareArrays (arr1, arr2) {

	let result = [];

	for (let i = 0; i < arr1.length; i++) {

		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				result.push(arr1[i]);
			}
		}

	}

	return result;
}



findMaxDivider(parseInt(process.argv[2]),parseInt(process.argv[3]));









