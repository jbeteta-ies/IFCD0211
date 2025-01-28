---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---
# **Unidad 1: Uso Avanzado de Números, Cadenas y Fechas**

## **1.5 Uso Avanzado de Números, Cadenas y Fechas**

En este tema exploraremos las clases y bibliotecas integradas de JavaScript para trabajar con números, cadenas y fechas, sus métodos y propiedades principales, y cómo aplicar estas herramientas en escenarios prácticos.

### **1.5.1 Clase `Number`**

La clase `Number` en JavaScript representa valores numéricos y proporciona una serie de propiedades y métodos útiles para trabajar con números.

#### **Propiedades de la Clase `Number`**

1. **`Number.MAX_VALUE`**: El número positivo más grande que se puede representar en JavaScript.
    ```javascript
    console.log(Number.MAX_VALUE); // Ejemplo: 1.7976931348623157e+308
    ```

2. **`Number.MIN_VALUE`**: El número positivo más pequeño mayor que 0.
    ```javascript
    console.log(Number.MIN_VALUE); // Ejemplo: 5e-324
    ```

3. **`Number.POSITIVE_INFINITY`**: Representa el infinito positivo.
    ```javascript
    console.log(Number.POSITIVE_INFINITY); // Infinity
    ```

4. **`Number.NEGATIVE_INFINITY`**: Representa el infinito negativo.
    ```javascript
    console.log(Number.NEGATIVE_INFINITY); // -Infinity
    ```

5. **`Number.NaN`**: Representa un valor que no es un número (Not-a-Number).
    ```javascript
    console.log(Number.NaN); // NaN
    ```

??? info "Nota"
    El valor `NaN` suele aparecer como resultado de operaciones inválidas, como dividir 0 entre 0.

#### **Métodos de la Clase `Number`**

1. **`Number.isNaN(valor)`**: Comprueba si un valor es `NaN`.
    ```javascript
    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isNaN(10));  // false
    ```

2. **`Number.isInteger(valor)`**: Determina si un valor es un número entero.
    ```javascript
    console.log(Number.isInteger(42));    // true
    console.log(Number.isInteger(42.5)); // false
    ```

3. **`toFixed(decimales)`**: Redondea un número al número de decimales especificado y lo convierte en una cadena.
    ```javascript
    let num = 3.14159;
    console.log(num.toFixed(2)); // "3.14"
    ```

4. **`toString(base)`**: Convierte un número en una cadena con la base especificada (binaria, octal, decimal, hexadecimal, etc.).
    ```javascript
    let num = 255;
    console.log(num.toString(16)); // "ff" (hexadecimal)
    console.log(num.toString(2));  // "11111111" (binario)
    ```

5. **`parseInt(cadena, base)`**: Convierte una cadena en un número entero según la base indicada.
    ```javascript
    console.log(parseInt("1010", 2)); // 10 (binario a decimal)
    console.log(parseInt("FF", 16)); // 255 (hexadecimal a decimal)
    ```

6. **`parseFloat(cadena)`**: Convierte una cadena en un número decimal.
    ```javascript
    console.log(parseFloat("3.14")); // 3.14
    console.log(parseFloat("123abc")); // 123
    ```

#### **Ejemplo Completo**

??? example "Ejemplo de uso de la Clase `Number`"
    ```javascript
    let valor = 123.456;

    console.log("Valor original:", valor);
    console.log("Redondeado a 2 decimales:", valor.toFixed(2));
    console.log("¿Es un entero?:", Number.isInteger(valor));
    console.log("Máximo valor representable:", Number.MAX_VALUE);
    console.log("Valor en hexadecimal:", valor.toString(16));
    console.log("Número desde cadena:", parseFloat("123.45"));
    ```

---

### **Ejercicios: Clase `Number`**

!!! question "Ejercicio 1: Propiedades y Métodos de Number"
    - Declara un número y muestra:
        - Su valor redondeado a 2 decimales.
        - Su representación en binario y hexadecimal.
        - Si es un entero o no.

    ??? example "Solución"
        ```javascript
        let numero = 42.789;
        console.log("Redondeado a 2 decimales:", numero.toFixed(2));
        console.log("En binario:", numero.toString(2));
        console.log("En hexadecimal:", numero.toString(16));
        console.log("¿Es un entero?:", Number.isInteger(numero));
        ```

!!! question "Ejercicio 2: Conversión de bases"
    - Escribe un programa que convierta un número en distintas bases: binario, octal y hexadecimal.

    ??? example "Solución"
        ```javascript
        let numero = 255;
        console.log("Binario:", numero.toString(2));
        console.log("Octal:", numero.toString(8));
        console.log("Hexadecimal:", numero.toString(16));
        ```

!!! question "Ejercicio 3: Validar valores numéricos"
    - Dado un valor, verifica si es un número válido o `NaN`.

    ??? example "Solución"
        ```javascript
        let valor1 = NaN;
        let valor2 = 42;
        console.log("¿Es NaN (valor1)?:", Number.isNaN(valor1));
        console.log("¿Es NaN (valor2)?:", Number.isNaN(valor2));
        ```

!!! question "Ejercicio 4: Convertir binario a decimal"
    - Crea una función que reciba una cadena con un número binario y devuelva su valor en decimal.

    ??? example "Solución"
        ```javascript
        function binarioADecimal(binario) {
            return parseInt(binario, 2);
        }
        console.log("Binario 1010 a decimal:", binarioADecimal("1010"));
        ```

!!! question "Ejercicio 5: Cálculo de porcentaje"
    - Calcula el porcentaje de un valor usando números decimales. Por ejemplo, el 15% de 200.

    ??? example "Solución"
        ```javascript
        let total = 200;
        let porcentaje = 15;
        let resultado = (total * porcentaje) / 100;
        console.log("El 15% de 200 es:", resultado);
        ```

---

### **1.5.2 Biblioteca `Math`**

La biblioteca `Math` proporciona una serie de constantes y funciones para realizar operaciones matemáticas comunes.

#### **Constantes de `Math`**

1. **`Math.PI`**: Representa el valor de π.
    ```javascript
    console.log(Math.PI); // 3.141592653589793
    ```
2. **`Math.E`**: Base de los logaritmos naturales.
    ```javascript
    console.log(Math.E); // 2.718281828459045
    ```
3. **`Math.LN10`**: Logaritmo natural de 10.
    ```javascript
    console.log(Math.LN10); // 2.302585092994046
    ```

#### **Métodos de `Math`**

1. **`Math.sqrt(x)`**: Calcula la raíz cuadrada de un número.
    ```javascript
    console.log(Math.sqrt(16)); // 4
    ```
2. **`Math.pow(base, exponente)`**: Calcula una potencia.
    ```javascript
    console.log(Math.pow(2, 3)); // 8
    ```
3. **`Math.abs(x)`**: Devuelve el valor absoluto de un número.
    ```javascript
    console.log(Math.abs(-5)); // 5
    ```
4. **`Math.round(x)`**: Redondea un número al entero más cercano.
    ```javascript
    console.log(Math.round(4.5)); // 5
    ```
5. **`Math.floor(x)` y `Math.ceil(x)`**:
    - `Math.floor(x)`: Redondea hacia abajo.
    - `Math.ceil(x)`: Redondea hacia arriba.
    ```javascript
    console.log(Math.floor(4.7)); // 4
    console.log(Math.ceil(4.2));  // 5
    ```
6. **`Math.random()`**: Genera un número aleatorio entre 0 y 1 (exclusivo).
    ```javascript
    console.log(Math.random()); // Ejemplo: 0.5487
    ```
7. **`Math.min(...valores)` y `Math.max(...valores)`**:
    - `Math.min`: Devuelve el menor valor.
    - `Math.max`: Devuelve el mayor valor.
    ```javascript
    console.log(Math.min(3, 7, 2, 9)); // 2
    console.log(Math.max(3, 7, 2, 9)); // 9
    ```

#### **Ejemplo Completo**

??? example "Ejemplo con la biblioteca Math"
    ```javascript
    let base = 5;
    let exponente = 3;

    console.log("Potencia:", Math.pow(base, exponente));
    console.log("Raíz cuadrada de 25:", Math.sqrt(25));
    console.log("Número aleatorio entre 0 y 1:", Math.random());
    console.log("Redondeado hacia abajo (4.7):", Math.floor(4.7));
    console.log("Redondeado hacia arriba (4.2):", Math.ceil(4.2));
    ```

---

### **Ejercicios: Biblioteca `Math`**

!!! question "Ejercicio 1: Generar número aleatorio"
    - Escribe un programa que genere un número aleatorio entre 1 y 100.

    ??? example "Solución"
        ```javascript
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        console.log("Número aleatorio entre 1 y 100:", aleatorio);
        ```

!!! question "Ejercicio 2: Redondeo de números"
    - Solicita al usuario un número decimal y muestra:
        - Su valor redondeado hacia abajo.
        - Su valor redondeado hacia arriba.
        - Su valor redondeado al entero más cercano.

    ??? example "Solución"
        ```javascript
        const prompt = require("prompt-sync")();

        let numero = parseFloat(prompt("Introduce un número decimal: "));

        console.log("Redondeado hacia abajo:", Math.floor(numero));
        console.log("Redondeado hacia arriba:", Math.ceil(numero));
        console.log("Redondeado al más cercano:", Math.round(numero));
        ```

!!! question "Ejercicio 3: Calcular área de un círculo"
    - Solicita al usuario el radio de un círculo y calcula:
        - Su área usando la fórmula: `Área = π * radio^2`.

    ??? example "Solución"
        ```javascript
        const prompt = require("prompt-sync")();

        let radio = parseFloat(prompt("Introduce el radio del círculo: "));
        let area = Math.PI * Math.pow(radio, 2);

        console.log("El área del círculo es:", area);
        ```

!!! question "Ejercicio 4: Valor absoluto"
    - Solicita un número al usuario y muestra su valor absoluto.

    ??? example "Solución"
        ```javascript
        const prompt = require("prompt-sync")();

        let numero = parseFloat(prompt("Introduce un número: "));
        console.log("El valor absoluto es:", Math.abs(numero));
        ```

!!! question "Ejercicio 5: Comparar números"
    - Solicita al usuario tres números y muestra:
        - El menor de los tres.
        - El mayor de los tres.

    ??? example "Solución"
        ```javascript
        const prompt = require("prompt-sync")();

        let num1 = parseFloat(prompt("Introduce el primer número: "));
        let num2 = parseFloat(prompt("Introduce el segundo número: "));
        let num3 = parseFloat(prompt("Introduce el tercer número: "));

        console.log("El menor número es:", Math.min(num1, num2, num3));
        console.log("El mayor número es:", Math.max(num1, num2, num3));
        ```

---

---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Números, Fechas, Cadenas
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# **Unidad 1: Uso Avanzado de Números, Cadenas y Fechas**

---

## **1.5 Uso Avanzado de Números, Cadenas y Fechas**

En este tema exploraremos las clases y bibliotecas integradas de JavaScript para trabajar con números, cadenas y fechas, sus métodos y propiedades principales, y cómo aplicar estas herramientas en escenarios prácticos.

### **1.5.1 Clase `Number`**

[Contenido actual de la sección 1.5.1]

---

### **1.5.2 Biblioteca `Math`**

[Contenido actual de la sección 1.5.2]

---

### **1.5.3 Clase `String`**

La clase `String` se utiliza para trabajar con cadenas de texto en JavaScript. Proporciona numerosas propiedades y métodos que facilitan la manipulación de texto.

#### **Propiedades de la Clase `String`**

1. **`length`**: Devuelve el número de caracteres en una cadena.
    ```javascript linenums=1
    let texto = "Hola, mundo";
    console.log(texto.length); // 11
    ```

#### **Métodos Comunes de `String`**

1. **`toUpperCase()`** y **`toLowerCase()`**:
   - Convierte una cadena a mayúsculas o minúsculas respectivamente.
    ```javascript linenums=1
    let texto = "JavaScript";
    console.log(texto.toUpperCase()); // "JAVASCRIPT"
    console.log(texto.toLowerCase()); // "javascript"
    ```

2. **`charAt(pos)`**: Devuelve el carácter en una posición específica.
    ```javascript linenums=1
    let texto = "Hola";
    console.log(texto.charAt(1)); // "o"
    ```

3. **`includes(subcadena)`**: Verifica si una subcadena está presente en la cadena.
    ```javascript linenums=1
    let texto = "Hola, mundo";
    console.log(texto.includes("mundo")); // true
    ```

4. **`indexOf(subcadena)`**: Devuelve la posición de la primera aparición de una subcadena.
    ```javascript linenums=1
    let texto = "Hola, mundo";
    console.log(texto.indexOf("mundo")); // 6
    ```

5. **`slice(inicio, fin)`**: Extrae una sección de la cadena.
    ```javascript linenums=1
    let texto = "Hola, mundo";
    console.log(texto.slice(0, 4)); // "Hola"
    ```

6. **`replace(buscar, reemplazo)`**: Reemplaza una subcadena por otra.
    ```javascript linenums=1
    let texto = "El cielo es azul";
    console.log(texto.replace("azul", "rojo")); // "El cielo es rojo"
    ```

7. **`split(separador)`**: Divide una cadena en un array según un separador.
    ```javascript linenums=1
    let texto = "manzana,banana,naranja";
    console.log(texto.split(",")); // ["manzana", "banana", "naranja"]
    ```

8. **`trim()`**: Elimina espacios en blanco al inicio y al final de una cadena.
    ```javascript linenums=1
    let texto = "   Hola   ";
    console.log(texto.trim()); // "Hola"
    ```

#### **Ejemplos Completos**

??? example "Ejemplo con la Clase `String`"
    ```javascript linenums=1
    let frase = "  Aprende JavaScript, es genial!  ";

    console.log("Longitud:", frase.length);
    console.log("En mayúsculas:", frase.toUpperCase());
    console.log("Primera palabra:", frase.slice(2, 9));
    console.log("¿Incluye 'genial'?:", frase.includes("genial"));
    console.log("Sin espacios alrededor:", frase.trim());
    ```

---

!!! note "Trocear una cadena por espacios"
    Dividir texto por espacios" 
        - Declara una cadena con el texto "nombre apellido1 apellido2". 
        - Muestra cada parte del texto (nombre, apellido1, apellido2) en líneas separadas sin utilizar arrays.

    ??? example "Otro ejemplo de la case `Sttring`"


        ```javascript linenums=1 title="Dividir texto por espacios"
        const texto = "nombre apellido1 apellido2";

        let inicio = 0;
        let espacio = texto.indexOf(" ");

        while (espacio !== -1) {
            console.log(texto.slice(inicio, espacio));
            inicio = espacio + 1;
            espacio = texto.indexOf(" ", inicio);
        }

        // Imprime la última parte de la cadena
        console.log(texto.slice(inicio));
        ```

### **Ejercicios: Clase `String`**

!!! question "Ejercicio 1: Manipulación básica de cadenas"
    - Declara una cadena con el texto: `"Bienvenido a JavaScript"`.
    - Convierte todo el texto a mayúsculas.
    - Extrae la palabra `"JavaScript"`.
    - Reemplaza la palabra `"Bienvenido"` por `"Hola"`.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1
        let texto = "Bienvenido a JavaScript";

        console.log("En mayúsculas:", texto.toUpperCase());
        console.log("Extraer 'JavaScript':", texto.slice(13));
        console.log("Reemplazar 'Bienvenido':", texto.replace("Bienvenido", "Hola"));
        ```

!!! question "Ejercicio 2: Contar palabras"
    - Escribe un programa que cuente el número de palabras en una cadena ingresada por el usuario.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1
        const prompt = require("prompt-sync")();

        let frase = prompt("Introduce una frase: ");
        let palabras = frase.trim().split(" ").length;

        console.log("Número de palabras:", palabras);
        ```

!!! question "Ejercicio 3: Verificar contenido"
    - Solicita al usuario una frase y verifica si contiene la palabra `"JavaScript"`.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1
        const prompt = require("prompt-sync")();

        let frase = prompt("Introduce una frase: ");
        console.log("¿Contiene 'JavaScript'?:", frase.includes("JavaScript"));
        ```

!!! question "Ejercicio 4: Formatear una lista"
    - Dada una cadena con elementos separados por comas, conviértela en una lista con viñetas.
    
    ??? example "Solución del ejercicio"
        ```javascript linenums=1
        let lista = "manzana,banana,naranja";
        let elementos = lista.split(",");

        console.log("Lista con viñetas:");
        elementos.forEach(item => console.log("-", item));
        ```

!!! question "Ejercicio 5: Eliminar espacios"
    - Solicita al usuario una frase y elimina todos los espacios en blanco.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1
        const prompt = require("prompt-sync")();

        let frase = prompt("Introduce una frase: ");
        console.log("Sin espacios:", frase.replace(/\s/g, ""));
        ```

---

---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Números, Fechas, Cadenas
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# **Unidad 1: Uso Avanzado de Números, Cadenas y Fechas**

---

## **1.5 Uso Avanzado de Números, Cadenas y Fechas**

En este tema exploraremos las clases y bibliotecas integradas de JavaScript para trabajar con números, cadenas y fechas, sus métodos y propiedades principales, y cómo aplicar estas herramientas en escenarios prácticos.

### **1.5.1 Clase `Number`**

[Contenido actual de la sección 1.5.1]

---

### **1.5.2 Biblioteca `Math`**

[Contenido actual de la sección 1.5.2]

---

### **1.5.3 Clase `String`**

[Contenido actual de la sección 1.5.3]

---

### **1.5.4 Clase `Date`**

La clase `Date` en JavaScript permite trabajar con fechas y horas, ofreciendo métodos para obtener, establecer y manipular valores temporales.

#### **Creación de Fechas**

1. **Fecha actual:**
    ```javascript linenums=1
    const ahora = new Date();
    console.log("Fecha y hora actuales:", ahora);
    ```

2. **Fecha específica:**
    ```javascript linenums=1
    const fechaEspecifica = new Date(2025, 0, 20); // Año, mes (0-indexado), día
    console.log("Fecha específica:", fechaEspecifica);
    ```

3. **Desde una cadena:**
    ```javascript linenums=1
    const fechaCadena = new Date("2025-01-20T15:30:00");
    console.log("Fecha desde cadena:", fechaCadena);
    ```

#### **Métodos Comunes de `Date`**

1. **`getFullYear()`**: Obtiene el año.
    ```javascript linenums=1
    console.log(ahora.getFullYear()); // Ejemplo: 2025
    ```

2. **`getMonth()`**: Obtiene el mes (0-indexado).
    ```javascript linenums=1
    console.log(ahora.getMonth()); // Ejemplo: 0 para enero
    ```

3. **`getDate()`**: Obtiene el día del mes.
    ```javascript linenums=1
    console.log(ahora.getDate()); // Ejemplo: 20
    ```

4. **`getDay()`**: Obtiene el día de la semana (0 es domingo).
    ```javascript linenums=1
    console.log(ahora.getDay()); // Ejemplo: 1 para lunes
    ```

5. **`getHours()`**, **`getMinutes()`**, **`getSeconds()`**: Obtienen la hora, minutos y segundos.
    ```javascript linenums=1
    console.log(ahora.getHours(), ahora.getMinutes(), ahora.getSeconds());
    ```

6. **`toLocaleDateString()`**: Formatea la fecha en el formato local.
    ```javascript linenums=1
    console.log(ahora.toLocaleDateString()); // Ejemplo: "20/01/2025"
    ```

#### **Comparar Fechas**

Puedes comparar fechas usando operadores como `<`, `>`, `<=`, `>=`.

```javascript linenums=1
const fecha1 = new Date("2025-01-20");
const fecha2 = new Date("2025-01-25");

console.log("¿Fecha1 es anterior a Fecha2?:", fecha1 < fecha2); // true
console.log("¿Son iguales?:", fecha1.getTime() === fecha2.getTime()); // false
```

#### **Ejemplo Completo**

??? example "Ejemplo con la Clase `Date`"
    ```javascript linenums=1
    const ahora = new Date();

    console.log("Fecha y hora actuales:", ahora);
    console.log("Año:", ahora.getFullYear());
    console.log("Mes:", ahora.getMonth() + 1); // Se suma 1 porque es 0-indexado
    console.log("Día del mes:", ahora.getDate());
    console.log("Hora actual:", ahora.getHours(), ":", ahora.getMinutes());
    console.log("Formato local:", ahora.toLocaleDateString());
    ```

---

### **Ejercicios: Clase `Date`**

!!! question "Ejercicio 1: Obtener fecha y hora actuales"
    - Crea un programa que muestre:
        - La fecha actual en formato local.
        - La hora actual (hora:minutos).

    ??? example "Solución del ejercicio"
        ```javascript linenums=1 title="Fecha y hora actuales"
        const ahora = new Date();

        console.log("Fecha actual:", ahora.toLocaleDateString());
        console.log("Hora actual:", ahora.getHours() + ":" + ahora.getMinutes());
        ```

!!! question "Ejercicio 2: Comparar dos fechas"
    - Solicita al usuario dos fechas en formato `YYYY-MM-DD`.
    - Compara ambas fechas e indica cuál es anterior o si son iguales.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1 title="Comparar fechas"
        const prompt = require("prompt-sync")();

        let fecha1 = new Date(prompt("Introduce la primera fecha (YYYY-MM-DD): "));
        let fecha2 = new Date(prompt("Introduce la segunda fecha (YYYY-MM-DD): "));

        if (fecha1 < fecha2) {
            console.log("La primera fecha es anterior.");
        } else if (fecha1 > fecha2) {
            console.log("La segunda fecha es anterior.");
        } else {
            console.log("Ambas fechas son iguales.");
        }
        ```

!!! question "Ejercicio 3: Calcular días entre dos fechas"
    - Solicita al usuario dos fechas en formato `YYYY-MM-DD`.
    - Calcula la diferencia en días entre ambas fechas.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1 title="Días entre fechas"
        const prompt = require("prompt-sync")();

        let fecha1 = new Date(prompt("Introduce la primera fecha (YYYY-MM-DD): "));
        let fecha2 = new Date(prompt("Introduce la segunda fecha (YYYY-MM-DD): "));

        let diferencia = Math.abs(fecha2 - fecha1); // Diferencia en milisegundos
        let dias = diferencia / (1000 * 60 * 60 * 24); // Convertir a días

        console.log("Diferencia en días:", dias);
        ```

!!! question "Ejercicio 4: Crear fecha a partir de valores"
    - Solicita al usuario que introduzca el año, mes y día por separado.
    - Crea un objeto `Date` con esos valores y muestra la fecha en formato local.

    ??? example "Solución del ejercicio"
        ```javascript linenums=1 title="Crear fecha a partir de valores"
        const prompt = require("prompt-sync")();

        let anio = parseInt(prompt("Introduce el año: "));
        let mes = parseInt(prompt("Introduce el mes (1-12): ")) - 1; // Restar 1 porque es 0-indexado
        let dia = parseInt(prompt("Introduce el día: "));

        let fecha = new Date(anio, mes, dia);
        console.log("Fecha creada:", fecha.toLocaleDateString());
        ```

---

