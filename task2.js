

		function doublePrefix(string) {

			if (string === undefined || string.length > 100) {
				process.stdout.write("Необходимо ввести строку длиной от 1 до 100 символов");
				return;
			}
			
			let str = string.toLowerCase();
			
			for (let k = 0; k < str.length; k++) {
				if (str[k].charCodeAt() > 122 || str[k].charCodeAt() < 97) {

					process.stdout.write("Небходимо ввести строку из латинских символов от a до z");
					return;
				}
			}
		
			let search = "";
			let result = "Совпадений не найдено";
			
			for (let i = 0; i < str.length; i++ ) {
				search += str[i];

				if(str.indexOf(search, 1) !== -1) result = search;
			}
				
			process.stdout.write(result);
		}
		
doublePrefix(process.argv[2]);