---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# Unidad 1: Configuración del Entorno y Fundamentos de JavaScript

## **1.2 Variables, Tipos de Datos y Operadores**

!!! note "Objetivos"
    1. Comprender cómo declarar y usar variables en JavaScript.
    2. Conocer los diferentes tipos de datos y aprender a trabajar con operadores básicos para realizar operaciones.


#### **1.2.1 Declaración de Variables**

**¿Qué es una variable?**  

Una variable es un espacio en la memoria que se utiliza para almacenar datos que pueden ser usados y manipulados en un programa.

**Formas de declarar variables en JavaScript:**

1. **`let`:** Permite declarar variables que pueden ser modificadas.
    ```javascript linenums="1"
    let nombre = "Juan";
    nombre = "Ana"; // Esto es válido
    ```
2. **`const`:** Se utiliza para declarar constantes, es decir, valores que no cambian.
    ```javascript linenums="1"
    const pi = 3.1416;
    // pi = 3; // Esto generará un error
    ```
3. **`var`:** Declaración más antigua. Evita su uso en favor de `let` y `const` debido a problemas de alcance.
    ```javascript linenums="1"
    var edad = 25;
    ```

!!! important "Buenas Prácticas"

    - Usa `const` siempre que el valor no cambie.
    - Usa `let` cuando necesites cambiar el valor de la variable.
    - Evita `var` para prevenir errores relacionados con el alcance.

---

#### **1.2.2 Tipos de Datos Primitivos**

JavaScript tiene los siguientes tipos de datos básicos:

1. **String (Cadenas):** Representa texto.
    ```javascript linenums="1"
    let mensaje = "Hola, mundo!";
    console.log(typeof mensaje); // "string"
    ```

2. **Number (Números):** Incluye enteros y decimales.
    ```javascript linenums="1"
    let entero = 10;
    let decimal = 3.14;
    ```

3. **Boolean (Booleanos):** Valores `true` o `false`.
    ```javascript linenums="1"
    let esActivo = true;
    let esMayor = 10 > 5; // true
    ```

4. **Undefined:** Indica que una variable ha sido declarada pero no tiene valor.
    ```javascript linenums="1"
    let indefinido;
    console.log(indefinido); // undefined
    ```

5. **Null:** Representa un valor intencionalmente vacío.
    ```javascript linenums="1"
    let vacio = null;
    ```

6. **Symbol (Símbolos):** Valores únicos e inmutables, utilizados principalmente en programación avanzada.
    ```javascript linenums="1"
    let id = Symbol("id");
    ```

7. **BigInt:** Representa números enteros muy grandes.
    ```javascript linenums="1"
    let numeroGrande = 1234567890123456789012345678901234567890n;
    ```

---

#### **1.2.3 Operadores Básicos**

- asignación: `=`
    ```javascript linenums="1"
    let nombre = "Juan";
    nombre = "Ana";
    console.log(nombre); // Ana
    ```
**Operadores Aritméticos:**

- Suma: `+`
    ```javascript linenums="1"
    let resultado = 5 + 3; // 8
    ```
- Resta: `-`
    ```javascript linenums="1"
    let resultado = 10 - 6; // 4
    ```
- Multiplicación: `*`
    ```javascript  linenums="1"
    let resultado = 4 * 2; // 8
    ```
- División: `/`
    ```javascript linenums="1"
    let resultado = 9 / 3; // 3
    ```
- Resto o módulo: `%`
    ```javascript linenums="1"
    let resto = 10 % 3; // 1
    ```
- Autoincremento: `++`
    ```javascript linenums="1"
    let contador = 0;
    contador++; // 1
    ```
- Autoincremento: `--`
    ```javascript linenums="1"
    let contador = 0;
    contador--; // -1
    ```
- Preincremento: `++variable`
    ```javascript linenums="1"
    let contador = 0;
    let resultado = ++contador; // 1
    ```
- Predecremento: `--variable`
    ```javascript linenums="1"
    let contador = 0;
    let resultado = --contador; // -1
    ```

**Operadores de Comparación:**

- Igualdad estricta: `===`
    ```javascript linenums="1"
    console.log(5 === "5"); // false
    ```
- Diferente: `!==`
    ```javascript  linenums="1"
    console.log(10 !== 5); // true
    ```
- Mayor que: `>`
    ```javascript linenums="1"
    console.log(7 > 3); // true
    ```
- Menor que: `<`
    ```javascript  linenums="1"
    console.log(2 < 5); // true
    ```

**Operadores Lógicos:**

- AND (`&&`): Devuelve `true` si ambos operandos son verdaderos.
    ```javascript linenums="1"
    console.log(true && false); // false
    ```
- OR (`||`): Devuelve `true` si al menos uno de los operandos es verdadero.
    ```javascript linenums="1"
    console.log(true || false); // true
    ```
- NOT (`!`): Invierte el valor lógico.
    ```javascript linenums="1"
    console.log(!true); // false
    ```

---

#### **1.2.4 Ejercicio Práctico**

!!! question  "Crea un programa que haga lo siguiente:"
    - Declara dos variables, `a` y `b`, con valores numéricos.
    - Calcula la suma, resta, multiplicación, división y módulo de ambas variables.   
    - Muestra los resultados en la consola.

    ??? example "Diagrama de flujo"
        ```mermaid 
        flowchart TD
            Start[Inicio -> Declarar variables a=10 y b=5] 
            Suma["`Mostrar suma: console.log(a + b);`"]
            Resta["`Mostrar resta: console.log(a - b);`"]
            Multiplicacion["`Mostrar multiplicación: console.log(a * b);`"]
            Division["`Mostrar división: console.log(a / b);`"]
            Modulo["`Mostrar módulo: console.log(a % b);`"]
            End[Fin]

            Start --> Suma --> Resta --> Multiplicacion --> Division --> Modulo --> End
        ```
   
    ??? example "Solución"
        ```javascript linenums="1" title="Operaciones matemáticas básicas"
            let a = 10;
            let b = 5;

            console.log("Suma:", a + b);
            console.log("Resta:", a - b);
            console.log("Multiplicación:", a * b);
            console.log("División:", a / b);
            console.log("Módulo:", a % b);
        ```


**Reto Adicional: Operaciones Matemáticas Avanzadas**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara dos variables, `num1` y `num2`, con valores numéricos.
    - Calcula la suma, resta, multiplicación, división y módulo de ambas variables, y guarda los resultados en variables independientes.
    - Muestra los resultados:
        - Primero, cada operación en una línea individual.
        - Luego, todos los resultados concatenados en una única línea.

    ??? example "Diagrama de flujo"
        ```mermaid
        flowchart TD
            Start[Inicio -> Declarar variables num1=10 y num2=5]
            CalculoSuma["suma = num1 + num2"]
            CalculoResta["resta = num1 - num2"]
            CalculoMultiplicacion["multiplicacion = num1 * num2"]
            CalculoDivision["division = num1 / num2"]
            CalculoModulo["modulo = num1 % num2"]
            MostrarResultadosInd["Mostrar resultados individuales"]
            MostrarResultadoConcat["`Mostrar concatenados:
                        console.log(Resultados: suma=${suma}, resta=${resta}, mult=${multiplicacion}, div=${division}, módulo=${modulo});`"]
            End[Fin]

            Start --> CalculoSuma --> CalculoResta --> CalculoMultiplicacion --> CalculoDivision --> CalculoModulo
            CalculoModulo --> MostrarResultadosInd --> MostrarResultadoConcat --> End
        ```

    ??? example "Solución"
        ```javascript linenums="1" title="Operaciones matemáticas avanzadas"
        let num1 = 10;
        let num2 = 5;

        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacion = num1 * num2;
        let division = num1 / num2;
        let modulo = num1 % num2;

        console.log("Suma:", suma);
        console.log("Resta:", resta);
        console.log("Multiplicación:", multiplicacion);
        console.log("División:", division);
        console.log("Módulo:", modulo);

        console.log(`Resultados: suma=${suma}, resta=${resta}, mult=${multiplicacion}, div=${division}, módulo=${modulo}`);
        ```

---

#### **Ejercicio 1: Suma, resta y multiplicación combinadas**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara tres variables, `a`, `b` y `c`, con valores numéricos.
    - Calcula la suma de `a` y `b`.
    - Multiplica el resultado de la suma por `c`.
    - Muestra los resultados.

    ??? example "Solución"
        ```javascript linenums="1" title="Suma, Resta y Multiplicación"
        let a = 5;
        let b = 3;
        let c = 2;

        let suma = a + b;
        let producto = suma * c;

        console.log("Suma:", suma);
        console.log("Producto:", producto);
        ```

---

#### **Ejercicio 2: Promedio de tres números**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara tres variables, `x`, `y` y `z`, con valores numéricos.
    - Calcula el promedio de estos números.
    - Muestra el resultado.

    ??? example "Solución"
        ```javascript linenums="1" title="Promedio de Tres Números"
        let x = 8;
        let y = 6;
        let z = 10;

        let promedio = (x + y + z) / 3;

        console.log("Promedio:", promedio);
        ```

---

#### **Ejercicio 3: Área de un rectángulo**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara dos variables `largo` y `ancho` con valores numéricos.
    - Calcula el área del rectángulo.
    - Muestra el resultado.

    ??? example "Solución"
        ```javascript linenums="1" title="Área de un Rectángulo"
        let largo = 7;
        let ancho = 4;

        let area = largo * ancho;

        console.log("Área del rectángulo:", area);
        ```

---

#### **Ejercicio 4: Perímetro y área de un círculo**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara una variable `radio` con un valor numérico.
    - Calcula el perímetro y el área del círculo.
    - Muestra ambos resultados.

    ??? example "Solución"
        ```javascript linenums="1" title="Círculo: Perímetro y Área"
        let radio = 5;

        let perimetro = 2 * Math.PI * radio;
        let area = Math.PI * radio * radio;

        console.log("Perímetro del círculo:", perimetro);
        console.log("Área del círculo:", area);
        ```

---

#### **Ejercicio 5: Cálculo del IVA**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara una variable `precio` con un valor numérico y otra `iva` con un porcentaje.
    - Calcula el importe del IVA y el precio total.
    - Muestra el IVA y el total.

    ??? example "Solución"
        ```javascript linenums="1" title="Cálculo del IVA"
        let precio = 100;
        let iva = 21;

        let importeIVA = (precio * iva) / 100;
        let precioTotal = precio + importeIVA;

        console.log("IVA:", importeIVA);
        console.log("Precio total:", precioTotal);
        ```

---

#### Explicación: Funciones de Manipulación de Cadenas en JavaScript

En esta sección aprenderemos algunas funciones básicas para manipular cadenas en JavaScript. Estas funciones te permitirán realizar tareas comunes como concatenar texto, convertir mayúsculas/minúsculas y mucho más.

1. **Concatenar cadenas:** 

    !!! info 
        - Combina dos o más cadenas en una sola utilizando el operador `+` o las plantillas de cadenas (template strings) con backticks (\`\`).
        - Ejemplo:
            ```javascript
            let nombre = "Juan";
            let apellido = "Pérez";
            console.log("tu nombre es: " + nombre + " " + apellido); // Juan Pérez
            console.log(`tu nombre es: ${nombre} ${apellido}`); // Juan Pérez
            ```

2. **Obtener la longitud de una cadena (`.length`):**

    !!! info 

        - Devuelve el número de caracteres de una cadena, incluidos los espacios.
        - Ejemplo:
            ```javascript
            let frase = "Hola, mundo";
            console.log(frase.length); // 11
            ```

3. **Convertir a mayúsculas (`.toUpperCase()`):**

    !!! info 
        - Convierte todos los caracteres de la cadena a mayúsculas.
        - Ejemplo:
            ```javascript
                let texto = "hola";
                console.log(texto.toUpperCase()); // HOLA
            ```

4. **Convertir a minúsculas (`.toLowerCase()`):**

    !!! info 
        - Convierte todos los caracteres de la cadena a minúsculas.
        - Ejemplo:
            ```javascript
            let texto = "HOLA";
            console.log(texto.toLowerCase()); // hola
            ```

5. **Extraer parte de una cadena (`.slice()`):**

    !!! info 
        - Devuelve una sección de la cadena especificando el índice de inicio y final.
        - Ejemplo:
            ```javascript
            let mensaje = "JavaScript";
            console.log(mensaje.slice(0, 4)); // Java
            ```

6. **Reemplazar texto en una cadena (`.replace()`):**

    !!! info 
        - Reemplaza una parte de la cadena con otra.
        - Ejemplo:
            ```javascript
            let frase = "El cielo es azul";
            console.log(frase.replace("azul", "verde")); // El cielo es verde
            ```

---

### Ejercicios de Manipulación de Cadenas

#### **Ejercicio 6: Concatenar cadenas**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara dos variables `nombre` y `edad`.
    - Crea una nueva variable concatenando ambas cadenas: `mi nombre es [nombre] y tengo [edad] años`.
    - Muestra la cadena completa.

    ??? example "Solución"
        ```javascript linenums="1" title="Concatenar Cadenas"
        let nombre = "Juan";
        let edad = 30;

        let cadenaCompleta = `Mi nombre es ${nombre} y tengo ${edad} años`;

        console.log("Resultado:", cadenaCompleta);
        ```

---

#### **Ejercicio 7: Longitud de una cadena**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara una variable `frase` con una oración: `Hola, ¿cómo estás?`.
    - Calcula la longitud de la cadena.
    - Muestra el resultado.

    ??? example "Solución"
        ```javascript linenums="1" title="Longitud de una Cadena"
        let frase = "Hola, ¿cómo estás?";

        let longitud = frase.length;

        console.log("Longitud de la cadena:", longitud);
        ```

---

#### **Ejercicio 8: Convertir a mayúsculas y minúsculas**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara una variable `texto`: `JavaScript es divertido`.
    - Convierte el texto a mayúsculas y a minúsculas.
    - Muestra ambos resultados.

    ??? example "Solución"
        ```javascript linenums="1" title="Mayúsculas y Minúsculas"
        let texto = "JavaScript es divertido";

        let textoMayus = texto.toUpperCase();
        let textoMinus = texto.toLowerCase();

        console.log("En mayúsculas:", textoMayus);
        console.log("En minúsculas:", textoMinus);
        ```

---

#### **Ejercicio 9: Extraer parte de una cadena**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara una variable `mensaje` con una oración: `JavaScript es muy poderoso`.
    - Extrae una parte de la cadena (primeras 10 letras).
    - Muestra la parte extraída.

    ??? example "Solución"
        ```javascript linenums="1" title="Extraer Parte de una Cadena"
        let mensaje = "JavaScript es muy poderoso";

        let parte = mensaje.slice(0, 10);

        console.log("Parte extraída:", parte);
        ```

---

#### **Ejercicio 10: Reemplazar palabras en una frase**

!!! question "Crea un programa que haga lo siguiente:"
    - Declara una variable `frase` con el texto: `"El cielo es azul y el mar también es azul"`.
    - Usa `.replace()` para cambiar la primera ocurrencias de la palabra `"azul"` por `"verde"`.
    - Muestra la frase modificada 

    ??? example "Solución"
        ```javascript linenums="1" title="Reemplazar Palabras en una Frase"
        let frase = "El cielo es azul y el mar también es azul";

        // Reemplazar solo la primera ocurrencia
        let nuevaFrase = frase.replace("azul", "verde");

        console.log("Frase modificada (una ocurrencia):", nuevaFrase);
        ```

### **Uso de `prompt-sync` en Node.js**

ES6 introdujo el método `prompt` para solicitar datos al usuario en el navegador, pero en Node.js no está disponible por defecto. Para interactuar con el usuario en Node.js, puedes utilizar la biblioteca `prompt-sync`. Es la manera que tenemos en Node.js de solicitar datos al usuario de forma sincrónica.

**`prompt-sync`** es una biblioteca que facilita las entradas sincronizadas en Node.js.

#### Instalación:

```bash
`npm install prompt-sync`
```

#### Ejemplo:

```javascript linenums="1" title="Uso de prompt-sync"

const prompt = require("prompt-sync")();

let edad = prompt("¿Qué edad tienes? ");
console.log(`¡Hola, tienes ${edad} años`);

```

### **Ejercicio 11: Solicitar el nombre del usuario**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario su nombre utilizando la biblioteca `prompt-sync`.
    - Muestra un saludo personalizado en la consola, como: "¡Hola, [nombre]!".

    ??? example "Solución"
        ```javascript linenums="1" title="Solicitar el Nombre del Usuario"
        const prompt = require("prompt-sync")();

        // Solicitar el nombre al usuario
        let nombre = prompt("¿Cómo te llamas? ");

        // Mostrar saludo personalizado
        console.log(`¡Hola, ${nombre}!`);
        ```
---

### **Ejercicio 12: Calculadora básica**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario dos números utilizando la biblioteca `prompt-sync`.
    - Realiza las operaciones matemáticas básicas: suma, resta, multiplicación y división.
    - Muestra los resultados de todas las operaciones en la consola.

    ??? example "Solución"
        ```javascript linenums="1" title="Calculadora Básica"
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

### **Ejercicio Extra: Resolver una ecuación de segundo grado**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario los coeficientes `a`, `b` y `c` de una ecuación de segundo grado de la forma: \( ax^2 + bx + c = 0 \).
    - Calcula las raíces de la ecuación utilizando la fórmula general:
      \[
      x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
      \]
    - Muestra las dos raíces en la consola (si existen).

    ??? example "Solución"
        ```javascript linenums="1" title="Resolver Ecuación de Segundo Grado"
        const prompt = require("prompt-sync")();

        // Solicitar coeficientes al usuario
        let a = parseFloat(prompt("Introduce el coeficiente a: "));
        let b = parseFloat(prompt("Introduce el coeficiente b: "));
        let c = parseFloat(prompt("Introduce el coeficiente c: "));

        // Calcular el discriminante
        let discriminante = b * b - 4 * a * c;

        if (discriminante > 0) {
            // Dos raíces reales
            let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
            console.log("Las raíces de la ecuación son:");
            console.log("Raíz 1:", raiz1);
            console.log("Raíz 2:", raiz2);
        } else if (discriminante === 0) {
            // Una única raíz
            let raiz = -b / (2 * a);
            console.log("La ecuación tiene una raíz única:");
            console.log("Raíz:", raiz);
        } else {
            // Raíces complejas
            console.log("La ecuación no tiene raíces reales.");
        }
        ```

---