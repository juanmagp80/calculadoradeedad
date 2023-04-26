
		function calcularEdad() {
			// Obtener valores de los campos de entrada
			var dia = document.getElementById("dia").value;
			var mes = document.getElementById("mes").value;
			var anio = document.getElementById("anio").value;
            // Verificar si los campos contienen valores válidos
  if (dia === "" || mes === "" || anio === "") {
    alert("Por favor, ingrese una fecha de nacimiento válida.");
    return;
  }
   // Validar la fecha ingresada
   var fecha = new Date(anio, mes - 1, dia);
   if (fecha.getDate() != dia || fecha.getMonth() + 1 != mes || fecha.getFullYear() != anio) {
	   alert("Por favor, ingrese una fecha de nacimiento válida.");
	   return;
   }


			// Calcular la edad en milisegundos
			var fechaNacimiento = new Date(anio, mes - 1, dia);
			var edadEnMs = Date.now() - fechaNacimiento.getTime();

			// Convertir la edad de milisegundos a días, meses y años
			var edadEnDias = Math.floor(edadEnMs / 86400000);
			var edadEnMeses = Math.floor(edadEnDias / 30.4368);
			var edadEnAnios = Math.floor(edadEnMeses / 12);

			// Mostrar resultado
			document.getElementById("anios").innerHTML = "" + edadEnAnios;
			document.getElementById("meses").innerHTML = "" + (edadEnMeses % 12);
			document.getElementById("dias").innerHTML = "" + (edadEnDias % 30);
		}
