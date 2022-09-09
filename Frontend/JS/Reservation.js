const endpointRes = "http://152.67.54.209:8080/api/Reservation/all";
const etpRes = document.getElementById("informacionRes");
/** capturar bones decliente */
const bmostrarRes = document.getElementById("bmostrarRes");
const bguardarRes = document.getElementById("bguardarRes");

/** captura de los inputs de la interfaz html para reservas */

const startDate = document.getElementById("startDate");
const devolutionDate = document.getElementById("devolutionDate");

/**
 * petición get para reservas
 */

function peticiongetRes() {
  $.ajax({
    method: "GET",
    url: endpointRes,
    success: function (data) {
      getReservation(data);
    },
  });
}

function peticionpostRes() {
  $.ajax({
    method: "POST",
    url: "http://152.67.54.209:8080/api/Reservation/save",
    data: capturarReservas(),
    datatype: "json",
    contentType: "application/json",
    complete: function (response) {
      mostrarResultadoRes(response.status, "Se guardó con exito");
      //console.log(response.status);
      limpiarCampoRes();
      peticiongetRes();
    },
  });
}

function getReservation(reservas) {
  let myTable = "<table>";
  for (i = 0; i < reservas.length; i++) {
    myTable += "<tr>";
    myTable +=
      "<td>" +
      "<strong>startDate: </strong>" +
      reservas[i].startDate +
      "</td>";
      myTable +=
      "<td>" +
      "<strong>devolutionDate: </strong>" +
      reservas[i].devolutionDate +
      "</td>";
      myTable +=
      "<td>" +
      "<strong>status: </strong>" +
      reservas[i].status +
      "</td>"; 
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#informacionRes").html(myTable);
}

function capturarReservas() {
  const data = {
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
  };
  return JSON.stringify(data);
}

function mostrarResultadoRes(status, texto) {
  let mensaje = "";
  if (status == 201) {
    mensaje = texto;
  } else if (status == 204) {
    mensaje = "El registro existe";
  }
  alert(mensaje);
}

function limpiarCampoRes() {
  startDate.value = "";
  devolutionDate.value = "";
}

function validarCampoRes() {
  if (startDate.value == "" || devolutionDate.value == "" ) {
    return true;
  } else {
    return false;
  }
}

bmostrarRes.addEventListener("click", (e) => {
  e.preventDefault();
  peticiongetRes();
});

bguardarRes.addEventListener("click", (e) => {
  e.preventDefault();
  if (validarCampoRes()) {
    alert("campo(s) Vacio!!");
  } else {
    peticionpostRes();
  }
});
