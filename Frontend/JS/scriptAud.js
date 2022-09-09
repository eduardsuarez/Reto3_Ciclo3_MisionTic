const endpointAud = "http://152.67.54.209:8080/api/Audience/all";
const etp = document.getElementById("informacionAud");
/** capturar bones de auditorio */
const bmostrarAud = document.getElementById("bmostrarAud");
const bguardarAud = document.getElementById("bguardarAud");

/** captura de los inputs de la interfaz html para auditorios */

const owner = document.getElementById("owner");
const capacity = document.getElementById("capacity");
const nameAud = document.getElementById("nameAud");
const description = document.getElementById("description");

/**
 * petición get para auditorios
 */

function peticiongetAud() {
  $.ajax({
    method: "GET",
    url: endpointAud,
    success: function (data) {
      getAuditorio(data);
      console.log(data);
    },
  });
}

function peticionpostAud() {
  $.ajax({
    method: "POST",
    url: "http://152.67.54.209:8080/api/Audience/save",
    data: capturarAuditorio(),
    datatype: "json",
    contentType: "application/json",
    complete: function (response) {
      mostrarResultadoAud(response.status, "Se guardó con exito");
      //console.log(response.status);
      limpiarCampoAud();
      peticiongetAud();
    },
  });
}

function getAuditorio(auditorios) {
  let myTable = "<table>";
  for (i = 0; i < auditorios.length; i++) {
    myTable += "<tr>";
    myTable +=
      "<td>" + "<strong>name:  </strong>" + auditorios[i].name + "</td>";
    myTable +=
      "<td>" + "<strong>owner: </strong>" + auditorios[i].owner + "</td>";
    myTable +=
      "<td>" +
      "<strong>capacity:  </strong>" +
      auditorios[i].capacity +
      "</td>";
    myTable +=
      "<td>" +
      "<strong>description: </strong>" +
      auditorios[i].description +
      "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#informacionAud").html(myTable);
}

function capturarAuditorio() {
  const data = {
    owner: $("#owner").val(),
    capacity: $("#capacity").val(),
    description: $("#description").val(),
    name: $("#nameAud").val(),
  };
  return JSON.stringify(data);
}

function mostrarResultadoAud(status, texto) {
  let mensaje = "";
  if (status == 201) {
    mensaje = texto;
  } else if (status == 204) {
    mensaje = "El registro existe";
  }
  alert(mensaje);
}

function limpiarCampoAud() {
  owner.value = "";
  capacity.value = "";
  description.value = "";
  nameAud.value = "";
  capacity.value = "";
}

function validarCampoAud() {
  if (
    owner.value == "" ||
    capacity.value == "" ||
    description.value == "" ||
    nameAud.value == "" ||
    capacity.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

bmostrarAud.addEventListener("click", (e) => {
  e.preventDefault();
  peticiongetAud();
});

bguardarAud.addEventListener("click", (e) => {
  e.preventDefault();
  if (validarCampoAud()) {
    alert("campo(s) Vacio!!");
  } else {
    console.log(capturarAuditorio());
    peticionpostAud();
  }
});
