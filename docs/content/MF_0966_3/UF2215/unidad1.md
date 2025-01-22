---
# Autor: Javier Beteta LLuna
# Fecha: 2025-01-20
# Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
# Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
# Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
# Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

**Unidad 1: Configuración del Entorno y Fundamentos de JavaScript (20 horas)**

- **1.1** Configuración del entorno de desarrollo (5h)

       - Instalación de Node.js y configuración básica.
       - Uso de VSCode como editor principal.
       - Introducción al uso de la consola y ejecución de programas con Node.js.

- **1.2** Variables, tipos de datos y operadores (10h)
       
       - Declaración de variables (`let`, `const` y `var`).
       - Tipos de datos primitivos: cadenas, números, booleanos, etc.
       - Operadores básicos: aritméticos, lógicos, y relacionales.

- **1.3** Estructuras básicas de control (5h)
       
       - Condicionales (`if`, `else`, `else if`).
       - Bucles (`for`, `while`, `do while`).

**Objetivo:** Familiarizar a los alumnos con el entorno de desarrollo, la sintaxis básica de JavaScript y las estructuras fundamentales de control.

---

# Unidad 1: Configuración del Entorno y Fundamentos de JavaScript

## 1.1 Configuración del Entorno de Desarrollo

### **Objetivos**

1. Configurar un entorno de desarrollo para escribir y ejecutar código en JavaScript.
2. Familiarizarse con herramientas clave: Node.js, Visual Studio Code (VSCode) y la consola.
3. Ejecutar un programa básico en JavaScript para validar la configuración.

---

### **1.1.1 Instalación de Node.js y configuración básica**

#### **¿Qué es Node.js y por qué lo necesitamos?**

Node.js es un entorno de ejecución para JavaScript construido sobre el motor **V8** de Google Chrome. Permite ejecutar JavaScript en el lado del servidor, fuera del navegador. Esto lo convierte en una herramienta fundamental para el desarrollo de aplicaciones modernas, como servidores web, herramientas de línea de comandos y aplicaciones de tiempo real.

---

##### **Historia de Node.js**

- **Lanzamiento inicial:** Node.js fue creado por **Ryan Dahl** y lanzado en **2009**.
- **Motivación:** Ryan Dahl desarrolló Node.js para solucionar problemas comunes en los servidores web tradicionales, como la falta de eficiencia al manejar múltiples conexiones simultáneas.
- **Primera versión estable:** La versión 0.10 fue lanzada en marzo de 2013, marcando el inicio de su adopción masiva.
- **Ecosistema en crecimiento:** Desde 2015, el desarrollo de Node.js es administrado por la **Node.js Foundation**, que posteriormente se fusionó con la **JS Foundation** en 2019 para formar la **OpenJS Foundation**.
- **Licencia:** Node.js está disponible bajo la licencia **MIT**, lo que permite su uso, modificación y distribución de forma gratuita, incluso en proyectos comerciales.

---

##### **Modo de Funcionamiento**

**Modelo de ejecución asíncrono:** Node.js utiliza un modelo basado en eventos que permite manejar múltiples solicitudes al mismo tiempo sin bloquear el servidor. Esto lo hace ideal para aplicaciones que requieren un manejo intensivo de entradas y salidas (I/O).

**Motor V8:** Node.js está construido sobre el motor V8 de Google Chrome, que convierte el código JavaScript en código máquina, asegurando un rendimiento óptimo.

**Ejecución concurrente:** Aunque utiliza un solo hilo, Node.js puede manejar múltiples conexiones simultáneamente mediante un bucle de eventos (`event loop`) y callbacks.

---

##### **Características Clave**

- **Modelo No Bloqueante:** Las operaciones I/O no bloquean el flujo del programa, lo que permite manejar múltiples tareas de manera eficiente.
- **Compatibilidad Cross-Platform:** Funciona en sistemas operativos como Windows, macOS y Linux.
- **Ecosistema de Paquetes (NPM):** Node.js incluye el administrador de paquetes más grande del mundo, NPM, que cuenta con más de un millón de paquetes.
- **Aplicaciones en Tiempo Real:** Ideal para aplicaciones como chats, juegos en línea y transmisiones en tiempo real.
- **Escalabilidad:** Gracias a su arquitectura basada en eventos, Node.js puede manejar un gran número de conexiones simultáneamente.

---

##### **Ventajas**

- **Velocidad:** Su motor V8 es altamente eficiente.
- **Ecosistema Extenso:** La comunidad de NPM ofrece soluciones para casi cualquier tarea.
- **Reutilización de Conocimientos:** Permite usar JavaScript en el frontend y el backend.
- **Ideal para Microservicios:** Su arquitectura ligera es adecuada para diseñar aplicaciones modulares.

##### **Limitaciones**

- **Operaciones Intensivas en CPU:** Node.js no es la mejor opción para tareas que requieren un alto procesamiento, como cálculos complejos.
- **Callback Hell:** Aunque mitiga esto con Promises y `async/await`, el uso intensivo de callbacks puede hacer que el código sea difícil de mantener.

---

##### **Casos de Uso Reales**

- **Netflix:** Utiliza Node.js para mejorar la velocidad de carga de su interfaz de usuario.
- **Uber:** Emplea Node.js para manejar solicitudes en tiempo real.
- **PayPal:** Mejoró el rendimiento de sus aplicaciones migrando a Node.js.

---

##### **Enlaces a Soluciones con Node.js**

- **[Express.js](https://expressjs.com):** Framework minimalista para construir aplicaciones web y APIs.
- **[Socket.io](https://socket.io):** Biblioteca para crear aplicaciones en tiempo real como chats y juegos.
- **[NestJS](https://nestjs.com):** Framework para desarrollar aplicaciones backend modulares y escalables.
- **[Electron](https://www.electronjs.org):** Herramienta para crear aplicaciones de escritorio multiplataforma con Node.js.
- **[Strapi](https://strapi.io):** CMS basado en Node.js para crear APIs rápidas y personalizables.

---

##### **Recursos Adicionales**

- **Documentación oficial de Node.js:** [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- **Guía para principiantes:** [https://www.freecodecamp.org/news/learn-node-js-beginners-guide/](https://www.freecodecamp.org/news/get-started-with-nodejs/)
- **Tutorial en video:** [Net Ninja - Curso de Node.js](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)

---

#### **Descargar e instalar Node.js**

1. Accede al sitio oficial de Node.js: [https://nodejs.org](https://nodejs.org).
2. Selecciona la versión **LTS (Long Term Support)**.
3. Descarga y sigue el proceso de instalación según tu sistema operativo.

#### **Descargar e instalar Node.js en Windows**

1. **Accede al sitio oficial de Node.js:**

   - Ve a [https://nodejs.org](https://nodejs.org).
   - Encontrarás dos opciones principales de descarga:
         - **LTS (Long Term Support):** Recomendado para la mayoría de los usuarios, ya que es más estable.
         - **Current:** Incluye las últimas características, pero podría ser menos estable.
   - **Selecciona LTS** para garantizar estabilidad en el curso.

2. **Descarga el instalador:**

   - Haz clic en el botón de descarga que corresponde a tu sistema operativo (Windows detectará automáticamente la versión adecuada, ya sea de 32 o 64 bits).

3. **Ejecuta el instalador:**

   - Busca el archivo descargado (generalmente estará en la carpeta `Descargas`) y haz doble clic para abrirlo.

4. **Sigue los pasos del asistente de instalación:**

   - **Pantalla de bienvenida:**
   
         - Haz clic en `Next` para continuar.
   
   - **Acuerdo de licencia:**
   
         - Lee los términos de la licencia y haz clic en `I accept the terms in the License Agreement`, luego en `Next`.
   
   - **Carpeta de instalación:**
   
         - Selecciona la carpeta donde deseas instalar Node.js (por defecto es `C:\Program Files\nodejs`).
         - Se recomienda dejar la ubicación predeterminada y hacer clic en `Next`.
   
   - **Componentes a instalar:**

         - Asegúrate de que todas las opciones estén seleccionadas:
                 - **Node.js runtime:** El núcleo del entorno de ejecución.
                 - **npm package manager:** Administrador de paquetes para instalar bibliotecas.
                 - **Add to PATH:** Agrega Node.js a las variables de entorno del sistema (muy importante).
                 - **Online documentation shortcuts:** Acceso rápido a la documentación en línea.
         - Haz clic en `Next`.

   - **Herramientas adicionales para la compilación nativa (opcional):**

         - En algunos casos, el instalador puede ofrecer la opción de instalar herramientas adicionales como **Python** o compiladores de C++ necesarios para algunos paquetes.
         - Si aparece esta opción, selecciona el checkbox y haz clic en `Next`.
   - **Instalación:**

         - Haz clic en `Install` y espera a que el instalador copie los archivos necesarios.
   - **Finalización:**

         - Una vez terminada la instalación, marca la opción de "Automatically install necessary tools" (si está disponible) y haz clic en `Finish`.


#### **Validación de la instalación**

1. Abre la terminal o consola de comandos.
2. Ejecuta los siguientes comandos para verificar que Node.js y npm están instalados correctamente:
    
    ```bash
        node -v
        npm -v
    ```
3. Deberías ver los números de versión correspondientes.

#### **Ejecutar un primer script en Node.js**

1. Crea un archivo `hello.js` con el siguiente contenido:
   
   ```javascript
   console.log("¡Hola, mundo!");
   ```

2. En la consola, navega hasta el directorio donde guardaste el archivo y ejecuta:

   ```bash
   node hello.js
   ```

---

### **1.1.2 Uso de Visual Studio Code (VSCode) como editor principal**

#### **Introducción a VSCode**
Visual Studio Code es uno de los editores más populares para desarrollo, con soporte para múltiples lenguajes y extensiones.

#### **Instalación y configuración**

1. Descarga desde el sitio oficial: [https://code.visualstudio.com](https://code.visualstudio.com).
2. Instálalo y abre la aplicación.

#### **Configuración básica**

1. Personaliza el tema visual desde las opciones de configuración.
2. Instala las siguientes extensiones recomendadas:
   - **Prettier**: Formateo automático del código.
   - **ESLint**: Detección de errores y problemas en el código.
   - **JavaScript (ES6) Code Snippets**: Accesos rápidos para escribir código.

#### **Creación y ejecución de un programa en VSCode**

1. Abre un nuevo proyecto en VSCode.
2. Crea un archivo `app.js` con el siguiente contenido:
   ```javascript
   const saludo = "¡Hola desde VSCode!";
   console.log(saludo);
   ```
3. Ejecuta el programa desde la terminal integrada de VSCode:
   - Abre la terminal integrada con `Ctrl + \``.
   - Escribe: `node app.js`.

---

### **1.1.3 Introducción al uso de la consola y ejecución de programas**


#### **¿Qué es la consola?**

La consola es una herramienta para interactuar con el sistema operativo y ejecutar comandos.

#### **Comandos básicos**

1. Navegar entre carpetas:
   ```bash
   cd nombre-de-la-carpeta
   ```
2. Listar archivos:
   - En Windows: `dir`
   - En macOS/Linux: `ls`
3. Crear y eliminar archivos:
   ```bash
   touch archivo.js
   rm archivo.js
   ```

#### **Uso del REPL de Node.js**

1. Inicia el entorno interactivo ejecutando:
   ```bash
   node
   ```
2. Escribe comandos simples:
   ```javascript
   console.log("Hola desde el REPL");
   2 + 2;
   ```

---

### **Actividad Práctica**

1. Configura el entorno completo instalando Node.js y VSCode.
2. Crea una carpeta llamada `proyecto_inicial`.
3. Dentro de la carpeta, crea un archivo `index.js` con este código:
   ```javascript
   const nombre = "Estudiante";
   console.log(`¡Bienvenido, ${nombre}, a la programación con JavaScript!`);
   ```
4. Ejecuta el programa en la consola.

#### **Reto Extra**

1. Investiga cómo instalar un paquete de npm.
2. Instala `chalk` y úsalo para cambiar el color del texto en la consola:
   ```bash
   npm install chalk
   ```
3. Código de ejemplo:
   ```javascript
   const chalk = require('chalk');
   console.log(chalk.green("¡Texto en color verde!"));
   ```

---

### **Evaluación**
- los estudiantes puedan:
     1. Ejecutar scripts básicos en Node.js.
     2. Crear y ejecutar programas en VSCode.
     3. Usar la consola para navegar y gestionar archivos.

---

### **1.2 Variables, Tipos de Datos y Operadores**

#### **Objetivo**

Comprender cómo declarar y usar variables en JavaScript, conocer los diferentes tipos de datos y aprender a trabajar con operadores básicos para realizar operaciones.


#### **1.2.1 Declaración de Variables**

**¿Qué es una variable?**  

Una variable es un espacio en la memoria que se utiliza para almacenar datos que pueden ser usados y manipulados en un programa.

**Formas de declarar variables en JavaScript:**

1. **`let`:** Permite declarar variables que pueden ser modificadas.
    ```javascript
    let nombre = "Juan";
    nombre = "Ana"; // Esto es válido
    ```
2. **`const`:** Se utiliza para declarar constantes, es decir, valores que no cambian.
    ```javascript
    const pi = 3.1416;
    // pi = 3; // Esto generará un error
    ```
3. **`var`:** Declaración más antigua. Evita su uso en favor de `let` y `const` debido a problemas de alcance.
    ```javascript
    var edad = 25;
    ```

**Buenas prácticas:**

- Usa `const` siempre que el valor no cambie.
- Usa `let` cuando necesites cambiar el valor de la variable.
- Evita `var` para prevenir errores relacionados con el alcance.

---

#### **1.2.2 Tipos de Datos Primitivos**

JavaScript tiene los siguientes tipos de datos básicos:

1. **String (Cadenas):** Representa texto.
    ```javascript
    let mensaje = "Hola, mundo!";
    console.log(typeof mensaje); // "string"
    ```

2. **Number (Números):** Incluye enteros y decimales.
    ```javascript
    let entero = 10;
    let decimal = 3.14;
    ```

3. **Boolean (Booleanos):** Valores `true` o `false`.
    ```javascript
    let esActivo = true;
    let esMayor = 10 > 5; // true
    ```

4. **Undefined:** Indica que una variable ha sido declarada pero no tiene valor.
    ```javascript
    let indefinido;
    console.log(indefinido); // undefined
    ```

5. **Null:** Representa un valor intencionalmente vacío.
    ```javascript
    let vacio = null;
    ```

6. **Symbol (Símbolos):** Valores únicos e inmutables, utilizados principalmente en programación avanzada.
    ```javascript
    let id = Symbol("id");
    ```

7. **BigInt:** Representa números enteros muy grandes.
    ```javascript
    let numeroGrande = 1234567890123456789012345678901234567890n;
    ```

---

#### **1.2.3 Operadores Básicos**

**Operadores Aritméticos:**
- Suma: `+`
    ```javascript
    let resultado = 5 + 3; // 8
    ```
- Resta: `-`
    ```javascript
    let resultado = 10 - 6; // 4
    ```
- Multiplicación: `*`
    ```javascript
    let resultado = 4 * 2; // 8
    ```
- División: `/`
    ```javascript
    let resultado = 9 / 3; // 3
    ```
- Resto o módulo: `%`
    ```javascript
    let resto = 10 % 3; // 1
    ```

**Operadores de Comparación:**
- Igualdad estricta: `===`
    ```javascript
    console.log(5 === "5"); // false
    ```
- Diferente: `!==`
    ```javascript
    console.log(10 !== 5); // true
    ```
- Mayor que: `>`
    ```javascript
    console.log(7 > 3); // true
    ```
- Menor que: `<`
    ```javascript
    console.log(2 < 5); // true
    ```

**Operadores Lógicos:**
- AND (`&&`): Devuelve `true` si ambos operandos son verdaderos.
    ```javascript
    console.log(true && false); // false
    ```
- OR (`||`): Devuelve `true` si al menos uno de los operandos es verdadero.
    ```javascript
    console.log(true || false); // true
    ```
- NOT (`!`): Invierte el valor lógico.
    ```javascript
    console.log(!true); // false
    ```

---

#### **1.2.4 Ejercicio Práctico**

1. **Crea un programa que haga lo siguiente:**

   - Declara dos variables, `a` y `b`, con valores numéricos.
   - Calcula la suma, resta, multiplicación, división y módulo de ambas variables.
   - Muestra los resultados en la consola.
   
    ??? example "Mostrar soluciones"

        ```javascript
            let a = 10;
            let b = 5;

            console.log("Suma:", a + b);
            console.log("Resta:", a - b);
            console.log("Multiplicación:", a * b);
            console.log("División:", a / b);
            console.log("Módulo:", a % b);
        ```

2. **Reto adicional:**

   - Crea un programa que solicite al usuario dos números utilizando `prompt`, realice las operaciones matemáticas básicas y muestre los resultados con `alert`.

   ??? example "Solución reto adicional"
        
        ```javascript
            let num1 = parseFloat(prompt("Introduce el primer número:"));
            let num2 = parseFloat(prompt("Introduce el segundo número:"));

            console.log("Suma: " + (num1 + num2));
            console.log("Resta: " + (num1 - num2));
            console.log("Multiplicación: " + (num1 * num2));
            console.log("División: " + (num1 / num2));
        ```

### **Batería de Ejercicios**

#### **Ejercicio 1: Declaración y uso de variables**

1. Declara dos variables: `nombre` y `edad`.
2. Asigna tus datos a estas variables.
3. Muestra un mensaje en la consola que diga: "Mi nombre es [nombre] y tengo [edad] años".


??? example "Solución ejercicio 1"

    ```javascript
    let nombre = "Juan";
    let edad = 25;
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
    ```

---

#### **Ejercicio 2: Suma de dos números**

1. Declara dos variables: `num1` y `num2`, y asígnales valores numéricos.
2. Calcula la suma de ambos números y almacena el resultado en una tercera variable.
3. Muestra el resultado en la consola.

??? example "Solución ejercicio 2"

    ```javascript
    let num1 = 10;
    let num2 = 20;
    let suma = num1 + num2;
    console.log(`La suma es: ${suma}`);
    ```

---

#### **Ejercicio 3: Operaciones matemáticas básicas**

1. Declara dos números: `a` y `b`.
2. Calcula y muestra en la consola el resultado de las siguientes operaciones:
   - Suma
   - Resta
   - Multiplicación
   - División
   - Módulo (resto)

??? example "Solución ejercicio 3"

    ```javascript
    let a = 15;
    let b = 4;

    console.log("Suma:", a + b);
    console.log("Resta:", a - b);
    console.log("Multiplicación:", a * b);
    console.log("División:", a / b);
    console.log("Módulo:", a % b);
    ```

---

#### **Ejercicio 4: Comparaciones**

1. Declara dos variables: `x` y `y`.
2. Muestra en la consola el resultado de las siguientes comparaciones:
   - ¿`x` es mayor que `y`?
   - ¿`x` es igual a `y` (igualdad estricta)?
   - ¿`x` es diferente de `y`?

??? example "Solución ejercicio 4"

    ```javascript
    let x = 8;
    let y = 5;

    console.log("x es mayor que y:", x > y);
    console.log("x es igual a y:", x === y);
    console.log("x es diferente de y:", x !== y);
    ```

---

#### **Ejercicio 5: Negación lógica**

1. Declara una variable booleana llamada `esActivo` y asígnale el valor `true`.
2. Muestra en la consola el valor de `esActivo` y su opuesto usando el operador `!`.

??? example "Solución ejercicio 5"

    ```javascript
    let esActivo = true;

    console.log("Valor original:", esActivo);
    console.log("Valor negado:", !esActivo);
    ```

---

#### **Ejercicio 6: Concatenación de cadenas**

1. Declara las siguientes variables:
   - `nombre` con tu nombre.
   - `apellido` con tu apellido.
2. Usa el operador `+` para concatenar ambas variables y mostrar en la consola un mensaje que diga: "Hola, mi nombre es [nombre completo]".

??? example "Solución ejercicio 6"

    ```javascript
    let nombre = "Juan";
    let apellido = "Pérez";

    console.log("Hola, mi nombre es " + nombre + " " + apellido);
    ```

---

#### **Ejercicio 7: Conversión de tipos**

1. Declara una variable `numeroComoTexto` con el valor `"123"`.
2. Convierte esta cadena a un número y almacénalo en otra variable.
3. Suma este número con otro valor numérico y muestra el resultado en la consola.

??? example "Solución ejercicio 7"

    ```javascript
    let numeroComoTexto = "123";
    let numero = parseInt(numeroComoTexto);

    console.log("Resultado de la suma:", numero + 50);
    ```

---

#### **Ejercicio 8: Operadores lógicos**

1. Declara tres variables: `a = true`, `b = false` y `c = true`.
2. Muestra en la consola el resultado de las siguientes expresiones lógicas:
   - `a && b`
   - `a || b`
   - `!c`

??? example "Solución ejercicio 8"

    ```javascript
    let a = true;
    let b = false;
    let c = true;

    console.log("a && b:", a && b);
    console.log("a || b:", a || b);
    console.log("!c:", !c);
    ```
---

### **Uso de `prompt-sync` en Node.js**

ES6 introdujo el método `prompt` para solicitar datos al usuario en el navegador, pero en Node.js no está disponible por defecto. Para interactuar con el usuario en Node.js, puedes utilizar la biblioteca `prompt-sync`. Es la manera que tenemos en Node.js de solicitar datos al usuario de forma sincrónica.

**`prompt-sync`** es una biblioteca que facilita las entradas sincronizadas en Node.js.

#### Instalación:

```bash
`npm install prompt-sync`
```

#### Ejemplo:

```javascript

const prompt = require("prompt-sync")();

let edad = prompt("¿Qué edad tienes? ");
console.log(`¡Hola, tienes ${edad} años`);

```

#### **Ejercicio 9: Solicitar el nombre del usuario**

1. Crea un programa que solicite al usuario su nombre mediante `prompt-sync`.
2. Muestra un saludo personalizado en la consola, como: "¡Hola, [nombre]!"

??? example "Solución ejercicio 9"

    ```javascript
    const prompt = require("prompt-sync")();

    // Solicitar el nombre al usuario
    let nombre = prompt("¿Cómo te llamas? ");

    // Mostrar saludo personalizado
    console.log(`¡Hola, ${nombre}!`);
    ```

---

#### **Ejercicio 10: Calculadora básica**

1. Crea un programa que:
   - Solicite al usuario dos números mediante `prompt-sync`.
   - Realice las operaciones matemáticas básicas (suma, resta, multiplicación y división).
   - Muestre los resultados en la consola.

??? example "Solución ejercicio 10"

    ```javascript
    const prompt = require("prompt-sync")();

    // Solicitar números al usuario
    let num1 = parseFloat(prompt("Introduce el primer número: "));
    let num2 = parseFloat(prompt("Introduce el segundo número: "));

    // Realizar operaciones matemáticas básicas
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    // Mostrar los resultados
    console.log("Resultados:");
    console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicación: " + multiplicacion);
    console.log("División: " + division);
    ```

---

# **Bloque 1.3: Estructuras Básicas de Control**

---

## **1.3.1 Estructura If-Else**

### **¿Qué es un if-else?**

La estructura **if-else** permite tomar decisiones en función de una condición. Evalúa si una expresión lógica es `true` o `false` y ejecuta el bloque correspondiente.

### **Sintaxis de if-else**

    ```javascript
    if (condición) {
        // Código a ejecutar si la condición es verdadera
    } else {
        // Código a ejecutar si la condición es falsa
    }
    ```

### **Ejemplo**

En el siguiente ejemplo, se evalúa si una persona es mayor de edad:

    ```javascript
    let edad = 18;

    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
    ```

---

### **Ejercicios de If-Else**

#### **Ejercicio 1: Comparar números**
- Solicita al usuario dos números y determina cuál es mayor, menor o si son iguales.

??? example "Solución"

    ```javascript
    const prompt = require("prompt-sync")();

    let num1 = parseFloat(prompt("Introduce el primer número: "));
    let num2 = parseFloat(prompt("Introduce el segundo número: "));

    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} es menor que ${num2}`);
    } else {
        console.log(`${num1} y ${num2} son iguales`);
    }
    ```

---

#### **Ejercicio 2: Número positivo o negativo**
- Solicita un número y determina si es positivo, negativo o cero.

??? example "Solución"

    ```javascript
    const prompt = require("prompt-sync")();

    let numero = parseFloat(prompt("Introduce un número: "));

    if (numero > 0) {
        console.log("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }
    ```

---

#### **Ejercicio 3: Verificación de edad**
- Solicita al usuario su edad y determina si es mayor o menor de edad.

??? example "Solución"

    ```javascript
    const prompt = require("prompt-sync")();

    let edad = parseInt(prompt("Introduce tu edad: "));

    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
    ```

---

### **1.3.2 If-Else Anidado**

#### **¿Qué es un if-else anidado?**
Es una estructura que permite evaluar múltiples condiciones utilizando un **if-else** dentro de otro **if-else**.

#### **Sintaxis de if-else anidado**
    ```javascript
    if (condición1) {
        // Código si condición1 es verdadera
    } else {
        if (condición2) {
            // Código si condición2 es verdadera
        } else {
            // Código si ninguna condición es verdadera
        }
    }
    ```

#### **Ejemplo**

    En este ejemplo, se evalúa la calificación de un estudiante y se asigna una letra según el rango:

    ```javascript
    let nota = 85;

    if (nota >= 90) {
        console.log("Tu calificación es A");
    } else {
        if (nota >= 80) {
            console.log("Tu calificación es B");
        } else {
            console.log("Tu calificación es C");
        }
    }
    ```

---

### **Ejercicios de If-Else Anidado**

#### **Ejercicio 1: Calificación de notas**
- Solicita al usuario una calificación numérica y asigna una letra (A, B o C) según el siguiente criterio:
  - `A`: 90 o más.
  - `B`: Entre 80 y 89.
  - `C`: Menos de 80.

??? example "Solución"

    ```javascript
    const prompt = require("prompt-sync")();

    let nota = parseInt(prompt("Introduce tu calificación: "));

    if (nota >= 90) {
        console.log("Tu calificación es A");
    } else {
        if (nota >= 80) {
            console.log("Tu calificación es B");
        } else {
            console.log("Tu calificación es C");
        }
    }
    ```

---

### **1.3.3 Bucles**

#### **For**
El bucle `for` se utiliza cuando sabemos cuántas veces queremos repetir una acción.

##### **Sintaxis**
    ```javascript
    for (inicialización; condición; actualización) {
        // Código a ejecutar en cada iteración
    }
    ```

##### **Ejemplo**

En este ejemplo, se muestra en la consola los números del 1 al 5:

    ```javascript
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    ```

---

#### **While**
El bucle `while` se usa cuando no sabemos cuántas veces se repetirá la acción, pero sabemos la condición.

##### **Sintaxis**
    ```javascript
    while (condición) {
        // Código a ejecutar mientras la condición sea verdadera
    }
    ```

##### **Ejemplo**
En este ejemplo, se muestra en la consola los números del 1 al 5:

    ```javascript
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
    ```

---

#### **Do-While**

El bucle `do-while` ejecuta el bloque al menos una vez antes de comprobar la condición.

##### **Sintaxis**
    ```javascript
    do {
        // Código a ejecutar
    } while (condición);
    ```

##### **Ejemplo**
En este ejemplo, se muestra en la consola los números del 1 al 5:

    ```javascript
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
    ```

---

### **Ejercicios de Bucles**

##### **Ejercicio 1: Contar hasta 10**
- Usa un bucle `for` para contar del 1 al 10 y mostrar los números en la consola.

??? example "Solución"

    ```javascript
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    ```

---

##### **Ejercicio 2: Suma de números del 1 al 100**
- Usa un bucle `while` para sumar los números del 1 al 100.

??? example "Solución"

    ```javascript
    let i = 1;
    let suma = 0;

    while (i <= 100) {
        suma += i;
        i++;
    }

    console.log("La suma de los números del 1 al 100 es:", suma);
    ```

---

##### **Ejercicio 3: Mostrar números impares**
- Usa un bucle `do-while` para mostrar los números impares entre 1 y 20.

??? example "Solución"

    ```javascript
    let i = 1;

    do {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    } while (i <= 20);
    ```

---

### **For Anidado**

#### **¿Qué es un for anidado?**
Un bucle `for` anidado se utiliza para ejecutar iteraciones dentro de iteraciones, como al recorrer matrices bidimensionales.

##### **Ejemplo**
Este ejemplo muestra una tabla de multiplicar del 1 al 10:

    ```javascript
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(`i: ${i}, j: ${j}`);
        }
    }
    ```

### **Ejercicios Extra de Bucles**

#### **Ejercicio 1: Tabla de multiplicar**
- Crea un programa que solicite al usuario un número y luego muestre su tabla de multiplicar del 1 al 10.

??? example "Solución"

    ```javascript
    const prompt = require("prompt-sync")();

    let numero = parseInt(prompt("Introduce un número para generar su tabla de multiplicar: "));

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    ```

---

#### **Ejercicio 2: Tablas de multiplicar entre dos números**
- Crea un programa que solicite al usuario dos números y luego escriba las tablas de multiplicar de todos los números comprendidos entre ellos (inclusive).

??? example "Solución"

    ```javascript
    const prompt = require("prompt-sync")();

    let inicio = parseInt(prompt("Introduce el primer número: "));
    let fin = parseInt(prompt("Introduce el segundo número: "));

    if (inicio > fin) {
        console.log("El primer número debe ser menor o igual que el segundo.");
    } else {
        for (let numero = inicio; numero <= fin; numero++) {
            console.log(`\nTabla de multiplicar del ${numero}:`);
            for (let i = 1; i <= 10; i++) {
                console.log(`${numero} x ${i} = ${numero * i}`);
            }
        }
    }
    ```

---
## **1.4 Uso Básico de Librerías Integradas**

JavaScript incluye bibliotecas integradas que proporcionan funcionalidades avanzadas sin necesidad de importar módulos externos. Este apartado cubre el uso básico de **Math** y funciones comunes para manipular enteros, decimales y cadenas.

---

### **1.4.1 Librería Math**

#### **Funciones Comunes de Math**

1. **Redondeo**

    - `Math.floor(x)`: Redondea hacia abajo.
    - `Math.ceil(x)`: Redondea hacia arriba.
    - `Math.round(x)`: Redondea al número entero más cercano.

    ```javascript
    console.log(Math.floor(4.7)); // 4
    console.log(Math.ceil(4.2)); // 5
    console.log(Math.round(4.5)); // 5
    ```

2. **Aleatorio**

    - `Math.random()`: Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).

    ```javascript
    console.log(Math.random()); // Ejemplo: 0.5487
    ```

3. **Potencias y Raíces**

    - `Math.pow(base, exponente)`: Calcula potencias.
    - `Math.sqrt(x)`: Calcula la raíz cuadrada.

    ```javascript
    console.log(Math.pow(2, 3)); // 8
    console.log(Math.sqrt(16)); // 4
    ```

4. **Valor Absoluto**

    - `Math.abs(x)`: Devuelve el valor absoluto de un número.

    ```javascript
    console.log(Math.abs(-5)); // 5
    ```

5. **Mínimos y Máximos**

    - `Math.min(a, b, c, ...)`: Devuelve el menor valor.
    - `Math.max(a, b, c, ...)`: Devuelve el mayor valor.

    ```javascript
    console.log(Math.min(5, 10, 2)); // 2
    console.log(Math.max(5, 10, 2)); // 10
    ```

---

### **1.4.2 Funciones Básicas para Enteros y Decimales**

#### **1. Conversión de Enteros y Decimales**

- `parseInt(cadena, base)`: Convierte una cadena a un entero.
- `parseFloat(cadena)`: Convierte una cadena a un número decimal.

    ```javascript
    console.log(parseInt("42")); // 42
    console.log(parseFloat("3.14")); // 3.14
    ```

#### **2. Fijar Decimales**

- `numero.toFixed(n)`: Devuelve una cadena con el número formateado a `n` decimales.

    ```javascript
    let num = 3.14159;
    console.log(num.toFixed(2)); // "3.14"
    ```

---

### **1.4.3 Funciones para Cadenas**

#### **1. Longitud de una Cadena**

- `cadena.length`: Devuelve el número de caracteres en la cadena.

    ```javascript
    let texto = "Hola, mundo";
    console.log(texto.length); // 11
    ```

#### **2. Cambiar Mayúsculas y Minúsculas**

- `cadena.toUpperCase()`: Convierte a mayúsculas.
- `cadena.toLowerCase()`: Convierte a minúsculas.

    ```javascript
    let texto = "JavaScript";
    console.log(texto.toUpperCase()); // "JAVASCRIPT"
    console.log(texto.toLowerCase()); // "javascript"
    ```

#### **3. Cortar una Cadena**

- `cadena.substring(inicio, fin)`: Extrae caracteres desde `inicio` hasta `fin` (no incluido).

    ```javascript
    let texto = "Hola, mundo";
    console.log(texto.substring(0, 4)); // "Hola"
    ```

#### **4. Reemplazar Texto**

- `cadena.replace(buscar, reemplazo)`: Reemplaza la primera aparición de un texto.

    ```javascript
    let texto = "Hola, mundo";
    console.log(texto.replace("mundo", "JavaScript")); // "Hola, JavaScript"
    ```

#### **5. Dividir una Cadena**

- `cadena.split(separador)`: Divide una cadena en un arreglo según el separador.

    ```javascript
    let texto = "manzana,banana,naranja";
    console.log(texto.split(",")); // ["manzana", "banana", "naranja"]
    ```

---

### **Ejercicios**

#### **Ejercicio 1: Redondeo**

- Solicita al usuario un número decimal y muestra:
     - Su valor redondeado hacia abajo, hacia arriba y al más cercano.

??? example "Solución ejercicio 1"

    ```javascript
    const prompt = require("prompt-sync")();

    let numero = parseFloat(prompt("Introduce un número decimal: "));

    console.log("Redondeado hacia abajo:", Math.floor(numero));
    console.log("Redondeado hacia arriba:", Math.ceil(numero));
    console.log("Redondeado al más cercano:", Math.round(numero));
    ```
    
---

#### **Ejercicio 2: Número aleatorio**

- Genera un número aleatorio entre 1 y 100 y muéstralo en la consola.

??? example "Solución ejercicio 2"

    ```javascript
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    console.log("Número aleatorio entre 1 y 100:", aleatorio);
    ```
    
---

#### **Ejercicio 3: Conversión de número**

- Solicita al usuario un número en formato de texto (por ejemplo, "123.45").
- Convierte el número a formato entero y decimal.
- Muestra los resultados en la consola.

??? example "Solución ejercicio 3"

    ```javascript
    const prompt = require("prompt-sync")();

    let texto = prompt("Introduce un número (como texto): ");

    console.log("Como entero:", parseInt(texto));
    console.log("Como decimal:", parseFloat(texto));
    ```
    
---

#### **Ejercicio 4: Manipulación de cadenas**

- Solicita al usuario una frase.
- Muestra:
     - La frase en mayúsculas.
     - La frase en minúsculas.
     - El número de caracteres en la frase.

??? example "Solución ejercicio 4"

    ```javascript
    const prompt = require("prompt-sync")();

    let frase = prompt("Introduce una frase: ");

    console.log("En mayúsculas:", frase.toUpperCase());
    console.log("En minúsculas:", frase.toLowerCase());
    console.log("Número de caracteres:", frase.length);
    ```




