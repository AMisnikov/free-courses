

		function doublePrefix(string) {
			
			

			if (string.length < 1 || string.length > 100) {

				process.stdout.write("Необходимо ввести строку длиной от 1 до 100 символов");
				return;
			}


			for (let k = 0; k < string.length; k++) {
				if (string[k].charCodeAt() > 122 || string[k].charCodeAt() < 97) {

					process.stdout.write("Небходимо ввести строку из латинских символов от a до z");
					return;
				}
			}
			

			let search = "";
			let substr = [];
			

			for (let i = 0; i < string.length; i++ ) {
				search += string[i];

				
				for (let j = 0, counter = 0; j < string.length - (search.length - 1); j++) {

					let foundPos = string.indexOf(search, j);

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