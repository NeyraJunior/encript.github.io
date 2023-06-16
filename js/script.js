function encriptar() {
    var oracion = document.getElementById("inputTexto").value.toLowerCase();
    var textoencriptado = oracion.replace(/e/img, "enter");
    var textoencriptado = textoencriptado.replace(/i/img, "imes");
    var textoencriptado = textoencriptado.replace(/a/img, "ai");
    var textoencriptado = textoencriptado.replace(/o/img, "ober");
    var textoencriptado = textoencriptado.replace(/u/img, "ufat");
    document.getElementById("textareaResultado").innerHTML = textoencriptado;
  };
  function desencriptar() {
    var oracion = document.getElementById("inputTexto").value.toLowerCase();
    var textoencriptado = oracion.replace(/ai/img, "a");
    var textoencriptado = textoencriptado.replace(/enter/img, "e");
    var textoencriptado = textoencriptado.replace(/imes/img, "i");
    var textoencriptado = textoencriptado.replace(/ober/img, "o");
    var textoencriptado = textoencriptado.replace(/ufat/img, "u");
    document.getElementById("textareaResultado").innerHTML = textoencriptado;
  };