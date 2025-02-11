---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# Unidad 1: Configuración del Entorno y Fundamentos de JavaScript

## **1.4. Bucles**

#### **¿Qué son los bucles?**
Los bucles son estructuras de control que permiten repetir un bloque de código varias veces. Son especialmente útiles para automatizar tareas repetitivas y evitar escribir múltiples líneas de código de manera manual.

##### **Ejemplo práctico**
Supongamos que queremos imprimir los números del 1 al 10 en la consola. Sin un bucle, tendríamos que escribir:

```javascript linenums="1"
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
...
...
console.log(100);
```

Con un bucle, podemos reducir este código a:

```javascript linenums="1"
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

!!! important "Tipos de bucles en JavaScript"
    #### **Tipos de bucles en JS y cuándo utilizarlos**
    - **`for`**: Se utiliza cuando sabemos de antemano cuántas iteraciones queremos realizar.
    - **`while`**: Ideal para cuando no sabemos exactamente cuántas veces se repetirá el bloque, pero tenemos una condición que lo determina.
    - **`do-while`**: Similar a `while`, pero asegura que el bloque de código se ejecutará al menos una vez.

---

### **Bucle For**

#### **¿Qué es un bucle for?**
El bucle `for` se utiliza para repetir un bloque de código un número específico de veces. Consiste en tres partes: `for (inicialización; condición; actualización) {bloque de instrucciones;}`.

1. **Inicialización**: Se define la variable de control que se usará para contar las iteraciones. Esto se realiza solo una vez al inicio del bucle.
         - Ejemplo: `let i = 1;` establece que el contador comienza en 1.

2. **Condición**: Es la expresión lógica que se evalúa antes de cada iteración. Mientras sea `true`, el bucle continuará ejecutándose.
     - Ejemplo: `i <= 5` asegura que el bucle se detendrá cuando `i` sea mayor a 5.

3. **Actualización**: Es la operación que modifica la variable de control al final de cada iteración. Generalmente, se incrementa o decrementa.
     - Ejemplo: `i++` incrementa el valor de `i` en 1 después de cada iteración.

#### **Sintaxis de for**
```javascript linenums="1" title="Sintaxis de For"
for (inicialización; condición; actualización) {
    // blque de óódigo a ejecutar en cada iteración
}
```

#### **Ejemplo**

!!! note "Ejemplo de Bucle For"
    Imprimamos los números del 1 al 5:

    ```javascript linenums="1" title="Bucle For"
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    ```

    ??? example "Diagrama de flujo"
        ```mermaid
        flowchart TD
            A[Inicio] --> B[Inicializar i = 1]
            B --> C{¿i <= 5?}
            C -->|Sí| D[Ejecutar código]
            D --> E[Incrementar i]
            E --> C
            C -->|No| F[Fin]
        ```

---

### **Bucle While**

#### **¿Qué es un bucle while?**
El bucle `while` ejecuta un bloque de código mientras una condición sea verdadera.

#### **Sintaxis de while**
```javascript linenums="1" title="Sintaxis de While"
while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}
```

#### **Ejemplo**

!!! note "Ejemplo de Bucle While"
    Imprimamos los números del 1 al 5:

    ```javascript linenums="1" title="Bucle While"
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
    ```

    ??? example "Diagrama de flujo"
        ```mermaid
        flowchart TD
            A[Inicio] --> B[Inicializar i = 1]
            B --> C{¿i <= 5?}
            C -->|Sí| D[Ejecutar código]
            D --> E[Incrementar i]
            E --> C
            C -->|No| F[Fin]
        ```

---

### **Bucle Do-While**

#### **¿Qué es un bucle do-while?**
El bucle `do-while` es similar al `while`, pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa.

#### **Sintaxis de do-while**
```javascript linenums="1" title="Sintaxis de Do-While"
do {
    // Código a ejecutar
} while (condición);
```

#### **Ejemplo**

!!! note "Ejemplo de Bucle Do-While"
    Imprimamos los números del 1 al 5:

    ```javascript linenums="1" title="Bucle Do-While"
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
    ```

    ??? example "Diagrama de flujo"
        ```mermaid
        flowchart TD
            A[Inicio] --> B[Inicializar i = 1]
            B --> C[Ejecutar código]
            C --> D[Incrementar i]
            D --> E{¿i <= 5?}
            E -->|Sí| C
            E -->|No| F[Fin]
        ```

---
### **Ejercicios de Bucles**

!!! important "Importante"
    Todos los ejercicios deben resolverse utilizando los tres tipos de bucles: `for`, `while` y `do-while`. Esto ayuda a practicar y entender las diferencias y aplicaciones de cada tipo de bucle.

!!! question "Ejercicio 1: Imprimir un asterisco"
    - Usa un bucle para imprimir un * (`*`) en 10 veces. Resuelve este ejercicio utilizando los tres tipos de bucles: `for`, `while` y `do-while`.

    ```terminal
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    ```

    ??? example "Solución ejercicio 1 con bucle for"
        ```javascript
        for (let i = 1; i <= 10; i++) {
            console.log("*");
        }
        ```

    ??? example "Solución ejercicio 1 con bucle while"
        ```javascript
        let i = 1;
        while (i <= 10) {
            console.log("*");
            i++;
        }
        ```

    ??? example "Solución ejercicio 1 con bucle do-while"
        ```javascript
        let i = 1;
        do {
            console.log("*");
            i++;
        } while (i <= 10);
        ```

    !!! question "Reto adicional"
        - Modifica el ejercicio, de manera que tengamos una constante `N` que determine cuántas veces se imprime el asterisco.


!!! question "Ejercicio 2: Imprimir una secuencia de números"
    - Escribe un programa que imprima en la consola los números del 1 al 10, uno por línea.

    ??? example "Solución"
        ```javascript linenums="1" title="Imprimir números del 1 al 10"
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
        ```

    ??? example "Solucion con bucle while"
        ```javascript linenums="1" title="Imprimir números del 1 al 10"
        let i = 1;
        while (i <= 10) {
            console.log(i);
            i++;
        }
        ```

    ??? example "Solución con bucle do-while"
        ```javascript linenums="1" title="Imprimir números del 1 al 10" 
        let i = 1;
        do {
            console.log(i);
            i++;
        } while (i <= 10);
        ```

    !!! question "Retos adicional"
        - Modifica el programa para que imprima los números del 10 al 1, en orden descendente.
        - Define una constante `N` que determine cuántos números se imprimirán.

!!! question "Ejercicio 3: Suma de los primeros 100 números"
    - Crea un programa que calcule la suma de los números del 1 al 100.

    ??? example "Solución"
        ```javascript linenums="1" title="Suma de los primeros N números"
        const prompt = require("prompt-sync")();
        let N = parseInt(prompt("Introduce un número: "));
        let suma = 0;
        for (let i = 1; i <= 100; i++) {
            suma += i;
        }
        console.log("La suma es:", suma);
        ```

    ??? example "Solución con bucle while"
        ```javascript linenums="1" title="Suma de los primeros N números"
        const prompt = require("prompt-sync")();
        let N = parseInt(prompt("Introduce un número: "));
        let suma = 0;
        let i = 1;
        while (i <= 100) {
            suma += i;
            i++;
        }
        console.log("La suma es:", suma);
        ```

    ??? example "Solución con bucle do-while"
        ```javascript linenums="1" title="Suma de los primeros N números"
        const prompt = require("prompt-sync")();
        let N = parseInt(prompt("Introduce un número: "));
        let suma = 0;
        let i = 1;
        do {
            suma += i;
            i++;
        } while (i <= 100);
        console.log("La suma es:", suma);
        ```

    !!! question "Reto adicional"
        - Modifica el programa para que solicite al usuario un número `N` y calcule la suma de los números del 1 al `N`.

!!! question "Ejercicio 4: Tabla de multiplicar"
    - Desarrolla un programa que pida al usuario un número entero y muestre en la consola la tabla de multiplicar de ese número del 1 al 10. El formato debe ser:

    ```terminal
    2 x 1 = 2
    2 x 2 = 4
    ...
    ...
    2 x 10 = 20
    ```

    ??? example "Solución"
        ```javascript linenums="1" title="Tabla de multiplicar"
        const prompt = require("prompt-sync")();
        let num = parseInt(prompt("Introduce un número: "));
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
        ```

    ??? example "Solución con bucle while"
        ```javascript linenums="1" title="Tabla de multiplicar"
        const prompt = require("prompt-sync")();
        let num = parseInt(prompt("Introduce un número: "));
        let i = 1;
        while (i <= 10) {
            console.log(`${num} x ${i} = ${num * i}`);
            i++;
        }
        ```

    ??? example "Solución con bucle do-while"
        ```javascript linenums="1" title="Tabla de multiplicar"
        const prompt = require("prompt-sync")();
        let num = parseInt(prompt("Introduce un número: "));
        let i = 1;
        do {
            console.log(`${num} x ${i} = ${num * i}`);
            i++;
        } while (i <= 10);
        ```

    !!! question "Reto adicional"
        - Modifica el programa tenga dos constantes `MIN` y `MAX`. Por ejemlo, si `MIN = 5` y `MAX = 15`, el programa mostrará la tabla de multiplicar del 5 al 15.

!!! question "Ejercicio 5: Números pares entre 1 y N"
    - Escribe un programa que simprima en la consola todos los números pares desde 1 hasta 100.

    ??? example "Solución"
        ```javascript linenums="1" title="Números pares hasta N"
        const prompt = require("prompt-sync")();
        let N = parseInt(prompt("Introduce un número: "));
        for (let i = 2; i <= 100; i += 2) {
            console.log(i);
        }
        ```
    
    ??? example "Solución con bucle while"
        ```javascript linenums="1" title="Números pares hasta N"
        const prompt = require("prompt-sync")();
        let N = parseInt(prompt("Introduce un número: "));
        let i = 2;
        while (i <= 100) {
            console.log(i);
            i += 2;
        }
        ```
    
    ??? example "Solución con bucle do-while"
        ```javascript linenums="1" title="Números pares hasta N"
        const prompt = require("prompt-sync")();
        let N = parseInt(prompt("Introduce un número: "));
        let i = 2;
        do {
            console.log(i);
            i += 2;
        } while (i <= 100);
        ```


    !!! question "Reto adicional"
        - Modifica el programa para que solicite al usuario un número `N` y muestre los números pares desde 1 hasta `N`.

!!! question "Ejercicio 6: Invertir una cadena"
    - Crea un programa que pida al usuario una cadena de texto y luego imprima la cadena invertida.
    - Aunque aún no hemos vista arrays, saber que con la expresión `texto[i]` se puede acceder a cada carácter de la cadena (la i debe estar entre 0 y la longitud de la cadena(`length`)).

    ??? example "Solución"
        ```javascript linenums="1" title="Invertir una cadena"
        const prompt = require("prompt-sync")();
        let texto = prompt("Introduce una cadena: ");
        let invertida = "";
        for (let i = texto.length - 1; i >= 0; i--) {
            invertida += texto[i];
        }
        console.log("Cadena invertida:", invertida);
        ```
    
    ??? example "Solución con bucle while"
        ```javascript linenums="1" title="Invertir una cadena"
        const prompt = require("prompt-sync")();
        let texto = prompt("Introduce una cadena: ");
        let invertida = "";
        let i = texto.length - 1;
        while (i >= 0) {
            invertida += texto[i];
            i--;
        }
        console.log("Cadena invertida:", invertida);
        ```

    ??? example "Solución con bucle do-while"
        ```javascript linenums="1" title="Invertir una cadena"
        const prompt = require("prompt-sync")();
        let texto = prompt("Introduce una cadena: ");
        let invertida = "";
        let i = texto.length - 1;
        do {
            invertida += texto[i];
            i--;
        } while (i >= 0);
        console.log("Cadena invertida:", invertida);
        ```

!!! question "Ejercicio 7: Contar vocales en una cadena"
    - Desarrolla un programa que solicite al usuario una cadena de texto y cuente cuántas vocales contiene.
    - Para saber si una letra es una vocal podemos utilizar un `if` o utilizar el método [`includes()`](https://www.w3schools.com/Jsref/jsref_includes.asp) de los strings.

    ??? example "Solución"
        ```javascript linenums="1" title="Contar vocales en una cadena"
        const prompt = require("prompt-sync")();
        let texto = prompt("Introduce una cadena: ").toLowerCase();
        let contador = 0;
        let vocales = "aeiou";
        for (let i = 0; i < texto.length; i++) {
            if (vocales.includes(texto[i])) {
                contador++;
            }
        }
        console.log("Número de vocales:", contador);
        
    ??? example "Solución con bucle while"
        ```javascript linenums="1" title="Contar vocales en una cadena"
        const prompt = require("prompt-sync")();
        let texto = prompt("Introduce una cadena: ").toLowerCase();
        let contador = 0;
        let vocales = "aeiou";
        let i = 0;
        while (i < texto.length) {
            if (vocales.includes(texto[i])) {
                contador++;
            }
            i++;
        }
        console.log("Número de vocales:", contador);
        ```

    ??? example "Solución con bucle do-while"
        ```javascript linenums="1" title="Contar vocales en una cadena"
        const prompt = require("prompt-sync")();
        let texto = prompt("Introduce una cadena: ").toLowerCase();
        let contador = 0;
        let vocales = "aeiou";
        let i = 0;
        do {
            if (vocales.includes(texto[i])) {
                contador++;
            }
            i++;
        } while (i < texto.length);
        console.log("Número de vocales:", contador);
        ```

#### **bucles anidados**

Los bucles anidados son bucles que se encuentran dentro de otros bucles. Son útiles para realizar tareas más complejas que requieren múltiples iteraciones. 
Sintaxis de un bucle `for` anidado:

```javascript linenums="1" title="Bucle For Anidado"
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}
```
Este tipo de bucles se utilizan comúnmente para recorrer matrices, tablas, realizar cálculos matriciales, entre otros.

Sistaxis de un bucle `while` anidado:

```javascript linenums="1" title="Bucle While Anidado"
let i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= 3) {
        console.log(i, j);
        j++;
    }
    i++;
}
```

Este tipo de bucles se utilizan comúnmente cuando no se conoce el número exacto de iteraciones y se necesita una condición de salida más compleja.

También podemos encontrar bucles anidados mixtos como un bucle `for` dentro de un bucle `do-while` o viceversa.

```javascript linenums="1" title="Bucle Mixto Anidado"
let i = 1;
do {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
    i++;
} while (i <= 5);
```

!!! info "Nota"
    Es importante tener en cuenta que los bucles anidados pueden aumentar la complejidad del código y hacerlo más difícil de entender. Por lo tanto, es recomendable utilizarlos con moderación y asegurarse de que sean necesarios para la tarea en cuestión.


!!! question "Ejercicio 8: Números primos"
    - Crea un programa que calcule y muestre todos los números primos entre 1 y 100.

    ```terminal
    1
    2
    3
    5
    7
    11
    13
    17
    ...
    100
    ```

    ??? example "Solución ejercicio 8 con bucle for"
        ```javascript
        for (let num = 2; num <= 100; num++) {
            let esPrimo = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                console.log(num);
            }
        }
        ```

    ??? example "Solución ejercicio 8 con bucle while"
        ```javascript
        let num = 2;
        while (num <= 100) {
            let esPrimo = true;
            let i = 2;
            while (i < num) {
                if (num % i === 0) {
                    esPrimo = false;
                    break;
                }
                i++;
            }
            if (esPrimo) {
                console.log(num);
            }
            num++;
        }
        ```

    ??? example "Solución ejercicio 8 con bucle do-while"
        ```javascript
        let num = 2;
        do {
            let esPrimo = true;
            let i = 2;
            do {
                if (num % i === 0) {
                    esPrimo = false;
                    break;
                }
                i++;
            } while (i < num);
            if (esPrimo) {
                console.log(num);
            }
            num++;
        } while (num <= 100);
        ```

---

!!! question "Ejercicio 9, triángulo rectángulo"
    - Usa un bucle para imprimir un triángulo rectángulo de asteriscos:

    ```terminal
    *
    **
    ***
    ****
    *****
    ```

    ??? example "Solución ejercicio 9 con bucle for"
        ```javascript
        for (let i = 1; i <= 5; i++) {
            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += "*";
            }
            console.log(linea);
        }
        ```

    ??? example "Solución ejercicio 9 con bucle while"
        ```javascript
        let i = 1;
        while (i <= 5) {
            let linea = "";
            let j = 1;
            while (j <= i) {
                linea += "*";
                j++;
            }
            console.log(linea);
            i++;
        }
        ```

    ??? example "Solución ejercicio 9 con bucle do-while"
        ```javascript
        let i = 1;
        do {
            let linea = "";
            let j = 1;
            do {
                linea += "*";
                j++;
            } while (j <= i);
            console.log(linea);
            i++;
        } while (i <= 5);
        ```

    ??? question "Reto adicional"
        - Intenta imprimir el triángulo al revés.
        - Ejemplo:

        ```terminal
        *****
        ****
        ***
        **
        *
        ```

    ---

!!! question "Ejercicio 10: Tablero ajedrez"
    - Crea un programa que imprima un tablero de ajedrez de 8x8 en la consola, utilizando los caracteres `#` y ` ` (espacio en blanco).

    ```terminal
    # # # #
     # # # #
    # # # #
     # # # #    
    # # # #
     # # # #
    # # # #
     # # # #
    ```
    ??? example "Solución con for"
        ```javascript
        for (let i = 1; i <= 8; i++) {
            let linea = "";
            for (let j = 1; j <= 8; j++) {
                if ((i + j) % 2 === 0) {
                    linea += "#";
                } else {
                    linea += " ";
                }
            }
            console.log(linea);
        }
        ```

    ??? example "Solución con while"
        ```javascript
        let i = 1;
        while (i <= 8) {
            let linea = "";
            let j = 1;
            while (j <= 8) {
                if ((i + j) % 2 === 0) {
                    linea += "#";
                } else {
                    linea += " ";
                }
                j++;
            }
            console.log(linea);
            i++;
        }
        ```
    ??? example "Solución con do-while"
        ```javascript
        let i = 1;
        do {
            let linea = "";
            let j = 1;
            do {
                if ((i + j) % 2 === 0) {
                    linea += "#";
                } else {
                    linea += " ";
                }
                j++;
            } while (j <= 8);
            console.log(linea);
            i++;
        } while (i <= 8);
        ```
---

### **Errores Comunes en Bucles**

Los bucles son herramientas muy útiles, pero también pueden generar errores si no se utilizan correctamente. A continuación, se explican algunos de los errores más comunes:

---

#### **1. Bucles infinitos**
Un bucle infinito ocurre cuando la condición para salir del bucle nunca se cumple, haciendo que el programa se ejecute indefinidamente.

##### **Ejemplo de bucle infinito con `while`**
```javascript linenums="1"
let i = 0;
while (i < 10) {
    console.log(i);
    // Falta incrementar `i`, el bucle nunca termina
}
```
##### **Solución**
```javascript linenums="1"
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // Incrementar para salir del bucle
}
```

---

#### **2. Bucles que nunca se ejecutan**
Esto ocurre cuando la condición inicial no se cumple, por lo que el bucle no se ejecuta ni una sola vez.

##### **Ejemplo de bucle que nunca se ejecuta con `for`**
```javascript linenums="1"
for (let i = 10; i < 5; i++) {
    console.log(i); // Nunca entra al bucle
}
```
##### **Solución**
Asegúrate de que la condición inicial permita al menos una iteración.
```javascript linenums="1"
for (let i = 5; i < 10; i++) {
    console.log(i); // Se ejecutará correctamente
}
```

---

#### **3. Modificar la variable de control dentro del bucle**
Cambiar la variable que controla el bucle puede generar resultados inesperados o bucles infinitos.

##### **Ejemplo de error al modificar la variable de control**
```javascript linenums="1"
for (let i = 0; i < 5; i++) {
    console.log(i);
    i++; // Modificar `i` dentro del bucle genera resultados inesperados
}
```
##### **Solución**
Deja que el incremento de la variable de control lo maneje el propio bucle.
```javascript linenums="1"
for (let i = 0; i < 5; i++) {
    console.log(i); // Incremento manejado automáticamente por el bucle
}
```

---

#### **4. Usar la condición incorrecta**
Un error común es escribir mal la condición, lo que puede generar resultados inesperados o bucles infinitos.

##### **Ejemplo de condición incorrecta**
```javascript linenums="1"
let i = 0;
while (i = 10) { // Error: asignación en lugar de comparación
    console.log(i);
    i++;
}
```
##### **Solución**
Usa el operador de comparación `===` o `==` según corresponda.
```javascript linenums="1"
let i = 0;
while (i === 10) {
    console.log(i);
    i++;
}
```

---

#### **5. Salir del bucle incorrectamente**
Usar `break` o `return` de forma incorrecta puede terminar el bucle antes de lo esperado o generar errores en el flujo del programa.

##### **Ejemplo de uso incorrecto de `break`**
```javascript linenums="1"
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 2) {
        break; // Termina el bucle antes de tiempo
    }
}
```
##### **Solución**
Usa `break` solo cuando sea necesario salir del bucle en condiciones específicas.
```javascript linenums="1"
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Salta a la siguiente iteración
    }
    console.log(i); // Se ejecutará para valores distintos de 2
}
```

---

#### **6. Variables mal inicializadas**
Si no se inicializan correctamente las variables utilizadas en la condición o dentro del bucle, pueden generarse errores o resultados inesperados.

##### **Ejemplo de variable mal inicializada**
```javascript linenums="1"
let suma;
for (let i = 0; i < 5; i++) {
    suma += i; // Error: `suma` no tiene un valor inicial
}
```
##### **Solución**
Inicializa las variables antes de usarlas.
```javascript linenums="1"
let suma = 0;
for (let i = 0; i < 5; i++) {
    suma += i;
}
console.log(suma);
```

---

### **Instrucciones `break` y `continue`**

Las instrucciones `break` y `continue` pueden ser útiles en ciertas situaciones, pero su abuso o uso inadecuado puede hacer que el código sea difícil de leer y mantener.

#### **`break`**
- Sirve para terminar un bucle de forma inmediata, sin importar si la condición del bucle aún es verdadera.

##### **Ejemplo**
```javascript linenums="1"
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // El bucle termina en 5
    }
    console.log(i);
}
```

#### **`continue`**
- Sirve para saltar a la siguiente iteración del bucle, ignorando el resto del código dentro del mismo.

##### **Ejemplo**
```javascript linenums="1"
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Ignora números pares
    }
    console.log(i);
}
```

---

#### **Por qué evitar `break` y `continue`**
- **Reducción de claridad**: El flujo de control se vuelve menos predecible y más difícil de seguir.
- **Alternativas más claras**: Generalmente, es mejor estructurar el código para que las condiciones de salida o iteración se manejen de manera explícita.

##### **Alternativa sin `break` y `continue`**
En lugar de usar `break` o `continue`, se pueden reestructurar las condiciones del bucle:

```javascript linenums="1"
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Solo imprime números impares
    }
}
```

### Ejercicios de Bucles, en este caso debes determinar qué tipo de bucle es el más adecuado para cada ejercicio.

#### **Ejercicio 1: PIN de seguridad**
- Crea un programa que solicite al usuario un PIN de seguridad de 4 dígitos. Si el PIN ingresado no es correcto, el programa debe mostrar un mensaje de error y permitir al usuario intentarlo nuevamente. El programa debe finalizar cuando el PIN ingresado sea correcto. O si el usuario ha intentado 3 veces. 
- Ampliación: Si el usuario ha intentado 3 veces, el programa debe bloquearse durante 30 segundos antes de permitir nuevos intentos, investiga como bloquear el rograma 30 segundos.

```terminal
Introduce tu PIN de 4 dígitos: 1234
PIN incorrecto. Inténtalo de nuevo.
Introduce tu PIN de 4 dígitos: 5678
PIN incorrecto. Inténtalo de nuevo.
Introduce tu PIN de 4 dígitos: 9999
PIN incorrecto. Inténtalo de nuevo.
El programa se bloqueará durante 30 segundos.
```

#### **Ejercicio 2: Adivina el número**
- Crea un programa que genere un número aleatorio entre 1 y 100. Luego, solicita al usuario que adivine el número. Si el número ingresado es mayor que el número generado, muestra un mensaje indicando que el número es demasiado alto. Si el número ingresado es menor que el número generado, muestra un mensaje indicando que el número es demasiado bajo. El programa debe continuar solicitando al usuario que adivine el número hasta que lo adivine correctamente.
- Investiga como generar [números aleatorios](https://www.w3schools.com/js/js_random.asp) en JavaScript. 

```terminal
Adivina el número entre 1 y 100: 50
El número es demasiado bajo. Inténtalo de nuevo.
Adivina el número entre 1 y 100: 75
El número es demasiado alto. Inténtalo de nuevo.
Adivina el número entre 1 y 100: 60
¡Felicidades! Has adivinado el número.
```

#### **Ejercicio 3: Calculadora de factorial**
- Crea un programa que solicite al usuario un número entero positivo y calcule su factorial. El factorial de un número `n` se define como el producto de todos los enteros positivos menores o iguales a `n`.
- Por ejemplo, el factorial de 5 (`5!`) es `5 x 4 x 3 x 2 x 1 = 120`.

```terminal
Introduce un número entero positivo: 5
El factorial de 5 es: 120
```

#### **Ejercicio 4: Validación entrada de datos**
- Crea un programa que solicite al usuario un número entero positivo. Si el usuario ingresa un valor no numérico o un número negativo, el programa debe mostrar un mensaje de error y solicitar al usuario que ingrese un número válido. El programa debe continuar solicitando al usuario que ingrese un número válido hasta que lo haga.

```terminal
Introduce un número entero positivo: hola
Error: Debes introducir un número entero positivo.
Introduce un número entero positivo: -5
Error: Debes introducir un número entero positivo.
Introduce un número entero positivo: 10
Número válido: 10
```

#### **Ejercicio 5: Validación de datos con operación**
- Pide al usuario que introduzca un número entero y positivo. Si es correcto que lo sume en un acumulador. Si el usuario introduce un número negativo o no entero, debe mostrar un mensaje de error y solicitar al usuario que introduzca un número válido. El programa finalizará cuando el usuario introduzca un `0`, en ese caso mostrará el total acumulado
- Ampliación: Calcula también la media de los números introducidos.

```terminal
Introduce un número entero positivo: 5
Introduce un número entero positivo: 10
Introduce un número entero positivo: hola
Error: Debes introducir un número entero positivo.
Introduce un número entero positivo: -5
Error: Debes introducir un número entero positivo.
Introduce un número entero positivo: 15
Introduce un número entero positivo: 0
Total acumulado: 30
Media de los números introducidos: 10
```

