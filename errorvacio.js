function validarFormulario() {
    var inputDia = document.getElementById("dia");
    var inputMes = document.getElementById("mes");
    var inputAnio = document.getElementById("anio");
  
    if (inputDia.value == "" || inputMes.value == "" || inputAnio.value == "") {
      alert("Debe completar todos los campos.");
      return false;
    }
    return true;
  }