

		function findRepeatSub(string) {

			//Проверяем строку на длину в соответствии с условиями
			if (string === undefined || string.length > 100) {
				process.stdout.write("Необходимо ввести строку длиной от 1 до 100 символов");
				return;
			}
			
			let str = string.toLowerCase();
		
			//Проверяем введенную строку на используемые символы (по условию только латинница)
			for (let k = 0; k < str.length; k++) {
				if (str[k].charCodeAt() > 122 || str[k].charCodeAt() < 97) {

					process.stdout.write("Небходимо ввести строку из латинских символов от a до z");
					return;
				}
			}

			let repeatStrings = [];//Массив для записи повторяющихся подстрок

			//Находим повторяющиеся строки и добавляем  в массив

			for (let i = 0; i < string.length; i++) {

				for(let j = i+1; j <= string.length; j++) {

					let search = string.slice(i, j);

					if (string.slice(0, i).indexOf(search) !== -1 || string.slice(i+1, str.length).indexOf(search) !== -1) {

						if (repeatStrings.indexOf(search) === -1){
							repeatStrings.push(search);
						}  
					}
				}
			}


			//Проверка на наличие повторений

			if(repeatStrings.length === 0) {
				process.stdout.write('Повторяющихся подстрок не найдено');
				return;

			}

			//Находим максимальную строку из повторяющихся

			let maxRepeat = '';

			for (let k = 0; k < repeatStrings.length; k++) {
				if (repeatStrings[k].length > maxRepeat.length) {
					maxRepeat = repeatStrings[k];
				}

				if(repeatStrings[k].length === maxRepeat.length) {
					if (repeatStrings[k] > maxRepeat) {
						maxRepeat = repeatStrings[k];
					}

				}
			}
		
			process.stdout.write(maxRepeat);
			
		}
		
		findRepeatSub(process.argv[2]);