

		function doublePrefix(string) {

			if (string == undefined) {
				process.stdout.write("Использование программы: node task2.js 'строка'");
				return;
			}
			
			let str = string.toLowerCase();
			

			if (str.length < 1 || str.length > 100) {

				process.stdout.write("Необходимо ввести строку длиной от 1 до 100 символов");
				return;
			}


			for (let k = 0; k < str.length; k++) {
				if (str[k].charCodeAt() > 122 || str[k].charCodeAt() < 97) {

					process.stdout.write("Небходимо ввести строку из латинских символов от a до z");
					return;
				}
			}
			

			let search = "";
			let substr = [];
			

			for (let i = 0; i < str.length; i++ ) {
				search += str[i];

				
				for (let j = 0, counter = 0; j < str.length - (search.length - 1); j++) {

					let foundPos = str.indexOf(search, j);

					if (foundPos !== -1) { 
						
						counter++;

					} 

					if(counter > 1) {

						substr.push(search);
						break;
					}

					
					

				}

			}


				if (substr.length !== 0) {

				process.stdout.write(substr[substr.length - 1]);
				return substr[substr.length - 1];

			} else {

				process.stdout.write("Повторяющихся строк не найдено");
				return;
			}

		}


doublePrefix(process.argv[2]);