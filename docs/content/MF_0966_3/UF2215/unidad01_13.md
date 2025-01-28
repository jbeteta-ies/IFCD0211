---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# Unidad 1: Configuración del Entorno y Fundamentos de JavaScript

## 1.3. Estructuras condicionales y de control

### **¿Qué es un if-else?**

La estructura **if-else** permite tomar decisiones en función de una condición. Evalúa si una expresión lógica es `true` o `false` y ejecuta el bloque correspondiente.

### **Sintaxis de if-else**

```javascript linenums="1"
if (condición) {
    // Código si la condición es verdadera
} else {
    // Código si la condición es falsa
}
```

**Ejemplo**

Programa que evalua si una variable numérica que simula la edad de una persona es mayor o menor de edad.

!!! example "Ejemplo de If-Else"

    En el siguiente ejemplo, se evalúa si una persona es mayor de edad:

    ??? example "diagrama de flujo"

        ```mermaid
        flowchart TD
            A[Inicio] --> B[Definir edad = 18]
            B --> C{edad >= 18}
            C -->|Sí| D["Eres mayor de edad"]
            C -->|No| E["Eres menor de edad"]
            D --> F[Fin]
            E --> F[Fin]
        ```

    ???+ example "Código javascript del ejemplo"


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

!!! note "Instrucciones"
    Lo vamos a solucionar en 4 pasos, viendo en cada uno de ellos una parte de la solución.

!!! question "Crea un programa que haga lo siguiente paso a paso:"

    - **Paso 1:** Determina si dos números son iguales.
    - **Paso 2:** Evalúa si el primer número es mayor que el segundo.
    - **Paso 3:** Evalúa si el segundo número es mayor que el primero.
    - **Paso 4:** Combina todas las evaluaciones en un único programa.

**Paso 1: Determinar si dos números son iguales**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca dos números.
    - Determina si los números son iguales.
    - Muestra un mensaje indicando que los números son iguales.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 1: Determinar si son iguales"
        const prompt = require("prompt-sync")();

        let num1 = parseFloat(prompt("Introduce el primer número: "));
        let num2 = parseFloat(prompt("Introduce el segundo número: "));

        if (num1 === num2) {
            console.log("Los números son iguales.");
        }
        ```

---
**Paso 2: Evaluar si el primer número es mayor que el segundo**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca dos números.
    - Evalúa si el primer número es mayor que el segundo.
    - Muestra un mensaje indicando que el primer número es mayor.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 2: El primero es mayor"
        const prompt = require("prompt-sync")();

        let num1 = parseFloat(prompt("Introduce el primer número: "));
        let num2 = parseFloat(prompt("Introduce el segundo número: "));

        if (num1 > num2) {
            console.log(`${num1} es mayor que ${num2}`);
        }
        ```

---
**Paso 3: Evaluar si el segundo número es mayor que el primero**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca dos números.
    - Evalúa si el segundo número es mayor que el primero.
    - Muestra un mensaje indicando que el segundo número es mayor.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 3: El segundo es mayor"
        const prompt = require("prompt-sync")();

        let num1 = parseFloat(prompt("Introduce el primer número: "));
        let num2 = parseFloat(prompt("Introduce el segundo número: "));

        if (num2 > num1) {
            console.log(`${num2} es mayor que ${num1}`);
        }
        ```

---

**Paso 4: Combinar todas las evaluaciones**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca dos números.
    - Evalúa si los números son iguales, si el primero es mayor o si el segundo es mayor.
    - Muestra un mensaje correspondiente para cada caso.

    ??? example "Diagrama"
        ```mermaid
        flowchart TD
            A[Inicio] --> B[Solicitar el primer número]
            B --> C[Solicitar el segundo número]
            C --> D{¿num1 es igual a num2?}
            
            D -->|Sí| E["Los números son iguales"]
            D -->|No| F{¿num1 es mayor que num2?}
            
            F -->|Sí| G["num1 es mayor que num2"]
            F -->|No| H["num2 es mayor que num1"]
            
            E --> I[Fin]
            G --> I
            H --> I
        ```

    ???+ example "Solución"
        ```javascript linenums="1" title="Paso 4: Todo junto"
        const prompt = require("prompt-sync")();

        let num1 = parseFloat(prompt("Introduce el primer número: "));
        let num2 = parseFloat(prompt("Introduce el segundo número: "));

        if (num1 === num2) {
            console.log("Los números son iguales.");
        } else if (num1 > num2) {
            console.log(`${num1} es mayor que ${num2}`);
        } else {
            console.log(`${num2} es mayor que ${num1}`);
        }
        ```

---

#### **Ejercicio 2: Número positivo o negativo**

!!! question "Crea un programa que haga lo siguiente paso a paso:"

    - **Paso 1:** Determina si un número es igual a cero.
    - **Paso 2:** Evalúa si un número es positivo.
    - **Paso 3:** Evalúa si un número es negativo.
    - **Paso 4:** Combina todas las evaluaciones en un único programa.

---

### **Paso 1: Determinar si un número es cero**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca un número.
    - Determina si el número es igual a cero.
    - Muestra un mensaje indicando que el número es cero.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 1: Número es cero"
        const prompt = require("prompt-sync")();

        let numero = parseFloat(prompt("Introduce un número: "));

        if (numero === 0) {
            console.log("El número es cero.");
        }
        ```

---

### **Paso 2: Determinar si un número es positivo**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca un número.
    - Evalúa si el número es positivo.
    - Muestra un mensaje indicando que el número es positivo.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 2: Número positivo"
        const prompt = require("prompt-sync")();

        let numero = parseFloat(prompt("Introduce un número: "));

        if (numero > 0) {
            console.log("El número es positivo.");
        }
        ```

---

### **Paso 3: Determinar si un número es negativo**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca un número.
    - Evalúa si el número es negativo.
    - Muestra un mensaje indicando que el número es negativo.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 3: Número negativo"
        const prompt = require("prompt-sync")();

        let numero = parseFloat(prompt("Introduce un número: "));

        if (numero < 0) {
            console.log("El número es negativo.");
        }
        ```

---

### **Paso 4: Combinar todas las evaluaciones**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca un número.
    - Evalúa si el número es positivo, negativo o igual a cero.
    - Muestra un mensaje correspondiente para cada caso.

    ??? example "Solución"
        ```javascript linenums="1" title="Paso 4: Todo junto"
        const prompt = require("prompt-sync")();

        let numero = parseFloat(prompt("Introduce un número: "));

        if (numero > 0) {
            console.log("El número es positivo.");
        } else if (numero < 0) {
            console.log("El número es negativo.");
        } else {
            console.log("El número es cero.");
        }
        ```
    ??? example "Diagrama de Flujo"
        ```mermaid
        flowchart TD
            A[Inicio] --> B[Solicitar un número]
            B --> C{¿Número > 0?}
            
            C -->|Sí| D["El número es positivo"]
            C -->|No| E{¿Número < 0?}
            
            E -->|Sí| F["El número es negativo"]
            E -->|No| G["El número es cero"]
            
            D --> H[Fin]
            F --> H
            G --> H
        ```

---

#### **Ejercicio 3: Verificar credenciales de acceso**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca un nombre de usuario y una contraseña.
    - Compara las entradas con dos constantes predefinidas: `USER` y `PASSWORD`.
    - Si coinciden, muestra el mensaje "Acceso correcto".
    - Si no coinciden, muestra el mensaje "Acceso incorrecto" en rojo.
    - Para el color rojo pudes utilizar la librería `chalk`. `pip install chalk` 

    ??? example "Solución"
        ```javascript linenums="1" title="Verificar credenciales"
        const prompt = require("prompt-sync")();
        const chalk = require("chalk");

        // Constantes predefinidas
        const USER = "admin";
        const PASSWORD = "12345";

        // Solicitar credenciales al usuario
        let login = prompt("Introduce tu nombre de usuario: ");
        let pwd = prompt("Introduce tu contraseña: ");

        // Verificar credenciales
        if (login === USER && pwd === PASSWORD) {
            console.log("Acceso correcto");
        } else {
            console.log(chalk.red("Acceso incorrecto"));
        }
        ```

    ??? info "Explicación del código"
        1. **Constantes**:
            - Se definen `USER` y `PASSWORD` como las credenciales válidas.
        2. **Entrada del Usuario**:
            - `prompt` solicita al usuario el nombre de usuario (`login`) y la contraseña (`pwd`).
        3. **Verificación**:
            - Se compara si ambas entradas coinciden con las constantes.
            - Si ambas coinciden, se muestra "Acceso correcto".
            - Si no coinciden, se muestra "Acceso incorrecto" con texto en rojo


---

#### Tratamiento de cadenas en IF-ELSE 

Vamos a ver un programa con las siguientes características:

- Solicita al usuario que introduzca dos cadenas.
- Compara las cadenas considerando mayúsculas y minúsculas (`ana` es distinto de `ANA`).
- Utiliza funciones como `toUpperCase` o `toLowerCase` para compararlas ignorando mayúsculas y minúsculas.
- Comprueba si una cadena tiene un número de caracteres entre un mínimo y un máximo.
- Explica que, según el orden lexicográfico, `"ana"` es menor que `"ANA"`.

!!! info "Solución"
    ```javascript linenums="1" title="Comparación de cadenas"
    const prompt = require("prompt-sync")();

    // Solicitar cadenas al usuario
    let cadena1 = prompt("Introduce la primera cadena: ");
    let cadena2 = prompt("Introduce la segunda cadena: ");

    // Comparación directa (sensible a mayúsculas y minúsculas)
    if (cadena1 === cadena2) {
        console.log("Las cadenas son iguales (sensible a mayúsculas).");
    } else {
        console.log("Las cadenas son distintas (sensible a mayúsculas).");
    }

    // Comparación ignorando mayúsculas y minúsculas
    if (cadena1.toLowerCase() === cadena2.toLowerCase()) {
        console.log("Las cadenas son iguales (ignorando mayúsculas).");
    } else {
        console.log("Las cadenas son distintas (ignorando mayúsculas).");
    }

    // Verificar longitud entre un mínimo y un máximo
    let minLength = 3;
    let maxLength = 10;
    if (cadena1.length >= minLength && cadena1.length <= maxLength) {
        console.log(`La primera cadena tiene una longitud válida (entre ${minLength} y ${maxLength}).`);
    } else {
        console.log(`La primera cadena no tiene una longitud válida (entre ${minLength} y ${maxLength}).`);
    }

    // Comparación lexicográfica
    if ("ana" < "ANA") {
        console.log('"ana" es menor que "ANA" en orden lexicográfico.');
    } else {
        console.log('"ana" no es menor que "ANA" en orden lexicográfico.');
    }
    ```

---

### **Explicación del Código**

1. **Comparación Directa (Sensible a Mayúsculas y Minúsculas)**:
    - La comparación `cadena1 === cadena2` verifica si las cadenas son exactamente iguales, considerando diferencias entre mayúsculas y minúsculas. Por ejemplo, `"ana" !== "ANA"`.

2. **Comparación Ignorando Mayúsculas y Minúsculas**:
    - Se utilizan las funciones `toLowerCase()` o `toUpperCase()` para convertir ambas cadenas a un formato uniforme antes de compararlas. Esto hace que `"ana" === "ANA"`.

3. **Verificar Longitud**:
    - Se usa `cadena1.length` para verificar si la longitud de la primera cadena está entre los límites definidos (`minLength` y `maxLength`).

4. **Orden Lexicográfico**:
    - En JavaScript, las cadenas se comparan según su valor Unicode. En el caso de `"ana"` y `"ANA"`, las letras minúsculas tienen valores Unicode mayores que las mayúsculas. Por lo tanto:
        - `"ana" < "ANA"` es `false`.

---
### **Operadores Lógicos en JavaScript**

En JavaScript, los operadores lógicos se usan para combinar condiciones o modificar su resultado. Los tres operadores principales son:

- **`&&` (AND o Y):** Evalúa si **todas las condiciones** son verdaderas.
- **`||` (OR o O):** Evalúa si **al menos una condición** es verdadera.
- **`!` (NOT o NO):** Invierte el valor lógico de una condición (de verdadero a falso y viceversa).

---

### **Tablas de Verdad**

#### 1. **Operador `&&` (AND)**

El operador `&&` retorna `true` solo si **todas las condiciones** son `true`.

| Condición A | Condición B | A && B |
|-------------|-------------|--------|
| `true`      | `true`      | `true` |
| `true`      | `false`     | `false`|
| `false`     | `true`      | `false`|
| `false`     | `false`     | `false`|

---

#### 2. **Operador `||` (OR)**

El operador `||` retorna `true` si **al menos una condición** es `true`.

| Condición A | Condición B | A `\|\|` B |
|-------------|-------------|--------|
| `true`      | `true`      | `true` |
| `true`      | `false`     | `true` |
| `false`     | `true`      | `true` |
| `false`     | `false`     | `false`|

---

#### 3. **Operador `!` (NOT)**

El operador `!` invierte el valor lógico de la condición.

| Condición | !Condición |
|-----------|------------|
| `true`    | `false`    |
| `false`   | `true`     |

---

#### **Ejemplos de Operadores Lógicos**

| Operador | Ejemplo                       | Resultado |
|----------|-------------------------------|-----------|
| `&&`     | `5 > 3 && 10 > 8`             | `true`    |
| `&&`     | `5 > 3 && 10 < 8`             | `false`   |
| `||`     | `5 > 3 || 10 < 8`             | `true`    |
| `||`     | `5 < 3 || 10 < 8`             | `false`   |
| `!`      | `!(5 > 3)`                    | `false`   |
| `!`      | `!(5 < 3)`                    | `true`    |
| Mixto    | `5 > 3 && (10 < 8 || 2 === 2)`| `true`    |
| Mixto    | `!(5 > 3 && 10 > 8)`          | `false`   |

---

#### **Notas Clave**
1. **Precedencia de Operadores**:
   
         - `!` tiene mayor precedencia que `&&` y `||`.
         - Agrupa condiciones con paréntesis para asegurarte de que se evalúan en el orden esperado.
                 - Ejemplo: `!(A && B)` no es lo mismo que `!A && B`.

2. **Cortocircuito**:
   
         - En `&&`, si la primera condición es `false`, las demás no se evalúan.
         - En `||`, si la primera condición es `true`, las demás no se evalúan.

---

#### **Leyes de De Morgan**

Las **Leyes de De Morgan** son reglas fundamentales en lógica y álgebra booleana. Estas leyes ayudan a simplificar expresiones lógicas y a entender cómo se relacionan los operadores `&&` (AND), `||` (OR) y `!` (NOT).

---

##### **Las dos leyes de De Morgan**

1. **Primera ley:**
    > La negación de una conjunción (`A && B`) es equivalente a la disyunción de las negaciones (`!A || !B`).

    **Formalmente:**
    ```
    !(A && B) ≡ !A || !B
    ```

    **Ejemplo en JavaScript:**
    ```javascript linenums="1"
    let A = true;
    let B = false;

    console.log(!(A && B));  // true
    console.log(!A || !B);   // true (equivalente por De Morgan)
    ```

---

2. **Segunda ley:**
    > La negación de una disyunción (`A || B`) es equivalente a la conjunción de las negaciones (`!A && !B`).

    **Formalmente:**
    ```
    !(A || B) ≡ !A && !B
    ```

    **Ejemplo en JavaScript:**
    ```javascript linenums="1"
    let A = true;
    let B = false;

    console.log(!(A || B));  // false
    console.log(!A && !B);   // false (equivalente por De Morgan)
    ```

---

##### **Cómo entender las leyes de De Morgan**

1. **Primera Ley (`!(A && B) ≡ !A || !B`)**:
    - Si **NO** se cumplen ambas condiciones (A y B), entonces **AL MENOS UNA** de las condiciones debe ser falsa.

2. **Segunda Ley (`!(A || B) ≡ !A && !B`)**:
    - Si **NO** se cumple ninguna de las condiciones (A o B), entonces **AMBAS** condiciones deben ser falsas.

---

##### **Tablas de Verdad**

- Primera Ley (`!(A && B) ≡ !A || !B`)

| A     | B     | A && B | !(A && B) | !A    | !B    | !A `\|\|` !B |
|-------|-------|--------|-----------|-------|-------|----------|
| true  | true  | true   | false     | false | false | false    |
| true  | false | false  | true      | false | true  | true     |
| false | true  | false  | true      | true  | false | true     |
| false | false | false  | true      | true  | true  | true     |

- Segunda Ley (`!(A || B) ≡ !A && !B`)

| A     | B     | A || B | !(A `\|\|` B) | !A    | !B    | !A && !B |
|-------|-------|--------|-----------|-------|-------|----------|
| true  | true  | true   | false     | false | false | false    |
| true  | false | true   | false     | false | true  | false    |
| false | true  | true   | false     | true  | false | false    |
| false | false | false  | true      | true  | true  | true     |

---

**Ejemplos prácticos**

- Ejemplo 1: Verificar si ninguna condición es verdadera
Si queremos verificar si ni `A` ni `B` son verdaderos, podemos usar:

```javascript linenums="1"
let A = false;
let B = false;

console.log(!(A || B));  // true
console.log(!A && !B);   // true (equivalente)

```

#### **¿Por qué son importantes las Leyes de De Morgan?**

1. **Simplificación de expresiones**:
    
    - Estas leyes permiten reescribir expresiones lógicas de manera más comprensible o adecuada para ciertos contextos.

2. **Optimización del código**:
    
    - Ayudan a escribir condiciones más eficientes o claras.

3. **Comprensión de la lógica booleana**:
    
    - Son una base fundamental en programación, especialmente en algoritmos, bases de datos y sistemas digitales.



#### **Ejercicio 4: Validar acceso según edad y rol**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca su edad y su rol.
    - Permite el acceso solo si:
        - El usuario tiene 18 años o más **y** es administrador.
        - **O** si tiene menos de 18 años pero el rol es "invitado".
        - **Y** se asegura de que el rol no esté vacío.

    ??? example "Solución"
        ```javascript linenums="1" title="Validar acceso según edad y rol"
        const prompt = require("prompt-sync")();

        let edad = parseInt(prompt("Introduce tu edad: "));
        let rol = prompt("Introduce tu rol (admin/invitado): ").trim();

        if ((edad >= 18 && rol === "admin") || (edad < 18 && rol === "invitado") && rol !== "") {
            console.log("Acceso permitido");
        } else {
            console.log("Acceso denegado");
        }
        ```

---

#### **Ejercicio 5: Determinar si un número cumple múltiples condiciones**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca un número.
    - Determina si el número cumple **al menos una** de las siguientes condiciones:
        - Es divisible por 2 **y** mayor que 10.
        - **O** es divisible por 3 pero **no** mayor que 50.
        - **Y** que el número no sea negativo.

    ??? example "Solución"
        ```javascript linenums="1" title="Validar número con múltiples condiciones"
        const prompt = require("prompt-sync")();

        let numero = parseInt(prompt("Introduce un número: "));

        if ((numero % 2 === 0 && numero > 10) || (numero % 3 === 0 && !(numero > 50)) && numero >= 0) {
            console.log("El número cumple al menos una condición");
        } else {
            console.log("El número no cumple ninguna condición");
        }
        ```

---

#### **Ejercicio 6: Validar si un texto cumple criterios mixtos**

!!! question "Crea un programa que haga lo siguiente:"
    - Solicita al usuario que introduzca una cadena de texto.
    - Determina si la cadena cumple **todas** las siguientes condiciones:
        - Tiene entre 5 y 15 caracteres.
        - **O** comienza con la letra "A" pero **no** termina con la letra "Z".
        - **Y** no contiene espacios en blanco.

    ??? example "Solución"
        ```javascript linenums="1" title="Validar texto con múltiples condiciones"
        const prompt = require("prompt-sync")();

        let texto = prompt("Introduce una cadena de texto: ").trim();

        if ((texto.length >= 5 && texto.length <= 15) || (texto.startsWith("A") && !texto.endsWith("Z")) && !texto.includes(" ")) {
            console.log("El texto cumple las condiciones");
        } else {
            console.log("El texto no cumple las condiciones");
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

### **1.3.2 If-Else Anidado**

#### **¿Qué es un if-else anidado?**
Un **if-else anidado** permite evaluar múltiples condiciones de manera jerárquica. Es una estructura donde un bloque `if` o `else` contiene otro bloque `if` o `else` en su interior.

#### **Sintaxis de if-else anidado**
```javascript linenums="1" title="Sintaxis de If-Else Anidado"
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

---

#### **Ejemplo**

!!! note "Ejemplo de If-Else Anidado"
    En este ejemplo, se evalúa la calificación de un estudiante y se asigna una letra según el rango:

    ```javascript linenums="1" title="Calificación con If-Else Anidado"
    const nota = 75;

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

    ??? example "Diagrama de flujo"
        ```mermaid
        flowchart TD
            A[Inicio] --> B{¿Nota >= 90?}
            B -->|Sí| C[Calificación: A]
            B -->|No| D{¿Nota >= 80?}
            D -->|Sí| E[Calificación: B]
            D -->|No| F[Calificación: C]
            C --> G[Fin]
            E --> G
            F --> G
        ```

---


### **Ejercicios de If-Else Anidado**

#### **Ejercicios**

!!! question "Ejercicio 1: Clasificación de edades"
    - Crea un programa que solicite al usuario su edad.
    - Según la edad introducida, muestra:
        - "Niño" si la edad es menor a 12.
        - "Adolescente" si la edad está entre 12 y 17.
        - "Adulto" si la edad es 18 o mayor.

    ??? example "Solución"
        ```javascript linenums="1" title="Clasificación de edades"
        const prompt = require("prompt-sync")();

        let edad = parseInt(prompt("Introduce tu edad: "));

        if (edad < 12) {
            console.log("Niño");
        } else {
            if (edad <= 17) {
                console.log("Adolescente");
            } else {
                console.log("Adulto");
            }
        }
        ```

---

!!! question "Ejercicio 2: Determinar un descuento"
    - Crea un programa que solicite el importe de una compra.
    - Calcula y muestra el descuento según las siguientes reglas:
        - 20% si el importe es mayor o igual a 100.
        - 10% si el importe está entre 50 y 99.
        - Sin descuento si el importe es menor a 50.

    ??? example "Solución"
        ```javascript linenums="1" title="Determinación de descuentos"
        const prompt = require("prompt-sync")();

        let importe = parseFloat(prompt("Introduce el importe de tu compra: "));

        if (importe >= 100) {
            console.log("Descuento del 20% aplicado");
        } else {
            if (importe >= 50) {
                console.log("Descuento del 10% aplicado");
            } else {
                console.log("Sin descuento");
            }
        }
        ```

---

!!! question "Ejercicio 3: Clasificación de temperaturas"
    - Crea un programa que solicite una temperatura en grados Celsius.
    - Clasifica la temperatura según los siguientes rangos:
        - "Frío" si es menor a 10°C.
        - "Templado" si está entre 10°C y 25°C.
        - "Calor" si es mayor a 25°C.

    ??? example "Solución"
        ```javascript linenums="1" title="Clasificación de temperaturas"
        const prompt = require("prompt-sync")();

        let temperatura = parseFloat(prompt("Introduce la temperatura en grados Celsius: "));

        if (temperatura < 10) {
            console.log("Frío");
        } else {
            if (temperatura <= 25) {
                console.log("Templado");
            } else {
                console.log("Calor");
            }
        }
        ```

---

### **1.3.3 Switch**

#### **¿Qué es un switch?**
El **switch** es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código según su valor. Es útil cuando se tienen múltiples condiciones basadas en el mismo valor.

#### **Sintaxis de switch**
```javascript linenums="1" title="Sintaxis de Switch"
switch (expresión) {
    case valor1:
        // Código para el caso valor1
        break;
    case valor2:
        // Código para el caso valor2
        break;
    default:
        // Código si ningún caso coincide
}
```

**Nota:** El uso de `break` asegura que el programa salga del bloque `switch` después de ejecutar el caso correspondiente.

---

#### **Ejemplo**

!!! note "Ejemplo de Switch"
    En este ejemplo, se determina el día de la semana según un número introducido:

    ```javascript linenums="1" title="Día de la semana con Switch"
    const dia = 3;

    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        default:
            console.log("Fin de semana");
    }
    ```

    ??? example "Diagrama de flujo"
        ```mermaid
        flowchart TD
            A[Inicio] --> B{¿Día = 1?}
            B -->|Sí| C[Lunes]
            B -->|No| D{¿Día = 2?}
            D -->|Sí| E[Martes]
            D -->|No| F{¿Día = 3?}
            F -->|Sí| G[Miércoles]
            F -->|No| H{¿Día = 4?}
            H -->|Sí| I[Jueves]
            H -->|No| J{¿Día = 5?}
            J -->|Sí| K[Viernes]
            J -->|No| L[Fin de semana]
            C --> M[Fin]
            E --> M
            G --> M
            I --> M
            K --> M
            L --> M
        ```

---

#### **Ejercicios**

!!! question "Ejercicio 1: Clasificación de vehículos"
    - Crea un programa que solicite al usuario el tipo de vehículo ("coche", "moto" o "camión").
    - Muestra un mensaje con el número de ruedas típico para ese tipo de vehículo:
        - "Coche": 4 ruedas.
        - "Moto": 2 ruedas.
        - "Camión": más de 4 ruedas.

    ??? example "Solución"
        ```javascript linenums="1" title="Clasificación de vehículos"
        const prompt = require("prompt-sync")();

        let tipo = prompt("Introduce el tipo de vehículo: ").toLowerCase();

        switch (tipo) {
            case "coche":
                console.log("Un coche tiene 4 ruedas.");
                break;
            case "moto":
                console.log("Una moto tiene 2 ruedas.");
                break;
            case "camión":
                console.log("Un camión tiene más de 4 ruedas.");
                break;
            default:
                console.log("Tipo de vehículo no reconocido.");
        }
        ```

---

!!! question "Ejercicio 2: Meses del año"
    - Crea un programa que solicite al usuario un número del 1 al 12.
    - Muestra el nombre del mes correspondiente:
        - 1: Enero, 2: Febrero, etc.
        - Si el número no está en el rango, muestra un mensaje de error.

    ??? example "Solución"
        ```javascript linenums="1" title="Meses del año"
        const prompt = require("prompt-sync")();

        let mes = parseInt(prompt("Introduce un número del 1 al 12: "));

        switch (mes) {
            case 1:
                console.log("Enero");
                break;
            case 2:
                console.log("Febrero");
                break;
            case 3:
                console.log("Marzo");
                break;
            case 4:
                console.log("Abril");
                break;
            case 5:
                console.log("Mayo");
                break;
            case 6:
                console.log("Junio");
                break;
            case 7:
                console.log("Julio");
                break;
            case 8:
                console.log("Agosto");
                break;
            case 9:
                console.log("Septiembre");
                break;
            case 10:
                console.log("Octubre");
                break;
            case 11:
                console.log("Noviembre");
                break;
            case 12:
                console.log("Diciembre");
                break;
            default:
                console.log("Número fuera de rango.");
        }
        ```

---

!!! question "Ejercicio 3: Clasificación de frutas"
    - Crea un programa que solicite al usuario el nombre de una fruta ("manzana", "plátano", "naranja").
    - Muestra un mensaje indicando el color típico de la fruta:
        - "Manzana": Roja o verde.
        - "Plátano": Amarillo.
        - "Naranja": Naranja.

    ??? example "Solución"
        ```javascript linenums="1" title="Clasificación de frutas"
        const prompt = require("prompt-sync")();

        let fruta = prompt("Introduce el nombre de una fruta: ").toLowerCase();

        switch (fruta) {
            case "manzana":
                console.log("Una manzana puede ser roja o verde.");
                break;
            case "plátano":
                console.log("Un plátano es amarillo.");
                break;
            case "naranja":
                console.log("Una naranja es naranja.");
                break;
            default:
                console.log("Fruta no reconocida.");
        }
        ```javascript linenums="1" title="Días de la semana"
        const prompt = require("prompt-sync")();

        let dia = parseInt(prompt("Introduce un número del 1 al 7: "));

        switch (dia) {
            case 1:
                console.log("Lunes");
                break;
            case 2:
                console.log("Martes");
                break;
            case 3:
                console.log("Miércoles");
                break;
            case 4:
                console.log("Jueves");
                break;
            case 5:
                console.log("Viernes");
                break;
            case 6:
                console.log("Sábado");
                break;
            case 7:
                console.log("Domingo");
                break;
            default:
                console.log("Número fuera de rango.");
        }
        ```

---

### **1.3.4 Operador Ternario**

#### **¿Qué es el operador ternario?**
El operador ternario es una forma compacta de escribir una expresión condicional en JavaScript. Tiene la siguiente estructura:

```javascript linenums="1" title="Sintaxis del Operador Ternario"
condición ? expresión_si_verdadero : expresión_si_falso;
```

**Ejemplo**: Determinar si un número es par o impar.

```javascript linenums="1" title="Número par o impar"
const numero = 5;
const resultado = (numero % 2 === 0) ? "Par" : "Impar";
console.log(resultado);
```

---

#### **Ejercicio**

!!! question "Ejercicio: Calificación rápida"
    - Crea un programa que solicite al usuario una calificación numérica.
    - Muestra "Aprobado" si la calificación es mayor o igual a 5, o "Suspendido" si es menor.

    ??? example "Solución"
        ```javascript linenums="1" title="Calificación rápida"
        const prompt = require("prompt-sync")();

        let calificacion = parseFloat(prompt("Introduce tu calificación: "));

        let resultado = (calificacion >= 5) ? "Aprobado" : "Suspendido";
        console.log(resultado);
        ```

---
