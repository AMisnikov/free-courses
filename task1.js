

		//Массив для кодирования чисел


		let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		

		//Фугкция, переводящая число из одной системы счисления в другую

		function convertNum (i, a, b) {

			if (isNaN(a) || isNaN(b)) {

				process.stdout.write("В качестве обозначений систем счисления должны быть использованы числа!");
				return;
			}

			if (a < 2 || b < 2 || a > 36 || b > 36) {

				process.stdout.write("В качестве обозначений  систем  счисления должны быть использованы числа в диапазоне от 2 до 36 включительно");
				return;
			}

			if (a === 10 && parseInt(i) < 0 || a === 10 && parseInt(i) > 10000 ) {

				process.stdout.write("Введенное число для перевода в другую систему счисления должно быть в диапазоне от 0 до 10000 включительно");
				return;
			}


			let maxNumbers = num.slice(0, a);//Собираем массив из всех возможных символов для системы счисления, переданной в функцию

			let number = String(i).toLowerCase();//Приводим число к строке и к нижнему регистру

			
			//Проверяем корректны ли символы для данной системы счисления
			for (let j = 0; j < number.length; j++) {
				if(maxNumbers.indexOf(number[j]) === -1) {
					process.stdout.write("Вы ввели неверное число для данной системы счисления\n");
					process.stdout.write(`Для системы счисления ${a} используйте символы ${maxNumbers}`);
					return;
				}
			}


			


			//Если число передано не в десятичной системе, переводим его в десятичную

			if (a != 10) {

				let result = 0;

				for (let k = 0; k < number.length; k++) {

				result += maxNumbers.indexOf(number[k])*Math.pow(a, number.length - 1 - k);
				
				}

				i = result;

				if (i < 0 || i > 10000) {

					process.stdout.write("Введенное число для перевода в другую систему счисления должно быть в диапазоне от 0 до 10000 включительно");
					return;
				}


				//Если требуется перевести в десятичную систему выводим результат и возвращаем функцию


				if (b === 10) {

				 process.stdout.write(String(i));
				 return i;
					
				}

			}


			//Переводим число в нужную систему счисления
	

			let rest = i; //Остаток
			let result = []; //Массив для записи символов нового числа

			while (rest >= b) {

				result.unshift(num[rest%b]);

				rest = (rest - rest%b)/b;

			}

			 result.unshift(num[rest]);


			 process.stdout.write(result.join(""));
			 

			 return result.join("");

		}



		convertNum(process.argv[2], parseInt(process.argv[3]), parseInt(process.argv[4]));



		


		












