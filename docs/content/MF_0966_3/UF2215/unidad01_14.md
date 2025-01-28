---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# Unidad 1: Configuración del Entorno y Fundamentos de JavaScript

## 1.4. Bucles**

#### **¿Qué son los bucles?**
Los bucles son estructuras de control que permiten repetir un bloque de código varias veces. Son especialmente útiles para automatizar tareas repetitivas y evitar escribir múltiples líneas de código de manera manual.

##### **Ejemplo práctico**
Supongamos que queremos imprimir los números del 1 al 10 en la consola. Sin un bucle, tendríamos que escribir:

```javascript
console.log(1);
console.log(2);
console.log(3);
// ... y así hasta 10
```

Con un bucle, podemos reducir este código a:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

#### **¿Cuándo utilizar cada tipo de bucle?**
- **`for`**: Se utiliza cuando sabemos de antemano cuántas iteraciones queremos realizar.
- **`while`**: Ideal para cuando no sabemos exactamente cuántas veces se repetirá el bloque, pero tenemos una condición que lo determina.
- **`do-while`**: Similar a `while`, pero asegura que el bloque de código se ejecutará al menos una vez.

---

### **Bucle For**

#### **¿Qué es un bucle for?**
El bucle `for` se utiliza para repetir un bloque de código un número específico de veces. Consiste en tres partes:

1. **Inicialización**: Se define la variable de control que se usará para contar las iteraciones. Esto se realiza solo una vez al inicio del bucle.
   - Ejemplo: `let i = 1;` establece que el contador comienza en 1.

2. **Condición**: Es la expresión lógica que se evalúa antes de cada iteración. Mientras sea `true`, el bucle continuará ejecutándose.
   - Ejemplo: `i <= 5` asegura que el bucle se detendrá cuando `i` sea mayor a 5.

3. **Actualización**: Es la operación que modifica la variable de control al final de cada iteración. Generalmente, se incrementa o decrementa.
   - Ejemplo: `i++` incrementa el valor de `i` en 1 después de cada iteración.

#### **Sintaxis de for**
```javascript linenums="1" title="Sintaxis de For"
for (inicialización; condición; actualización) {
    // Código a ejecutar en cada iteración
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

#### **Ejercicio 1: Línea de asteriscos**
- Usa un bucle para imprimir una línea de 10 asteriscos (`**********`). Resuelve este ejercicio utilizando los tres tipos de bucles: `for`, `while` y `do-while`.

```terminal
**********
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

---

#### **Ejercicio 8: Números primos del 1 al 100**
- Crea un programa que calcule y muestre todos los números primos entre 1 y 100.

```terminal
2
3
5
7
11
13
17
...
97
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

#### **Ejercicio 9: Triángulo rectángulo**
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

#### **Ejercicio 10: Tabla de multiplicar**
- Crea un programa que solicite al usuario un número y escriba la tabla de multiplicar del 1 al 10 en el siguiente formato:

```terminal
2 * 1 = 2
2 * 2 = 4
...
2 * 10 = 20
```

??? example "Solución ejercicio 10 con bucle for"
    ```javascript
    const numero = 2; // Reemplazar por el número deseado
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
    ```

??? example "Solución ejercicio 10 con bucle while"
    ```javascript
    const numero = 2; // Reemplazar por el número deseado
    let i = 1;
    while (i <= 10) {
        console.log(`${numero} * ${i} = ${numero * i}`);
        i++;
    }
    ```

??? example "Solución ejercicio 10 con bucle do-while"
    ```javascript
    const numero = 2; // Reemplazar por el número deseado
    let i = 1;
    do {
        console.log(`${numero} * ${i} = ${numero * i}`);
        i++;
    } while (i <= 10);
    ```

---

### **Errores Comunes en Bucles**

Los bucles son herramientas muy útiles, pero también pueden generar errores si no se utilizan correctamente. A continuación, se explican algunos de los errores más comunes:

---

#### **1. Bucles infinitos**
Un bucle infinito ocurre cuando la condición para salir del bucle nunca se cumple, haciendo que el programa se ejecute indefinidamente.

##### **Ejemplo de bucle infinito con `while`**
```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    // Falta incrementar `i`, el bucle nunca termina
}
```
##### **Solución**
```javascript
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
```javascript
for (let i = 10; i < 5; i++) {
    console.log(i); // Nunca entra al bucle
}
```
##### **Solución**
Asegúrate de que la condición inicial permita al menos una iteración.
```javascript
for (let i = 5; i < 10; i++) {
    console.log(i); // Se ejecutará correctamente
}
```

---

#### **3. Modificar la variable de control dentro del bucle**
Cambiar la variable que controla el bucle puede generar resultados inesperados o bucles infinitos.

##### **Ejemplo de error al modificar la variable de control**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
    i++; // Modificar `i` dentro del bucle genera resultados inesperados
}
```
##### **Solución**
Deja que el incremento de la variable de control lo maneje el propio bucle.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Incremento manejado automáticamente por el bucle
}
```

---

#### **4. Usar la condición incorrecta**
Un error común es escribir mal la condición, lo que puede generar resultados inesperados o bucles infinitos.

##### **Ejemplo de condición incorrecta**
```javascript
let i = 0;
while (i = 10) { // Error: asignación en lugar de comparación
    console.log(i);
    i++;
}
```
##### **Solución**
Usa el operador de comparación `===` o `==` según corresponda.
```javascript
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
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 2) {
        break; // Termina el bucle antes de tiempo
    }
}
```
##### **Solución**
Usa `break` solo cuando sea necesario salir del bucle en condiciones específicas.
```javascript
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
```javascript
let suma;
for (let i = 0; i < 5; i++) {
    suma += i; // Error: `suma` no tiene un valor inicial
}
```
##### **Solución**
Inicializa las variables antes de usarlas.
```javascript
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
```javascript
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
```javascript
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

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Solo imprime números impares
    }
}
```

