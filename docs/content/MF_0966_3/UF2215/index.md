---
Author: Javier Beteta
Date: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Description: Unidad Formativa 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
---

# Unidad Formativa 3: UF2215 

## Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión

| **Campo**                | **Detalle**                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Código**               | UF2215                                                                      |
| **Nombre**               | Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión |
| **Duración**             | 70 horas                                                                   |
| **Referente de Competencia** | RP3: Documentar procesos y utilizar herramientas de conexión              |


En este módulo vamos a realizar las siguientes modificaciones aprovechando los contenidos del módulo `0485 - Programación`. Esta Unidad Formativa nos debe dar las competencias necesarias para poder realizar las tareas de consulta y manipulación de información contenida en gestores de datos. Ya que en el módulo siguiente se nos pide desarrollar una CMS, es necesario que tengamos conocimientos de programación para poder realizar las tareas de consulta y manipulación de información contenida en gestores de datos.


| **Campo**                | **Detalle**                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Código**               | 0485                                                                      |
| **Nombre**               | Progrmación (256h)|
| **Duración**             | 70 horas                                                                   |



## Contenidos Reducidos (100 horas)

### **Objetivo General**
Aprender los fundamentos de la programación utilizando JavaScript, con un enfoque inicial en lógica y estructuras del lenguaje, para luego integrar con HTML en el desarrollo de páginas web.

### **Unidad 1: Configuración del Entorno y Fundamentos de JavaScript (20 horas)**

**1.1 Configuración del Entorno de Desarrollo**

- Instalación de Node.js y configuración básica.
- Uso de VSCode como editor principal.
- Introducción al uso de la consola y ejecución de programas con Node.js.

**1.2 Variables, Tipos de Datos y Operadores**

- Declaración de variables (`let`, `const`, `var`).
- Tipos de datos primitivos: cadenas, números, booleanos, etc.
- Operadores básicos: aritméticos, lógicos y relacionales.

**1.3 Estructuras Básicas de Control**

- Condicionales (`if`, `else`, `else if`).
- Bucles (`for`, `while`, `do-while`).
- Uso del `switch`.

**1.4 Bucles**

- Introducción a los bucles.
- Bucle `for`.
- Bucle `while`.
- Bucle `do-while`.
- Errores comunes en bucles.
- Uso avanzado de `break` y `continue`.

**1.5 Uso Avanzado de Números, Cadenas y Fechas**

- Clase `Number`
- Biblioteca `Math`
- Clase `String`
- Clase `Date`
- Ejercicios Prácticos

**1.6 Ejercicios Prácticos**

- Tenis
- Fechas de pago
- Adivinanzas

---

### **Unidad 2: Arrays, Objetos y Clases (30 horas)**

- **2.1** Arrays y su manipulación (8h)
       - Creación y uso de arrays.
       - Métodos comunes: `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, etc.
       - Iteración de arrays: `for`, `forEach`, `map`, `filter`, `reduce`.
- **2.2** Objetos y su uso (7h)
       - Declarando objetos
       - Métodos
       - La palabra clave `this`
       - Constructores de objetos
       - El operador `new`
       - Herencia y prototipos
- **2.3** Persistencia JS con JSON (7h)
       - Introducción a JSON.
       - Serialización y deserialización de objetos.
       - Almacenamiento de datos en archivos JSON.


**Objetivo:** Trabajar con estructuras más complejas como arrays, objetos y clases para modelar datos y estructuras reales.

---

### **Unidad 3: Funciones y Manejo de Errores (20 horas)**

## **3.1 Funciones en JavaScript (12h)**
- Declaración y uso de funciones.
- Parámetros y valores de retorno.
- Funciones anónimas.
- Funciones como expresiones.
- Paso de parámetros por valor y por referencia.
- Alcance de las variables: local y global.
- Funciones recursivas (introducción).
- Retorno de funciones.
- Funciones anónimas autoejecutadas (IIFE).
- Funciones flecha (`arrow functions`).

## **3.2 Manejo de Errores en JavaScript (3h)**
- Uso de bloques `try`, `catch` y `finally`.
- Lanzar errores con `throw`.
- Tipos de errores comunes en JavaScript (sintaxis, referencia, tipo, etc.).
- Personalización de mensajes de error.

## **3.3 Asincronía en JavaScript (5h)**
- Callbacks y su problema (`callback hell`).
- Promesas (`Promise`).
- `async/await` y su uso en JavaScript.

## **3.4 Ejemplo práctico con Async/Await**
- Creación de un microservicio REST con Express.

---

### **Unidad 4: Integración de JavaScript con HTML y el DOM (20 horas)**

- **4.1** Introducción a HTML (5h)
       - Conceptos de HTML.
       - Estructura básica de un documento HTML.
       - Etiquetas y atributos comunes.
- **4.2** Vinculación de JavaScript con HTML (5h)
       - Uso de etiquetas `<script>` para enlazar archivos JavaScript.
       - Ejecución de código JS en eventos básicos de HTML (`onClick`, `onSubmit`).
- **4.3** Introducción al DOM y manejo básico (10h)
       - ¿Qué es el DOM?
       - Seleccionar elementos: `getElementById`, `querySelector`.
       - Modificación básica del contenido: `innerHTML`, `textContent`.
       - Manejo de eventos: `addEventListener`.
       - Ejercicio práctico básico: Crear una lista interactiva donde los usuarios puedan añadir y eliminar elementos.

**Objetivo:** Introducir la integración de JavaScript con HTML y la manipulación básica del DOM para trabajar en páginas web dinámicas.

---

### **Unidad 5: Proyecto Final (10 horas)**
- **5.1** Desarrollo de un proyecto básico
       - Crear un **gestor de tareas simple**:
             - Permitir al usuario añadir, editar y eliminar tareas.
             - Almacenar datos temporalmente en arrays u objetos.
             - Mostrar la lista de tareas en una página web utilizando HTML y el DOM.
             - Uso de eventos para manejar interacciones del usuario.
             - Uso del DOM para actualizar la interfaz dinámica.

**Objetivo:** Integrar todos los conocimientos adquiridos en un proyecto práctico.

---

## **Recursos y Herramientas**

### **Editor y Ejecución**
- **Editor de código:** VSCode (con extensiones como Prettier para formato).
- **Ejecución:** Uso de Node.js para la mayor parte del curso. En la unidad del DOM, se usará un navegador para vincular JavaScript con HTML.

### **Materiales de apoyo**
1. **MDN Web Docs (JavaScript):**
        - [Guía de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
2. **FreeCodeCamp:**
        - [Curso de JavaScript Básico](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/).
3. **Ejercicios prácticos interactivos:**
        - [Exercism.io - JavaScript](https://exercism.io/tracks/javascript).
        - [Codewars](https://www.codewars.com/).

---

### **Distribución del Tiempo**

| Unidad Didáctica                            | Horas |
|---------------------------------------------|-------|
| **Unidad 1:** Fundamentos de JavaScript     | 20    |
| **Unidad 2:** Funciones y Manejo de Errores | 20    |
| **Unidad 3:** Arrays, Objetos y Clases      | 30    |
| **Unidad 4:** Integración de JS con HTML y DOM | 20    |
| **Unidad 5:** Proyecto Final                | 10    |
| **Total**                                   | **100** |
