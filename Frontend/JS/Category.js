const endpointCat = "http://168.138.134.141:8080/api/Category/all";
const etpCat = document.getElementById("informacionCat");
/** capturar bones de categoria */
const bmostrarCat = document.getElementById("bmostrarCat");
const bguardarCat = document.getElementById("bguardarCat");

/** captura de los inputs de la interfaz html para categorias */

const nameCat = document.getElementById("nameCat");
const descriptionCat = document.getElementById("descriptionCat");

/**
 * petición get para categorias
 */

function peticiongetCat() {
  $.ajax({
    method: "GET",
    url: endpointCat,
    success: function (data) {
      getCategoria(data);
      console.log(data);
    },
  });
}

function peticionpostCat() {
    $.ajax({
      method: "POST",
      url: "http://168.138.134.141:8080/api/Category/save",
      data: capturarcategoria(),
      datatype: "json",
      contentType: "application/json",
      complete: function (response) {
        mostrarResultadoCat(response.status, "Se guardó con exito");
        //console.log(response.status);
        limpiarCampoCat();
        peticiongetCat();
      },
    });
  }


function getCategoria(categorias) {
  let myTable = "<table>";
  for (i = 0; i < categorias.length; i++) {
    myTable += "<tr>";
    myTable +=
      "<td>" + "<strong> name :</strong> " + categorias[i].name + "</td>";
    myTable +=
      "<td>" +
      "<strong>description  :</strong>  " +
      categorias[i].description+
      "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#informacionCat").html(myTable);
}

function capturarcategoria() {
    const data = {

        name: $("#nameCat").val(),
        description: $("#descriptionCat").val(),
      
    };
    return JSON.stringify(data);
  }

  function mostrarResultadoCat(status, texto) {
    let mensaje = "";
    if (status == 201) {
      mensaje = texto;
    } else if (status == 204) {
      mensaje = "El registro existe";
    }
    alert(mensaje);
  }

function limpiarCampoCat() {
  nameCat.value = "";
  descriptionCat.value = "";
}
function validarCampoCat() {
  if (descriptionCat.value == "" || nameCat.value == "") {
    return true;
  } else {
    return false;
  }
}

bmostrarCat.addEventListener("click", (e) => {
  e.preventDefault();
  peticiongetCat();
});

bguardarCat.addEventListener("click", (e) => {
    e.preventDefault();
    if (validarCampoCat()) {
      alert("campo(s) Vacio!!");
    } else {
      console.log(capturarcategoria());
      peticionpostCat();
    }
  });

