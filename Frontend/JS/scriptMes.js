const endpointMes = "http://168.138.134.141:8080/api/Message/all";
const etpMes = document.getElementById("informacionMes");
/** capturar bones decliente */
const bmostrarMes = document.getElementById("bmostrarMes");
const bguardarMes = document.getElementById("bguardarMes");

/** captura de los inputs de la interfaz html para mensajes */

const messagetext = document.getElementById("messagetext");

/**
 * petición get para mensajes
 */

function peticiongetMes() {
  $.ajax({
    method: "GET",
    url: endpointMes,
    success: function (data) {
      getMessage(data);
    },
  });
}

function peticionpostMes() {
  $.ajax({
    method: "POST",
    url: "http://168.138.134.141:8080/api/Message/save",
    data: capturarMensajes(),
    datatype: "json",
    contentType: "application/json",
    complete: function (response) {
      mostrarResultadoMes(response.status, "Se guardó con exito");
      //console.log(response.status);
      limpiarCampoMes();
      peticiongetMes();
    },
  });
}

function getMessage(mensajes) {
  let myTable = "<table>";
  for (i = 0; i < mensajes.length; i++) {
    myTable += "<tr>";
    myTable +=
      "<td>" +
      "<strong>messageText: </strong>" +
      mensajes[i].messageText +
      "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#informacionMes").html(myTable);
}

function capturarMensajes() {
  const data = {
    messageText: $("#messagetext").val(),
  };
  return JSON.stringify(data);
}

function mostrarResultadoMes(status, texto) {
  let mensaje = "";
  if (status == 201) {
    mensaje = texto;
  } else if (status == 204) {
    mensaje = "El registro existe";
  }
  alert(mensaje);
}

function limpiarCampoMes() {
  messagetext.value = "";
}

function validarCampoMes() {
  if (messagetext.value == "") {
    return true;
  } else {
    return false;
  }
}

bmostrarMes.addEventListener("click", (e) => {
  e.preventDefault();
  peticiongetMes();
});

bguardarMes.addEventListener("click", (e) => {
  e.preventDefault();
  if (validarCampoMes()) {
    alert("campo(s) Vacio!!");
  } else {
    peticionpostMes();
  }
});
