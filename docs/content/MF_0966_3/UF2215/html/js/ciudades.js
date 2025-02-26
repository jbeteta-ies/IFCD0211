document.addEventListener("DOMContentLoaded", function () {
  // JSON con las comunidades y sus capitales
  const comunidades = {
    Valenciana: ["Alicante", "Castellón", "Valencia"],
    Catalana: ["Barcelona", "Gerona", "Lérida", "Tarragona"],
    Madrileña: ["Madrid"],
    Andaluza: [
      "Almería",
      "Cádiz",
      "Córdoba",
      "Granada",
      "Huelva",
      "Jaén",
      "Málaga",
      "Sevilla",
    ],
  };

  let comunidadSelect = document.getElementById("comunidad");
  let ciudadSelect = document.getElementById("ciudad");
  let enviarBtn = document.getElementById("enviar");

  // Llenar el selector de comunidades
  for (let comunidad in comunidades) {
    let option = document.createElement("option");
    option.value = comunidad;
    option.textContent = comunidad;
    comunidadSelect.appendChild(option);
  }

  // Evento para actualizar ciudades al seleccionar comunidad
  comunidadSelect.addEventListener("change", function () {
    ciudadSelect.innerHTML = "<option value=''>Seleccione una ciudad</option>";
    ciudadSelect.disabled = true;
    enviarBtn.disabled = true;

    let comunidadSeleccionada = comunidadSelect.value;
    if (comunidadSeleccionada) {
      ciudadSelect.disabled = false;
      comunidades[comunidadSeleccionada].forEach((ciudad) => {
        let option = document.createElement("option");
        option.value = ciudad;
        option.textContent = ciudad;
        ciudadSelect.appendChild(option);
      });
    }
  });

  // Evento para activar el botón cuando se seleccione una ciudad
  ciudadSelect.addEventListener("change", function () {
    enviarBtn.disabled = !ciudadSelect.value;
  });

  // Evento para mostrar alerta y reiniciar formulario al enviar
  enviarBtn.addEventListener("click", function () {
    alert(`Comunidad: ${comunidadSelect.value}\nCiudad: ${ciudadSelect.value}`);
    comunidadSelect.value = "";
    ciudadSelect.innerHTML = "<option value=''>Seleccione una ciudad</option>";
    ciudadSelect.disabled = true;
    enviarBtn.disabled = true;
  });
});
