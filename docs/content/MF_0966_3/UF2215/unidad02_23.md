---
Autor: Javier Beteta LLuna
Fecha: 2025-02-15
Keywords: MF_0966_3, UF2215, Programación, JavaScript, JSON, Persistencia
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 02 - Arrays, Objetos y Clases
---

# **Unidad 2: Arrays, Objetos y Clases**

## **2.3 Persistencia en JavaScript con JSON**

### **Introducción**

En JavaScript, la persistencia de datos es fundamental cuando queremos almacenar información de manera duradera. Para ello, uno de los formatos más utilizados es **JSON** (**JavaScript Object Notation**), que permite representar estructuras de datos de manera clara, sencilla y compatible con distintos sistemas.

Este formato es ampliamente usado en el intercambio de datos entre aplicaciones web, APIs y almacenamiento en archivos.

---

### **¿Qué es JSON?**

**JSON (JavaScript Object Notation)** es un formato de texto para el intercambio de datos, basado en la sintaxis de objetos de JavaScript. Es independiente del lenguaje y fácil de leer tanto por humanos como por máquinas.

- Se estructura en **pares clave-valor**.
- Permite almacenar datos en forma de **objetos** y **arrays**.
- Es compatible con múltiples lenguajes de programación.

**Ejemplo de un objeto en JSON:**

```json linenums="1" title="Ejemplo de JSON"
{
  "nombre": "Carlos Pérez",
  "edad": 35,
  "puesto": "Desarrollador",
  "habilidades": ["JavaScript", "HTML", "CSS"]
}
```

---

### **¿Cómo utilizar JSON en JavaScript?**

JavaScript proporciona dos métodos fundamentales para trabajar con JSON:

- `JSON.stringify()` → Convierte un objeto JavaScript a una cadena JSON.
- `JSON.parse()` → Convierte una cadena JSON a un objeto JavaScript.

!!! example "Ejemplo de uso de `JSON.stringify()` y `JSON.parse()`"
    ```javascript linenums="1" title="Trabajando con JSON"
    let empleado = {
        nombre: "Ana López",
        edad: 28,
        puesto: "Analista"
    };
    
    // Convertimos el objeto a JSON
    let jsonString = JSON.stringify(empleado);
    console.log(jsonString);

    // Convertimos el JSON de nuevo a un objeto
    let objetoRecuperado = JSON.parse(jsonString);
    console.log(objetoRecuperado);
    ```

---

### **Leyendo un JSON externo**

Podemos leer archivos JSON externos utilizando `fetch()` en JavaScript.
Este JSON lo utilizaremos estos datos de ejemplo, que lo puedes encontrar en [este enlace](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json).

```JSON
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation"
      ]
    }
  ]
}
```

!!! example "Lectura de un JSON externo"
    ```javascript linenums="1" title="Leyendo JSON externo"
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log(`Equipo: ${data.squadName}`);
            console.log(`Ciudad: ${data.homeTown}`);
            console.log(`Formado en: ${data.formed}`);
            console.log('Miembros del equipo:');
            data.members.forEach(member => {
                console.log(`- Nombre: ${member.name}`);
                console.log(`  Edad: ${member.age}`);
                console.log(`  Identidad secreta: ${member.secretIdentity}`);
                console.log('  Poderes:');
                member.powers.forEach(power => console.log(`    * ${power}`));
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
        
    ```

Este ejemplo muestra la información básica del equipo de superhéroes, así como los detalles de cada miembro, incluyendo su edad, identidad secreta y lista de poderes."


### **Ejemplo Completo: Aplicación Interactiva con JSON**

Vamos a desarrollar una aplicación que cargue la información del JSON de superhéroes en un array, notifique al usuario y permita ver los detalles de cada superhéroe mediante un menú interactivo.

??? example "Aplicación interactiva con JSON"
    ```javascript linenums="1" title="Aplicación JSON Interactiva"
    async function cargarSuperheroes() {
        try {
            const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
            if (!response.ok) {
                throw new Error('Error al cargar el JSON');
            }
            const data = await response.json();

            // Cargar datos en un array
            const superheroes = data.members;

            // Informar al usuario
            console.log(`¡Datos cargados correctamente!`);
            console.log(`Equipo: ${data.squadName}`);
            console.log(`Ciudad: ${data.homeTown}`);
            console.log(`Formado en: ${data.formed}`);
            console.log(`Número de miembros: ${superheroes.length}`);

            // Menú interactivo
            let indice;
            do {
                indice = parseInt(prompt(`Introduce un índice entre 0 y ${superheroes.length - 1} para ver un superhéroe (introduce otro número para salir):`));

                if (indice >= 0 && indice < superheroes.length) {
                    const hero = superheroes[indice];
                    console.log(`\nInformación del superhéroe:`);
                    console.log(`Nombre: ${hero.name}`);
                    console.log(`Edad: ${hero.age}`);
                    console.log(`Identidad secreta: ${hero.secretIdentity}`);
                    console.log(`Poderes:`);
                    hero.powers.forEach(power => console.log(`- ${power}`));
                } else {
                    console.log("Saliendo de la aplicación...");
                }

            } while (indice >= 0 && indice < superheroes.length);

        } catch (error) {
            console.error('Error al cargar o procesar el JSON:', error);
        }
    }

    cargarSuperheroes();
    ```

**¿Qué hace esta aplicación?**

1. Carga el archivo JSON externo con `fetch`.
2. Informa al usuario sobre el contenido del archivo.
3. Muestra un menú que permite introducir un índice para ver información detallada de un superhéroe.
4. Finaliza cuando el usuario introduce un índice no válido.

Este ejemplo muestra cómo cargar datos JSON, almacenarlos en un array, recorrerlos y mostrarlos de forma interactiva mediante un menú simple."


---

### **Almacenar un objeto JSON en un fichero local**

Para almacenar datos en un archivo local usando Node.js, podemos usar el módulo `fs`.

!!! example "Almacenando JSON en un archivo"
    ```javascript linenums="1" title="Guardar JSON en archivo"
    const fs = require('fs');

    let empleados = [
        { "codigo": 101, "nombre": "Carlos Pérez", "edad": 35, "sueldo": 2500 },
        { "codigo": 102, "nombre": "Ana López", "edad": 28, "sueldo": 2200 }
    ];

    let jsonData = JSON.stringify(empleados, null, 2);

    fs.writeFileSync('empleados.json', jsonData, 'utf-8');
    console.log('Archivo JSON guardado exitosamente.');
    ```

---

### **Leer un JSON desde un fichero local**

Podemos leer un archivo JSON localmente usando Node.js.

!!! example "Leyendo un archivo JSON local"
    ```javascript linenums="1" title="Leer JSON desde archivo"
    const fs = require('fs');

    let datos = fs.readFileSync('empleados.json', 'utf-8');
    let empleados = JSON.parse(datos);

    console.log(empleados);
    ```

---

### **Ejercicio Propuesto**

Se proporciona el siguiente archivo JSON con información de empleados:

**`empleados.json`**
```json
[
    { "codigo": 101, "nombre": "Carlos Pérez", "edad": 35, "sueldo": 2500 },
    { "codigo": 102, "nombre": "Ana López", "edad": 28, "sueldo": 2200 },
    { "codigo": 103, "nombre": "Luis García", "edad": 40, "sueldo": 3000 }
]
```

**Requisitos del ejercicio:**

1. Leer el archivo JSON y convertirlo a un array de objetos.
2. Solicitar al usuario un **código de empleado**.
3. Mostrar la información del empleado correspondiente.
4. Permitir al usuario modificar la **edad** o el **sueldo**.
5. Guardar de nuevo el array modificado en el archivo JSON.

??? example "Posible solución"
    ```javascript linenums="1" title="Solución del ejercicio"
    const fs = require('fs');
    const prompt = require('prompt-sync')();

    // Leer el archivo JSON
    let datos = fs.readFileSync('empleados.json', 'utf-8');
    let empleados = JSON.parse(datos);

    // Pedir código de empleado
    let codigo = parseInt(prompt('Introduce el código del empleado: '));
    let empleado = empleados.find(emp => emp.codigo === codigo);

    if (empleado) {
        console.log(`Empleado encontrado: ${empleado.nombre}, Edad: ${empleado.edad}, Sueldo: ${empleado.sueldo}`);

        // Permitir modificar edad o sueldo
        let opcion = prompt('¿Quieres modificar la edad (e) o el sueldo (s)?: ').toLowerCase();
        if (opcion === 'e') {
            let nuevaEdad = parseInt(prompt('Introduce la nueva edad: '));
            empleado.edad = nuevaEdad;
        } else if (opcion === 's') {
            let nuevoSueldo = parseFloat(prompt('Introduce el nuevo sueldo: '));
            empleado.sueldo = nuevoSueldo;
        }

        // Guardar los cambios en el archivo JSON
        fs.writeFileSync('empleados.json', JSON.stringify(empleados, null, 2), 'utf-8');
        console.log('Datos actualizados correctamente.');
    } else {
        console.log('Empleado no encontrado.');
    }
    ```

Este ejercicio permite comprender cómo leer, modificar y guardar datos en formato JSON utilizando JavaScript y Node.js."