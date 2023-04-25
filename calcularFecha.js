function calcularEdad() {
    // Obtener valores de los campos de entrada
    var dia = document.getElementById("formday").value;
    var mes = document.getElementById("formmonth").value;
    var anio = document.getElementById("formyear").value;

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
    document.getElementById("dias").innerHTML = "" + (edadEnDias % 30.4368);
}