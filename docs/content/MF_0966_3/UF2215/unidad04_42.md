---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, DOM, Eventos, Manipulación DOM
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 04 - Integración de JavaScript con HTML y el DOM
---

# **Unidad 4.2: Introducción al DOM (Document Object Model)**

## **4.2.1 El Objeto `window` en JavaScript**

El objeto `window` representa la ventana del navegador y es el objeto global en el que se ejecuta JavaScript en el cliente.

📌 **Propiedades principales:**

- `window.innerWidth`, `window.innerHeight`: Dimensiones de la ventana.
- `window.location`: Información sobre la URL actual.
- `window.history`: Acceso al historial de navegación.

📌 **Métodos útiles:**

### **`alert(mensaje)`**

Muestra un cuadro de alerta con un mensaje.
- **Parámetros:**
  - `mensaje` *(string)*: Texto a mostrar en la alerta.
- **Valor de retorno:** `undefined` (no devuelve ningún valor).

!!! example "Ejemplo práctico: alert()"
    ```javascript linenums="1" title="Ejemplo de alert()"
    alert("Bienvenido al sistema");
    ```

### **`prompt(mensaje, valorPorDefecto)`**

Solicita una entrada de texto al usuario.

- **Parámetros:**
    - `mensaje` *(string)*: Texto de la solicitud.
    - `valorPorDefecto` *(string, opcional)*: Texto inicial en el campo de entrada.
- **Valor de retorno:** La cadena ingresada por el usuario o `null` si se cancela.

!!! example "Ejemplo práctico: prompt()"
    ```javascript linenums="1" title="Ejemplo de prompt()"
    let nombre = prompt("¿Cuál es tu nombre?", "Usuario");
    console.log("Nombre ingresado: " + nombre);
    ```

### **`confirm(mensaje)`**

Muestra un cuadro de diálogo con opciones "Aceptar" o "Cancelar".

- **Parámetros:**
    - `mensaje` *(string)*: Texto del cuadro de confirmación.
- **Valor de retorno:** `true` si el usuario presiona "Aceptar", `false` si presiona "Cancelar".

!!! example "Ejemplo práctico: confirm()"
    ```javascript linenums="1" title="Ejemplo de confirm()"
    let continuar = confirm("¿Deseas continuar?");
    console.log("Confirmación: " + continuar);
    ```

### **`setTimeout(función, tiempo)`**

Ejecuta una función después de un tiempo específico.

- **Parámetros:**
    - `función` *(function)*: Función a ejecutar después del tiempo.
    - `tiempo` *(número)*: Tiempo en milisegundos.
- **Valor de retorno:** Un identificador del temporizador que puede usarse con `clearTimeout()`.

!!! example "Ejemplo práctico: setTimeout()"
    ```javascript linenums="1" title="Ejemplo de setTimeout()"
    setTimeout(() => {
        console.log("Este mensaje aparece después de 3 segundos");
    }, 3000);
    ```

### **`setInterval(función, tiempo)`**

Ejecuta repetidamente una función a intervalos regulares.

- **Parámetros:**
    - `función` *(function)*: Función a ejecutar.
    - `tiempo` *(número)*: Intervalo en milisegundos.
- **Valor de retorno:** Un identificador del temporizador que puede usarse con `clearInterval()`.

!!! example "Ejemplo práctico: setInterval()"
    ```javascript linenums="1" title="Ejemplo de setInterval()"
    let contador = 0;
    let intervalo = setInterval(() => {
        contador++;
        console.log("Contador: " + contador);
        if (contador === 5) clearInterval(intervalo);
    }, 1000);
    ```

## **4.2.3 Cómo accede JavaScript al DOM**

JavaScript puede acceder y modificar el contenido de una página web mediante el **Document Object Model (DOM)**. Para ello, es importante entender cómo se integran los scripts en una página HTML.

📌 **Métodos para incluir JavaScript en HTML:**

- **`<script>` en `<head>`**: Se ejecuta antes de que se cargue el cuerpo del documento, lo que puede generar errores si intentamos acceder a elementos aún no cargados.

- **`<script>` antes del cierre de `<body>`**: Se recomienda en la mayoría de los casos, ya que garantiza que el DOM esté completamente cargado antes de ejecutar el script.

- **Atributos `defer` y `async` en `<script>`**:
    - `defer`: El script se descarga en segundo plano y se ejecuta cuando el documento HTML ha sido completamente analizado.
    - `async`: El script se descarga y ejecuta de inmediato, sin esperar a que termine de cargarse el HTML, lo que puede causar problemas de sincronización.

!!! example "Ejemplo de inclusión de JavaScript"
    ```html linenums="1" title="Ejemplo de script en HTML"
    <!DOCTYPE html>
    <html>
    <head>
        <title>Ejemplo de script</title>
        <script defer src="script.js"></script>
    </head>
    <body>
        <h1>Hola, mundo!</h1>
    </body>
    </html>
    ```

---

??? question "Ejercicio práctico"
    - Crea un documento HTML
    - Pon un `alert()` en el `<head>`, otro al final del  `<body>` y otro en un fichero externo.
    - Comprueba el orden en que se muestran los mensajes.

## **4.2.4 Ejemplo base de HTML para manipulación del DOM**

A lo largo de esta unidad, trabajaremos con una **página de ejemplo** que contendrá información sobre un empleado. Usaremos esta estructura para practicar la manipulación del DOM.

!!! example "Código base de HTML"
    ```html linenums="1" title="Página de Empleado"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Información del Empleado</title>
    </head>
    <body>
        <h1>Datos del Empleado</h1>
        <p><strong>Nombre:</strong> <span id="nombre">Carlos Pérez</span></p>
        <p><strong>Edad:</strong> <span id="edad">35</span></p>
        <p><strong>Puesto:</strong> <span id="puesto">Desarrollador Web</span></p>
        <button id="cambiar-info">Actualizar Información</button>
        <script src="script.js"></script>
    </body>
    </html>
    ```

Este documento `HTML` servirá como base para los ejemplos de los siguientes puntos. Nos permitirá practicar cómo **localizar, modificar, agregar y eliminar contenido dinámicamente**, además de **manejar eventos en el DOM**.


## **4.2.5 Modificación del contenido de elementos**

Para modificar el contenido de los elementos en el DOM, JavaScript proporciona tres propiedades principales: `innerText`, `textContent` y `innerHTML`. A continuación, se explica cada una y cuándo utilizarlas.

### **`innerText`**
Devuelve o establece el **texto visible** dentro de un elemento. No incluye elementos HTML ni el contenido oculto con CSS (`display: none`).

📌 **Uso recomendado:** Cuando solo queremos obtener o modificar el **texto visible** del usuario.

!!! example "Ejemplo de `innerText`"
    ```javascript linenums="1" title="Ejemplo de innerText"
    let titulo = document.getElementById("nombre");
    console.log(titulo.innerText); // Carlos Pérez
    titulo.innerText = "Ana López"; // Cambia el texto visible
    ```

### **`textContent`**
Similar a `innerText`, pero devuelve todo el texto dentro del nodo, **incluyendo texto oculto con CSS**.

📌 **Uso recomendado:** Cuando se necesita obtener el contenido completo, sin importar la visibilidad del elemento.

!!! example "Ejemplo de `textContent`"
    ```javascript linenums="1" title="Ejemplo de textContent"
    let descripcion = document.getElementById("puesto");
    console.log(descripcion.textContent); // Desarrollador Web
    descripcion.textContent = "Ingeniero de Software"; // Modifica el texto sin afectar la estructura HTML
    ```

### **`innerHTML`**
Permite acceder o modificar el **contenido HTML** dentro de un elemento. A diferencia de `innerText` y `textContent`, **interpreta y procesa etiquetas HTML**.

📌 **Uso recomendado:** Cuando es necesario agregar o modificar contenido con etiquetas HTML.

!!! example "Ejemplo de `innerHTML`"
    ```javascript linenums="1" title="Ejemplo de innerHTML"
    let contenedor = document.getElementById("puesto");
    contenedor.innerHTML = "<strong>Gerente de Proyecto</strong>"; // Inserta contenido con formato HTML
    ```

**📢 Precaución con `innerHTML`:** Si el contenido proviene de fuentes externas o de usuarios, usar `innerHTML` sin validación puede generar problemas de seguridad (inyección de código).

**4.2.6 Ejercicio: Modificar contenido con `innerText`, `textContent` e `innerHTML`**

!!! question "Ejercicio: Aplicar diferentes métodos para modificar contenido"
    1. Crea un documento HTML que contenga tres elementos:
       - Un encabezado `<h1>` con el id `titulo`.
       - Un párrafo `<p>` con el id `descripcion`.
       - Un `div` con el id `contenido`.
    2. Usa los siguientes métodos para modificar cada uno:
       - `innerText` para cambiar el título a "Bienvenido al curso de JavaScript".
       - `textContent` para cambiar el texto del párrafo a "Aprenderás a modificar el DOM con JavaScript".
       - `innerHTML` para agregar contenido con etiquetas HTML dentro del `div`.
    3. Agrega un botón en el HTML que, al hacer clic, ejecute los cambios.

??? example "Solución del ejercicio"
    ```javascript linenums="1" title="Modificar contenido dinámicamente"
    document.getElementById("modificar").addEventListener("click", function() {
        document.getElementById("titulo").innerText = "Bienvenido al curso de JavaScript";
        document.getElementById("descripcion").textContent = "Aprenderás a modificar el DOM con JavaScript";
        document.getElementById("contenido").innerHTML = "<strong>Contenido modificado dinámicamente</strong>";
    });
    ```

---

## **4.2.7 Modificación de atributos y estilos**

JavaScript permite modificar los atributos y estilos de los elementos del DOM de diversas maneras.

### **Modificar atributos**
Estos métodos permiten cambiar o eliminar atributos de los elementos HTML.

- **`setAttribute(atributo, valor)`**: Establece un atributo con el valor especificado.
- **`getAttribute(atributo)`**: Obtiene el valor de un atributo.
- **`removeAttribute(atributo)`**: Elimina un atributo de un elemento.

!!! example "Ejemplo de modificación de atributos"
    ```javascript linenums="1" title="Modificar atributos de un enlace"
    let enlace = document.getElementById("miEnlace");
    enlace.setAttribute("href", "https://www.google.com"); // Modifica la URL
    console.log(enlace.getAttribute("href")); // Obtiene la URL
    enlace.removeAttribute("target"); // Elimina el atributo target
    ```

### **Modificar estilos con JavaScript**
Podemos cambiar los estilos de los elementos con dos métodos:

- **`.style.property`**: Modifica un estilo individual.
- **`.classList`**: Añade, quita o alterna clases CSS.

!!! example "Ejemplo de modificación de estilos"
    ```javascript linenums="1" title="Cambiar color de fondo"
    document.body.style.backgroundColor = "lightblue";
    ```

!!! example "Ejemplo de modificación de clases"
    ```javascript linenums="1" title="Agregar y quitar clases"
    let boton = document.getElementById("miBoton");
    boton.classList.add("resaltado"); // Agrega una clase CSS
    boton.classList.remove("resaltado"); // Elimina la clase
    ```

Hay un método adicional, `classList.toggle()`, que **agrega o quita una clase** según su presencia en el elemento. Se utiliza para **alternar estilos**. Por ejemplo, si una clase `activo` cambia el color de fondo, `classList.toggle("activo")` cambiará el color al hacer clic.

!!! example "Ejemplo de `classList.toggle()`"
    ```javascript linenums="1" title="Alternar una clase"
    <style>
    .activo {
        background-color: lightblue;
    }
    </style>
    let boton = document.getElementById("miBoton");
    boton.classList.toggle("activo"); // Alterna la clase activo
    ```

!!! question "Ejercicio: Modificar atributos y estilos"
    - Cambia el `src` de una imagen.
    - Modifica el color de un botón al hacer clic.
    - Agrega y quita clases CSS dinámicamente.

---

## **4.2.8 Creación y eliminación de elementos en el DOM**

### **Crear elementos dinámicamente**
- **`document.createElement(etiqueta)`**: Crea un nuevo elemento.
- **`appendChild(nodo)`**: Añade un elemento al final de otro.
- **`insertBefore(nuevoNodo, nodoExistente)`**: Inserta un elemento antes de otro existente.

!!! example "Ejemplo práctico"
    ```javascript linenums="1" title="Crear elemento"
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo elemento añadido dinámicamente.";
    document.body.appendChild(nuevoParrafo);
    ```

### **Eliminar elementos**
- **`removeChild(nodo)`**: Elimina un nodo hijo de otro nodo padre.
- **`remove()`**: Elimina un nodo directamente.

!!! example "Ejemplo de eliminación de elementos"
    ```javascript linenums="1" title="Eliminar un elemento"
    let elemento = document.getElementById("elementoAEliminar");
    elemento.remove(); // Elimina el elemento
    ```

### **Ejercicio: Crear y eliminar elementos**

!!! question "Ejercicio: Crear y eliminar elementos"
    1. Crea una página con una lista de elementos (`<ul>`).
    2. Agrega un botón para añadir nuevos elementos a la lista.
    3. Agrega otro botón para eliminar el último elemento de la lista.
    4. Usa `appendChild()` y `removeChild()`.

    ```html linenums="1" title="HTML Base"
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Lista Dinámica</title>
        </head>
        <body>
            <h1>Lista de Elementos</h1>
            <ul id="lista">
                <li>Elemento 1</li>
                <li>Elemento 2</li>
            </ul>
            <button id="agregar">Agregar Elemento</button>
            <button id="eliminar">Eliminar Último</button>
            <script src="script.js"></script>
        </body>
        </html>
    ```
    ??? example "Solución en JavaScript"
        ```javascript linenums="1" title="script.js"
            document.getElementById("agregar").addEventListener("click", function() {
            let lista = document.getElementById("lista");
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = "Nuevo Elemento";
            lista.appendChild(nuevoElemento);
        });

            document.getElementById("eliminar").addEventListener("click", function() {
            let lista = document.getElementById("lista");
            if (lista.children.length > 0) {
                lista.removeChild(lista.lastElementChild);
            }
        });
        ```

Este ejercicio permite practicar la creación y eliminación de elementos dinámicos en el DOM.

## **4.2.9 Manejo de eventos en el DOM**

Los eventos permiten interactuar con los usuarios y reaccionar a acciones como clics o movimientos del ratón, y del teclado. JavaScript proporciona una forma sencilla de asignar eventos a los elementos del DOM.

### **Formas de asignar eventos**

Existen varias maneras de asignar eventos en JavaScript. A continuación, veremos dos métodos principales: 

### **1️⃣ Asignación de eventos en el HTML (método clásico)**

Este método define el evento directamente en el HTML, estableciendo la función a ejecutar en el atributo correspondiente.

!!! example "Ejemplo de evento en el HTML"
    ```html linenums="1" title="Ejemplo de evento en HTML"
    <button onclick="saludar()">Saludar</button>
    <script>
        function saludar() {
            alert("¡Hola, bienvenido!");
        }
    </script>
    ```

📌 **Desventajas:**
- Difícil de mantener en proyectos grandes.
- No permite asignar múltiples eventos al mismo elemento fácilmente.

### **2️⃣ Uso de `addEventListener()` (método recomendado)**

Este método permite asignar eventos directamente desde JavaScript, manteniendo el código HTML más limpio y estructurado.

!!! example "Ejemplo de `addEventListener()`"
    ```html linenums="1" title="Ejemplo de addEventListener()"
    <button id="boton">Saludar</button>
    <script>
        document.getElementById("boton").addEventListener("click", function() {
            alert("¡Hola, bienvenido!");
        });
    </script>
    ```

📌 **Ventajas:**
- Permite asignar múltiples eventos al mismo elemento.
- Separa la estructura HTML de la lógica en JavaScript.

Para eliminar un evento asignado con `addEventListener()`, se utiliza el método `removeEventListener()`. Este método requiere que la función de evento sea nombrada, lo que puede ser un inconveniente en algunos casos. En el ejemplo anterior:

```html linenums="1" title="Eliminar evento con removeEventListener()"
let boton = document.getElementById("boton");
let saludar = function() {
    alert("¡Hola, bienvenido!");
};
boton.addEventListener("click", saludar);
boton.removeEventListener("click", saludar);
``` 

Esta función devuelve `true` si se eliminó correctamente, y `false` si el evento no estaba asignado.

---

### **Eventos más utilizados**

| Evento      | Elemento típico | Descripción |
|------------|----------------|-------------|
| `click`    | Botones, enlaces | Se dispara cuando se hace clic en un elemento. |
| `mouseover`| Imágenes, enlaces | Se activa cuando el ratón pasa sobre un elemento. |
| `change`   | Formularios | Se activa cuando cambia el valor de un campo de entrada. |
| `load`     | `body`, imágenes | Se ejecuta cuando la página o un recurso ha cargado completamente. |
| `KeyDown`| `document` | Se activa cuando se presiona una tecla en cualquier parte del documento. |
| `KeyUp`  | `document` | Se dispara cuando se suelta una tecla en cualquier parte del documento. |
| `keyPress` | `document` | Se activa cuando se presiona una tecla que produce un carácter. |
| `focus`  | Campos de entrada | Se activa cuando un elemento recibe el foco. |
| `blur`   | Campos de entrada | Se dispara cuando un elemento pierde el foco. |
| `submit` | Formularios | Se activa cuando se envía un formulario. |

[Podemos encontrar más información sobre eventos en W3Schools](https://www.w3schools.com/js/js_events.asp).

---

Ahora explicamos algunos eventos comunes y su uso en JavaScript, sobre el resto profundizaremos en el siguiente módulo.

### **El evento `onload` y su uso en JavaScript**

El evento `onload` se ejecuta cuando el documento HTML ha sido completamente cargado. Se usa comúnmente para inicializar scripts y asegurarse de que todos los elementos del DOM están disponibles antes de interactuar con ellos.

!!! example "Ejemplo de `onload`"
    ```html linenums="1" title="Ejemplo de onload"
    <body onload="inicializar()">
        <h1>Página cargada</h1>
        <script>
            function inicializar() {
                alert("La página ha cargado correctamente.");
            }
        </script>
    </body>
    ```

### **Uso recomendado de `DOMContentLoaded` en lugar de `onload`**

El evento `DOMContentLoaded` se dispara cuando el navegador ha terminado de analizar completamente el documento HTML, antes de que se carguen imágenes y otros recursos externos.

📌 **¿Por qué es mejor `DOMContentLoaded`?**
- `onload` espera a que **todos** los recursos de la página (imágenes, scripts, estilos) se hayan cargado.
- `DOMContentLoaded` se activa **antes**, justo después de que el HTML esté listo, lo que mejora el tiempo de respuesta de los scripts.
- En aplicaciones dinámicas, muchas veces no es necesario esperar a la carga de imágenes o estilos para ejecutar código JavaScript.

📌 **Recomendación:** En lugar de usar `onload` en el HTML, es mejor utilizar `DOMContentLoaded` en JavaScript:

!!! example "Ejemplo de `DOMContentLoaded`"
    ```javascript linenums="1" title="DOMContentLoaded"
    document.addEventListener("DOMContentLoaded", function() {
        alert("El DOM está completamente cargado y listo para su manipulación");
    });
    ```

---

### **Ejercicio: Manejo de eventos**

!!! question "Ejercicio: Manejo de eventos"
    1. Crea una página con un campo de entrada de texto y un botón.
    2. Al presionar el botón, muestra en un `div` el contenido del campo de entrada.
    3. Implementa un evento `mouseover` en un `div` para cambiar su color al pasar el cursor.
    4. Agrega un evento `keydown` para detectar cuando el usuario escribe.

📌 **Código base HTML:**

!!! example "HTML Base para el ejercicio"
    ```html linenums="1" title="HTML Base"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Eventos en el DOM</title>
    </head>
    <body>
        <h1>Interacción con Eventos</h1>
        <input type="text" id="entrada" placeholder="Escribe algo...">
        <button id="mostrar">Mostrar</button>
        <div id="resultado" style="margin-top: 20px; padding: 10px; border: 1px solid black;">Aquí aparecerá el texto</div>
        <div id="caja" style="width: 100px; height: 100px; background-color: lightblue; margin-top: 20px;"></div>
        <script src="script.js"></script>
    </body>
    </html>
    ```

    ??? example "Solución en JavaScript"
        ```javascript linenums="1" title="script.js"
        document.getElementById("mostrar").addEventListener("click", function() {
            let texto = document.getElementById("entrada").value;
            document.getElementById("resultado").textContent = texto;
        });

        document.getElementById("caja").addEventListener("mouseover", function() {
            this.style.backgroundColor = "yellow";
        });
        
        document.getElementById("caja").addEventListener("mouseout", function() {
            this.style.backgroundColor = "lightblue";
        });

        document.getElementById("entrada").addEventListener("keydown", function(event) {
            console.log("Tecla presionada: " + event.key);
        });
        ```
    ??? example "Solución clásica sin `addEventListener()`"
        ```javascript linenums="1" title="Solución sin addEventListener"
        window.onload = function() {
            let boton = document.getElementById("mostrar");
            boton.onclick = function() {
                let texto = document.getElementById("entrada").value;
                document.getElementById("resultado").textContent = texto;
            };

            let caja = document.getElementById("caja");
            caja.onmouseover = function() {
                caja.style.backgroundColor = "yellow";
            };
            caja.onmouseout = function() {
                caja.style.backgroundColor = "lightblue";
            };

            document.getElementById("entrada").onkeydown = function(event) {
                console.log("Tecla presionada: " + event.key);
            };
        };
        ```


Este ejercicio permite practicar la interacción con eventos en el DOM, incluyendo clics, movimiento del ratón y pulsaciones de teclado.

## **4.2.11 Ejercicio guiado: Selección de Comunidad y Ciudad**

En este ejercicio, construiremos un **formulario dinámico** en el que los usuarios seleccionarán una Comunidad Autónoma y, en función de su selección, podrán elegir una ciudad dentro de esa comunidad. Además, el botón de envío solo estará habilitado cuando ambas selecciones sean válidas.

**📌 Objetivos del ejercicio**

1. Al cargar la página, los selectores estarán vacíos con la opción `Seleccione una comunidad` y `Seleccione una ciudad`.
2. El selector de ciudad estará deshabilitado hasta que el usuario seleccione una comunidad.
3. Al elegir una comunidad, el selector de ciudad se llenará con las capitales de provincia correspondientes.
4. Si se cambia la comunidad seleccionada, la lista de ciudades se actualizará y se deseleccionará la opción anterior.
5. El botón "Enviar" solo se activará cuando haya una comunidad y ciudad seleccionada.
6. Al presionar el botón "Enviar", se mostrará un mensaje con la comunidad y la ciudad seleccionada y el formulario se reiniciará.

**Código base del HTML**

!!! example "HTML Base para el ejercicio"
    ```html linenums="1" title="HTML Base"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Selección de Comunidad y Ciudad</title>
    </head>
    <body>
        <h1>Formulario de Selección</h1>
        <label for="comunidad">Comunidad Autónoma:</label>
        <select id="comunidad">
            <option value="">Seleccione una comunidad</option>
        </select> 
        <label for="ciudad">Ciudad:</label>
        <select id="ciudad" disabled>
            <option value="">Seleccione una ciudad</option>
        </select>
        <button id="enviar" disabled>Enviar</button>
        <script src="formulario.js"></script>
    </body>
    </html>
    ```

**Código en JavaScript (formulario.js)**

??? example "Solución en JavaScript"
    ```javascript linenums="1" title="formulario.js"
    document.addEventListener("DOMContentLoaded", function() {
        // JSON con las comunidades y sus capitales
        const comunidades = {
            "Valenciana": ["Alicante", "Castellón", "Valencia"],
            "Catalana": ["Barcelona", "Gerona", "Lérida", "Tarragona"],
            "Madrileña": ["Madrid"],
            "Andaluza": ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"]
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
        comunidadSelect.addEventListener("change", function() {
            ciudadSelect.innerHTML = "<option value=''>Seleccione una ciudad</option>";
            ciudadSelect.disabled = true;
            enviarBtn.disabled = true;
            
            let comunidadSeleccionada = comunidadSelect.value;
            if (comunidadSeleccionada) {
                ciudadSelect.disabled = false;
                comunidades[comunidadSeleccionada].forEach(ciudad => {
                    let option = document.createElement("option");
                    option.value = ciudad;
                    option.textContent = ciudad;
                    ciudadSelect.appendChild(option);
                });
            }
        });
        
        // Evento para activar el botón cuando se seleccione una ciudad
        ciudadSelect.addEventListener("change", function() {
            enviarBtn.disabled = !ciudadSelect.value;
        });
        
        // Evento para mostrar alerta y reiniciar formulario al enviar
        enviarBtn.addEventListener("click", function() {
            alert(`Comunidad: ${comunidadSelect.value}\nCiudad: ${ciudadSelect.value}`);
            comunidadSelect.value = "";
            ciudadSelect.innerHTML = "<option value=''>Seleccione una ciudad</option>";
            ciudadSelect.disabled = true;
            enviarBtn.disabled = true;
        });
    });
    ```

### **📌 Ejercicio adicional**

!!! question "Ejercicio adicional: Agregar y eliminar ciudades"
    - **Ampliación del ejercicio**:
        - Añadir un formulario donde el usuario pueda agregar nuevas ciudades a una comunidad existente.
        - Implementar un botón "Eliminar" que permita quitar una ciudad seleccionada.
        - Al eliminar una ciudad, actualizar la lista de manera dinámica.

Con este ejercicio, los alumnos practicarán el uso de **eventos, manipulación dinámica del DOM, deshabilitación de elementos y gestión de selectores** en JavaScript. 


## **4.2.11 Integración con el servicio REST de ciudades**

En la **Unidad 3.4** creamos un pequeño servicio REST que permitía recuperar una lista de ciudades o los datos de una ciudad en particular. Ahora vamos a integrarlo en una página web utilizando **JavaScript y el DOM**.

📌 **Objetivo del ejercicio:**
1. Crear una página web que cargue la lista de ciudades desde el servicio REST y la muestre en una tabla.
2. Cada ciudad tendrá un botón en su código que, al hacer clic, mostrará los detalles de la ciudad en una ventana emergente (`prompt`).
3. Como mejora opcional, el alumno deberá permitir **añadir y eliminar** ciudades mediante un formulario dinámico.

📌 **Código base HTML:**

!!! example "HTML Base para el ejercicio"
    ```html linenums="1" title="HTML Base"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Lista de Ciudades</title>
    </head>
    <body>
        <h1>Ciudades Disponibles</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Población</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="ciudades-lista">
                <!-- Aquí se cargarán las ciudades dinámicamente -->
            </tbody>
        </table>
        <script src="ciudades.js"></script>
    </body>
    </html>
    ```

📌 **Solución en JavaScript:**

??? example "Solución en JavaScript"
    ```javascript linenums="1" title="ciudades.js"
    document.addEventListener("DOMContentLoaded", function() {
        fetch("http://localhost:3000/ciudades") // URL del servicio REST
            .then(response => response.json())
            .then(ciudades => {
                let tabla = document.getElementById("ciudades-lista");
                ciudades.forEach(ciudad => {
                    let fila = document.createElement("tr");
                    fila.innerHTML = `
                        <td>${ciudad.codigo}</td>
                        <td>${ciudad.nombre}</td>
                        <td>${ciudad.poblacion}</td>
                        <td><button onclick="verCiudad(${ciudad.codigo})">Ver</button></td>
                    `;
                    tabla.appendChild(fila);
                });
            })
            .catch(error => console.error("Error al cargar ciudades:", error));
    });

    function verCiudad(codigo) {
        fetch(`http://localhost:3000/ciudades/${codigo}`)
            .then(response => response.json())
            .then(ciudad => {
                alert(`Código: ${ciudad.codigo}\nNombre: ${ciudad.nombre}\nPoblación: ${ciudad.poblacion}`);
            })
            .catch(error => console.error("Error al obtener datos de la ciudad:", error));
    }
    ```

**Ejercicio propuesto:**

!!! question "Ejercicio: Añadir y eliminar ciudades"
    - **Añadir ciudad:** Modifica el código para incluir un formulario con `input` para ingresar una nueva ciudad y un botón "Agregar".
    - **Eliminar ciudad:** Agrega un botón "Eliminar" en cada fila de la tabla, que permita eliminar una ciudad de la lista y de la base de datos utilizando `fetch()` con `DELETE`.

Con este ejercicio, los alumnos aprenderán a **cargar datos desde una API REST**, **modificar dinámicamente el DOM**, y **agregar funcionalidades interactivas** a una página web. 🚀

## **4.2.12 Ejercicios prácticos**

A continuación, se presentan una serie de ejercicios para reforzar los conocimientos adquiridos sobre **HTML, manipulación del DOM y eventos**.

### **Ejercicios de HTML**

!!! question "Ejercicio 1: Crear una lista ordenada"
    - Crea un documento HTML con una lista ordenada de 5 elementos.
    - Agrega una etiqueta `<h2>` con un título descriptivo.

    ??? example "Solución"
        ```html linenums="1" title="Lista ordenada"
        <!DOCTYPE html>
        <html lang="es">
        <head><title>Lista Ordenada</title></head>
        <body>
            <h2>Lista de Compras</h2>
            <ol>
                <li>Manzanas</li>
                <li>Plátanos</li>
                <li>Leche</li>
                <li>Pan</li>
                <li>Huevos</li>
            </ol>
        </body>
        </html>
        ```

!!! question "Ejercicio 2: Crear una tabla básica"
    - Construye una tabla HTML con 3 columnas (`Nombre`, `Edad`, `Ciudad`) y 4 filas.
    - Añade un encabezado (`<thead>`) y un cuerpo (`<tbody>`).

    ??? example "Solución"
        ```html linenums="1" title="Tabla básica"
        <table border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ana</td>
                    <td>30</td>
                    <td>Madrid</td>
                </tr>
                <tr>
                    <td>Pedro</td>
                    <td>25</td>
                    <td>Barcelona</td>
                </tr>
                <tr>
                    <td>María</td>
                    <td>35</td>
                    <td>Sevilla</td>
                </tr>
            </tbody>
        </table>
        ```

!!! question "Ejercicio 3: Crear un formulario de contacto"
    - Diseña un formulario HTML con los siguientes campos:
      - Nombre (campo de texto)
      - Correo electrónico (campo de email)
      - Mensaje (área de texto)
      - Botón de envío
    - Usa etiquetas `<label>` para cada campo.
    ??? example "Solución"
        ```html linenums="1" title="Formulario de contacto"
        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <br>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje"></textarea>
            <br>
            <button type="submit">Enviar</button>
        </form>
        ```

!!! question "Ejercicio 4: Crear un formulario de registro"
    - Crea un formulario con:
      - Nombre de usuario (campo de texto)
      - Contraseña (campo de password)
      - Selector de país (`<select>`) con al menos 5 opciones
      - Botón de registro
    
    ??? example "Solución"
        ```html linenums="1" title="Formulario de registro"
        <form>
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required>
            <br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <label for="pais">País:</label>
            <select id="pais" name="pais">
                <option>España</option>
                <option>Argentina</option>
                <option>México</option>
                <option>Chile</option>
                <option>Colombia</option>
            </select>
            <br>
            <button type="submit">Registrar</button>
        </form>
    ```

!!! question "Ejercicio 5: Crear un formulario con radio buttons y checkboxes"
    - Diseña un formulario con:
      - Selección de género (`Masculino`, `Femenino`, `Otro`) usando radio buttons.
      - Una lista de intereses con checkboxes (`Música`, `Deportes`, `Cine`).
      - Un botón de envío.
    ??? example "Solución"
        ```html linenums="1" title="Formulario con radio buttons y checkboxes"
        <form>
            <label>Género:</label>
            <input type="radio" id="masculino" name="genero" value="masculino">
            <label for="masculino">Masculino</label>
            <input type="radio" id="femenino" name="genero" value="femenino">
            <label for="femenino">Femenino</label>
            <input type="radio" id="otro" name="genero" value="otro">
            <label for="otro">Otro</label>
            <br>
            <label>Intereses:</label>
            <input type="checkbox" id="musica" name="intereses" value="musica">
            <label for="musica">Música</label>
            <input type="checkbox" id="deportes" name="intereses" value="deportes">
            <label for="deportes">Deportes</label>
            <input type="checkbox" id="cine" name="intereses" value="cine">
            <label for="cine">Cine</label>
            <br>
            <button type="submit">Enviar</button>
        </form>
        ```

---

### **Ejercicios con JavaScript y DOM**

!!! question "Ejercicio 6: Añadir elementos dinámicamente a una lista"
    - Modifica el **Ejercicio 1** agregando un campo de entrada y un botón.
    - Al hacer clic en el botón, el nuevo elemento se añadirá a la lista.

    ??? example "Solución"
        ```javascript linenums="1" title="Añadir elementos dinámicamente"
        document.getElementById("agregar").addEventListener("click", function() {
            let lista = document.getElementById("miLista");
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = document.getElementById("nuevoItem").value;
            lista.appendChild(nuevoElemento);
        });
        ```



!!! question "Ejercicio 7: Modificar dinámicamente una tabla"
    - Basado en el **Ejercicio 2**, crea un formulario con los mismos campos.
    - Al completar el formulario y presionar el botón "Agregar", se añadirá una nueva fila a la tabla.

    ??? example "Solución"
        ```javascript linenums="1" title="Modificar tabla dinámicamente"
        document.getElementById("agregar").addEventListener("click", function() {
            let tabla = document.getElementById("miTabla");
            let nuevaFila = tabla.insertRow(-1);
            let celda1 = nuevaFila.insertCell(0);
            let celda2 = nuevaFila.insertCell(1);
            let celda3 = nuevaFila.insertCell(2);
            celda1.textContent = document.getElementById("nombre").value;
            celda2.textContent = document.getElementById("edad").value;
            celda3.textContent = document.getElementById("ciudad").value;
        });
        ```

!!! question "Ejercicio 8: Validación de un formulario"
    - Modifica el **Ejercicio 3** para validar que:
        - El campo de nombre no esté vacío.
        - El correo sea válido.
        - El mensaje tenga al menos 10 caracteres.
    - Si hay errores, mostrar un mensaje en pantalla.

    ??? example "Solución"
        ```javascript linenums="1" title="Validación de formulario"
        document.getElementById("enviar").addEventListener("click", function(event) {
            let nombre = document.getElementById("nombre").value;
            let email = document.getElementById("email").value;
            let mensaje = document.getElementById("mensaje").value;
            if (nombre === "" || email === "" || mensaje.length < 10) {
                alert("Por favor, complete todos los campos correctamente.");
                event.preventDefault();
            }
        });
        ```

!!! question "Ejercicio 9: Manejo de eventos del teclado y ratón"
    - Modifica el **Ejercicio 4**:
      - Cuando el usuario presione una tecla en el campo de contraseña, se mostrará la cantidad de caracteres ingresados.
      - Al pasar el ratón sobre el botón de registro, cambiará de color.

    ??? example "Solución"
        ```javascript linenums="1" title="Eventos de teclado y ratón"
        document.getElementById("password").addEventListener("keydown", function() {
            let longitud = document.getElementById("password").value.length;
            alert(`Caracteres ingresados: ${longitud}`);
        });

        document.getElementById("registrar").addEventListener("mouseover", function() {
            this.style.backgroundColor = "lightblue";
        });
        ```

!!! question "Ejercicio 10: Modificación de atributos y clases dinámicamente"
    - Agrega estilos CSS al formulario del **Ejercicio 5**.
    - Crea un botón "Activar Modo Oscuro" que, al hacer clic, cambie la apariencia de la página usando `classList.toggle()`.

    ??? example "Solución"
        ```javascript linenums="1" title="Modificación de atributos y clases"
        document.getElementById("modoOscuro").addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
        });
        ```

Estos ejercicios ayudarán a los alumnos a practicar la **estructura HTML**, la **manipulación del DOM** y el **uso de eventos en JavaScript**. 


