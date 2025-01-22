---
# Autor: Javier Beteta LLuna
# Fecha: 2025-01-20
# Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
# Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
# Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
# Unit: 02 - Funciones y Manejo de Errores

# **Unidad 2: Funciones y Manejo de Errores (20 horas)**

---

## **2.1 Funciones en JavaScript (12 horas)**

### **¿Qué es una función?**
Una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones ayudan a modularizar el código, haciéndolo más legible y mantenible.

---

### **2.1.1 Declaración y uso de funciones**

#### **Declaración de funciones**
Las funciones se declaran utilizando la palabra clave `function`, seguida del nombre de la función, paréntesis (para los parámetros) y un bloque de código entre llaves.

#### **Sintaxis**
    ```javascript
    function nombreFuncion(parámetros) {
        // Código a ejecutar
    }
    ```

#### **Ejemplo**
    ```javascript
    function saludar() {
        console.log("¡Hola, mundo!");
    }

    saludar(); // Llama a la función y muestra "¡Hola, mundo!"
    ```

---

### **2.1.2 Parámetros y valores de retorno**

#### **Parámetros**
Las funciones pueden aceptar valores como parámetros. Estos valores se pasan dentro de los paréntesis al llamar la función.

#### **Valores de retorno**
Las funciones pueden devolver un valor utilizando la palabra clave `return`.

#### **Ejemplo**
    ```javascript
    function sumar(a, b) {
        return a + b;
    }

    let resultado = sumar(5, 3);
    console.log("La suma es:", resultado); // La suma es: 8
    ```

---

### **2.1.3 Funciones anónimas y flecha (arrow functions)**

#### **Funciones anónimas**
Son funciones sin nombre, generalmente asignadas a una variable o usadas como callbacks.

#### **Ejemplo**
    ```javascript
    const multiplicar = function (a, b) {
        return a * b;
    };

    console.log(multiplicar(4, 5)); // 20
    ```

#### **Arrow functions**
Sintaxis simplificada para declarar funciones anónimas usando `=>`.

#### **Ejemplo**
    ```javascript
    const dividir = (a, b) => a / b;

    console.log(dividir(10, 2)); // 5
    ```

---

### **2.1.4 Alcance de las variables: Local y Global**

#### **Alcance Global**
Las variables declaradas fuera de funciones son accesibles desde cualquier lugar del código.

#### **Ejemplo**
    ```javascript
    let global = "Soy global";

    function mostrarGlobal() {
        console.log(global);
    }

    mostrarGlobal(); // Soy global
    ```

#### **Alcance Local**
Las variables declaradas dentro de una función solo son accesibles desde esa función.

#### **Ejemplo**
    ```javascript
    function ejemploLocal() {
        let local = "Soy local";
        console.log(local);
    }

    ejemploLocal(); // Soy local
    // console.log(local); // Error: local is not defined
    ```

---

## **Ejercicios de funciones**

### **Ejercicio 1: Crear una función básica**
- Crea una función llamada `saludo` que tome un nombre como parámetro y muestre un saludo personalizado.

??? example "Solución ejercicio 1"

    ```javascript
    function saludo(nombre) {
        console.log(`¡Hola, ${nombre}!`);
    }

    saludo("María"); // ¡Hola, María!
    ```

---

### **Ejercicio 2: Calculadora**
- Crea una función llamada `operar` que tome tres parámetros: dos números y un operador (`+`, `-`, `*`, `/`). Devuelve el resultado de la operación.

??? example "Solución ejercicio 2"

    ```javascript
    function operar(a, b, operador) {
        if (operador === "+") return a + b;
        if (operador === "-") return a - b;
        if (operador === "*") return a * b;
        if (operador === "/") return a / b;
        return "Operador no válido";
    }

    console.log(operar(10, 5, "+")); // 15
    ```

---

## **2.2 Manejo de errores (3 horas)**

### **¿Qué es el manejo de errores?**
El manejo de errores permite controlar y reaccionar ante fallos en el código sin que la ejecución se interrumpa completamente.

---

### **2.2.1 Bloques `try`, `catch` y `finally`**

#### **Sintaxis**
    ```javascript
    try {
        // Código que puede lanzar un error
    } catch (error) {
        // Manejo del error
    } finally {
        // Código que se ejecuta siempre, con o sin error
    }
    ```

#### **Ejemplo**
    ```javascript
    try {
        let resultado = 10 / 0;
        console.log(resultado);
    } catch (error) {
        console.log("Ocurrió un error:", error.message);
    } finally {
        console.log("Ejecución terminada");
    }
    ```

---

### **2.2.2 Lanzar errores con `throw`**

#### **Ejemplo**
    ```javascript
    function dividir(a, b) {
        if (b === 0) throw new Error("No se puede dividir por cero");
        return a / b;
    }

    try {
        console.log(dividir(10, 0));
    } catch (error) {
        console.log(error.message); // No se puede dividir por cero
    }
    ```

---

## **Ejercicios de manejo de errores**

### **Ejercicio 1: Validar entrada**
- Crea una función que solicite al usuario un número. Lanza un error si el usuario no introduce un número válido.

??? example "Solución ejercicio 1"

    ```javascript
    const prompt = require("prompt-sync")();

    function solicitarNumero() {
        let entrada = prompt("Introduce un número: ");
        let numero = parseFloat(entrada);

        if (isNaN(numero)) {
            throw new Error("La entrada no es un número válido");
        }

        return numero;
    }

    try {
        console.log("Número válido:", solicitarNumero());
    } catch (error) {
        console.log(error.message);
    }
    ```

---

## **2.3 Métodos básicos de entrada/salida (5 horas)**## **2.3 Entrada y Salida a Ficheros (FS)**

En esta sección aprenderemos a manejar archivos en Node.js utilizando la librería **FS** (File System) y a trabajar con datos estructurados en formato **JSON**.

---

### **2.3.1 Introducción a la Librería FS**

La librería **FS** (File System) de Node.js permite interactuar con el sistema de archivos para leer, escribir, modificar y eliminar ficheros.

#### **Importar la Librería FS**
Antes de usar la librería, debemos importarla:
    ```javascript
    const fs = require("fs");
    ```

#### **Métodos Comunes de FS**

1. **Escribir en un archivo**
    - `fs.writeFileSync(ruta, contenido)`: Escribe en un archivo de forma síncrona.
    - `fs.writeFile(ruta, contenido, callback)`: Escribe en un archivo de forma asíncrona.

    ```javascript
    const fs = require("fs");

    fs.writeFileSync("ejemplo.txt", "Hola, mundo!");
    console.log("Archivo creado y escrito con éxito");
    ```

2. **Leer un archivo**
    - `fs.readFileSync(ruta, formato)`: Lee un archivo de forma síncrona.
    - `fs.readFile(ruta, formato, callback)`: Lee un archivo de forma asíncrona.

    ```javascript
    const fs = require("fs");

    let contenido = fs.readFileSync("ejemplo.txt", "utf8");
    console.log("Contenido del archivo:", contenido);
    ```

3. **Agregar contenido a un archivo**
    - `fs.appendFileSync(ruta, contenido)`: Agrega contenido de forma síncrona.
    - `fs.appendFile(ruta, contenido, callback)`: Agrega contenido de forma asíncrona.

    ```javascript
    const fs = require("fs");

    fs.appendFileSync("ejemplo.txt", "\n¡Bienvenido al mundo de Node.js!");
    console.log("Contenido agregado con éxito");
    ```

4. **Eliminar un archivo**
    - `fs.unlinkSync(ruta)`: Elimina un archivo de forma síncrona.
    - `fs.unlink(ruta, callback)`: Elimina un archivo de forma asíncrona.

    ```javascript
    const fs = require("fs");

    fs.unlinkSync("ejemplo.txt");
    console.log("Archivo eliminado con éxito");
    ```

---

## **Ejercicios de FS**

### **Ejercicio 1: Crear y leer un archivo**
1. Crea un archivo llamado `mensaje.txt` y escribe en él el texto: "Hola, este es un mensaje guardado en un archivo."
2. Luego, lee el contenido del archivo y muéstralo en la consola.

??? example "Solución ejercicio 1"

    ```javascript
    const fs = require("fs");

    // Crear y escribir en el archivo
    fs.writeFileSync("mensaje.txt", "Hola, este es un mensaje guardado en un archivo.");
    console.log("Archivo creado y escrito con éxito");

    // Leer el contenido del archivo
    let contenido = fs.readFileSync("mensaje.txt", "utf8");
    console.log("Contenido del archivo:", contenido);
    ```
---

### **2.3.2 Uso de JSON**

El formato **JSON** (JavaScript Object Notation) se utiliza para estructurar datos de forma legible y fácil de intercambiar. Con **FS**, podemos leer, escribir y manipular archivos JSON.

---

### **Crear y Escribir en un JSON**
Usamos `JSON.stringify()` para convertir un objeto en una cadena JSON antes de escribirlo en un archivo.

#### **Ejemplo**
    ```javascript
    const fs = require("fs");

    const personas = [
        { dni: "12345678A", nombre: "Juan", gmail: "juan@gmail.com", telefono: "123456789" },
        { dni: "87654321B", nombre: "María", gmail: "maria@gmail.com", telefono: "987654321" },
    ];

    fs.writeFileSync("personas.json", JSON.stringify(personas, null, 2));
    console.log("Archivo JSON creado con éxito");
    ```

---

### **Leer un JSON**
Usamos `JSON.parse()` para convertir una cadena JSON en un objeto o arreglo.

#### **Ejemplo**
    ```javascript
    const fs = require("fs");

    let datos = fs.readFileSync("personas.json", "utf8");
    let personas = JSON.parse(datos);
    console.log("Contenido del JSON:", personas);
    ```

---

### **Agregar Información a un JSON**
Leemos el archivo, agregamos un nuevo objeto al arreglo y lo volvemos a escribir.

#### **Ejemplo**
    ```javascript
    const fs = require("fs");

    let datos = fs.readFileSync("personas.json", "utf8");
    let personas = JSON.parse(datos);

    personas.push({ dni: "11223344C", nombre: "Luis", gmail: "luis@gmail.com", telefono: "1122334455" });

    fs.writeFileSync("personas.json", JSON.stringify(personas, null, 2));
    console.log("Nuevo registro añadido con éxito");
    ```

---

### **Borrar Información de un JSON**
Filtramos los datos para eliminar un registro basado en un criterio (por ejemplo, DNI) y reescribimos el archivo.

#### **Ejemplo**
    ```javascript
    const fs = require("fs");

    let datos = fs.readFileSync("personas.json", "utf8");
    let personas = JSON.parse(datos);

    personas = personas.filter(persona => persona.dni !== "12345678A");

    fs.writeFileSync("personas.json", JSON.stringify(personas, null, 2));
    console.log("Registro eliminado con éxito");
    ```

---

### **Ejercicio Final: CRUD con JSON**
- Crea un programa que permita:

  1. Crear un archivo JSON con un conjunto de personas.
  2. Leer y mostrar los datos del archivo.
  3. Agregar una nueva persona.
  4. Eliminar una persona por su DNI.

??? example "Solución ejercicio final"

    ```javascript
    const fs = require("fs");

    // Función para leer el JSON
    function leerJSON() {
        let datos = fs.readFileSync("personas.json", "utf8");
        return JSON.parse(datos);
    }

    // Crear un archivo JSON inicial
    const personasIniciales = [
        { dni: "12345678A", nombre: "Juan", gmail: "juan@gmail.com", telefono: "123456789" },
        { dni: "87654321B", nombre: "María", gmail: "maria@gmail.com", telefono: "987654321" },
    ];
    fs.writeFileSync("personas.json", JSON.stringify(personasIniciales, null, 2));

    // Agregar una nueva persona
    let personas = leerJSON();
    personas.push({ dni: "11223344C", nombre: "Luis", gmail: "luis@gmail.com", telefono: "1122334455" });
    fs.writeFileSync("personas.json", JSON.stringify(personas, null, 2));

    // Eliminar una persona por DNI
    personas = leerJSON();
    personas = personas.filter(persona => persona.dni !== "12345678A");
    fs.writeFileSync("personas.json", JSON.stringify(personas, null, 2));

    console.log("Operaciones realizadas con éxito");
    ```

---

## **2.4 Ejercicios Prácticos Solucionados**

Esta sección contiene una batería de **10 ejercicios** sobre funciones, manejo de errores, FS, y JSON en Node.js.

---

### **Ejercicios de Funciones**

### **Ejercicio 1: Función Potencia**
Crea una función llamada `potencia` que reciba dos números, base y exponente, y devuelva el resultado de elevar la base al exponente.

??? example "Solución ejercicio 1"

    ```javascript
    function potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    console.log(potencia(2, 3)); // 8
    console.log(potencia(5, 2)); // 25
    ```

---

### **Ejercicio 2: Reverso de una Cadena**
Crea una función llamada `reverso` que reciba una cadena de texto y devuelva la misma cadena, pero invertida.

??? example "Solución ejercicio 2"

    ```javascript
    function reverso(cadena) {
        return cadena.split("").reverse().join("");
    }

    console.log(reverso("hola")); // "aloh"
    console.log(reverso("JavaScript")); // "tpircSavaJ"
    ```

---
#### **Ejercicio 3: Función Multiplicadora**
Crea una función `multiplicar` que reciba un número y devuelva su tabla de multiplicar del 1 al 10.

??? example "Solución ejercicio 3"

    ```javascript
    function multiplicar(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    multiplicar(5);
    ```

---

#### **Ejercicio 4: Número Primo**
Crea una función llamada `esPrimo` que determine si un número es primo o no.

??? example "Solución ejercicio 4"

    ```javascript
    function esPrimo(numero) {
        if (numero <= 1) return false;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }

    console.log(esPrimo(7)); // true
    console.log(esPrimo(10)); // false
    ```

---

### **Ejercicios de Manejo de Errores**

#### **Ejercicio 5: Validación de Número**
Crea una función que solicite al usuario un número y lance un error si la entrada no es válida.

??? example "Solución ejercicio 5"

    ```javascript
    const prompt = require("prompt-sync")();

    function solicitarNumero() {
        let entrada = prompt("Introduce un número: ");
        let numero = parseFloat(entrada);

        if (isNaN(numero)) {
            throw new Error("La entrada no es un número válido");
        }

        return numero;
    }

    try {
        console.log("Número válido:", solicitarNumero());
    } catch (error) {
        console.log(error.message);
    }
    ```

---

#### **Ejercicio 6: División Segura**
Crea una función llamada `dividirSegura` que reciba dos números y lance un error si se intenta dividir por cero.

??? example "Solución ejercicio 6"

    ```javascript
    function dividirSegura(a, b) {
        if (b === 0) throw new Error("No se puede dividir por cero");
        return a / b;
    }

    try {
        console.log(dividirSegura(10, 2)); // 5
        console.log(dividirSegura(10, 0)); // Error
    } catch (error) {
        console.log(error.message);
    }
    ```

---

### **Ejercicios de FS**

#### **Ejercicio 7: Crear y Leer un Archivo**
Crea un archivo llamado `datos.txt` con el texto "Hola, este es un mensaje." y luego léelo desde el disco.

??? example "Solución ejercicio 7"

    ```javascript
    const fs = require("fs");

    fs.writeFileSync("datos.txt", "Hola, este es un mensaje.");
    console.log("Archivo creado con éxito");

    let contenido = fs.readFileSync("datos.txt", "utf8");
    console.log("Contenido del archivo:", contenido);
    ```

---

#### **Ejercicio 8: Actualizar un Archivo**
Agrega un nuevo mensaje al archivo `datos.txt` y luego lee su contenido actualizado.

??? example "Solución ejercicio 8"

    ```javascript
    const fs = require("fs");

    fs.appendFileSync("datos.txt", "\n¡Este es un mensaje adicional!");
    console.log("Mensaje agregado con éxito");

    let contenido = fs.readFileSync("datos.txt", "utf8");
    console.log("Contenido actualizado:", contenido);
    ```

---

### **Ejercicios de JSON**

#### **Ejercicio 9: Crear y Leer un JSON**
Crea un archivo JSON llamado `usuarios.json` que contenga un arreglo de usuarios. Luego, lee y muestra su contenido.

??? example "Solución ejercicio 9"

    ```javascript
    const fs = require("fs");

    const usuarios = [
        { id: 1, nombre: "Juan", email: "juan@gmail.com" },
        { id: 2, nombre: "Ana", email: "ana@gmail.com" },
    ];

    fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));
    console.log("Archivo JSON creado con éxito");

    let contenido = fs.readFileSync("usuarios.json", "utf8");
    console.log("Contenido del JSON:", JSON.parse(contenido));
    ```

---

#### **Ejercicio 10: Actualizar un JSON**
Agrega un nuevo usuario al archivo `usuarios.json`.

??? example "Solución ejercicio 10"

    ```javascript
    const fs = require("fs");

    let contenido = fs.readFileSync("usuarios.json", "utf8");
    let usuarios = JSON.parse(contenido);

    usuarios.push({ id: 3, nombre: "Luis", email: "luis@gmail.com" });
    fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));
    console.log("Nuevo usuario agregado con éxito");
    ```
