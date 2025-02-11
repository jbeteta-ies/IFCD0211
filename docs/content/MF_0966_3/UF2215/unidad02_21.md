---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Arrays
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 03 - Arrays, Objetos y Clases
---

# **Unidad 3: Arrays, Objetos y Clases**

## **3.1 Arrays en JavaScript**

### **Creación de un Array**

Un array en JavaScript es una colección ordenada de elementos. Se puede crear de diferentes maneras:

!!! example "Ejemplo de creación de un array"
    ```javascript linenums="1" title="Definición de un array"
    let elementos = []; // Array vacío
    let frutas = ["Manzana", "Banana", "Cereza"]; // Array con elementos string
    let numeros = [1, 2, 3, 4, 5]; // Array con elementos numéricos
    let mixto = ["Hola", 42, true, null]; // Array con elementos de diferentes tipos (mixto)
    ```

### **Uso de Índices**

Los elementos de un array están numerados, comenzando desde el índice `0`.

!!! example "Acceder a elementos mediante índice"
    ```javascript linenums="1" title="Acceso a elementos del array"
    let frutas = ["Manzana", "Banana", "Cereza"];
    
    console.log(frutas[0]); // Manzana
    console.log(frutas[1]); // Banana
    console.log(frutas[2]); // Cereza
    ```

### **Cambiar un Valor mediante el índice**

Podemos modificar los valores de un array asignando nuevos valores a sus índices:

!!! example "Modificar elementos en un array"
    ```javascript linenums="1" title="Modificación de elementos"
    let frutas = ["Manzana", "Banana", "Cereza"];
    
    frutas[1] = "Naranja";
    console.log(frutas); // ["Manzana", "Naranja", "Cereza"]
    ```

### **Borrado de Elementos (`undefined`)**

Si eliminamos un elemento sin reorganizar el array, su posición quedará vacía con un valor `undefined`.

!!! example "Eliminar un elemento y su problema"
    ```javascript linenums="1" title="Eliminación de elementos con delete"
    let frutas = ["Manzana", "Banana", "Cereza"];
    
    delete frutas[1];
    console.log(frutas); // ["Manzana", undefined, "Cereza"]
    ```

Este problema se soluciona utilizando métodos específicos para eliminar elementos, que veremos más adelante.

### **Propiedades de los Arrays**

La propiedad más importante de un array es `length`, que nos indica cuántos elementos tiene el array.

!!! example "Ejemplo de `length`"
    ```javascript linenums="1" title="Propiedad length"
    let frutas = ["Manzana", "Banana", "Cereza"];
    console.log(frutas.length); // 3
    ```

#### **Recorrer un array con `for`**

Podemos usar `length` para recorrer un array completamente con un bucle `for`.

!!! example "Ejemplo de recorrido con `for`"
    ```javascript linenums="1" title="Recorrido con for"
    let frutas = ["Manzana", "Banana", "Cereza"];
    
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
    ```
    ```console
    Manzana
    Banana
    Cereza
    ```


#### **Buscar un elemento con `while` y una variable bandera**

Una **variable bandera** es una variable booleana (`true` o `false`) que utilizamos para indicar si una condición se ha cumplido dentro de un bucle. Se usa comúnmente cuando buscamos un valor en un array o cuando queremos detener un proceso una vez que se ha encontrado un resultado.

En este caso, utilizamos la variable `encontrado` como bandera para saber si hemos encontrado el elemento dentro del array.

!!! example "Ejemplo de búsqueda con `while`"
    ```javascript linenums="1" title="Búsqueda con while y variable bandera"
    let frutas = ["Manzana", "Banana", "Cereza", "Naranja"];
    let buscar = "Cereza";
    let encontrado = false;
    let i = 0;
    
    while (i < frutas.length && !encontrado) {
        if (frutas[i] === buscar) {
            encontrado = true;
            console.log(`Elemento encontrado en la posición ${i}`);
        }
        i++;
    }
    
    if (!encontrado) {
        console.log("Elemento no encontrado");
    }
    ```
    ```console
    Elemento encontrado en la posición 2
    ```

### **Métodos de los Arrays**

JavaScript proporciona varios métodos para manipular arrays. A continuación, explicamos cada uno junto con sus parámetros y el valor que devuelven.

#### **`push()` - Agregar al final**
Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.

!!! example "Ejemplo de `push()`"
    ```javascript linenums="1" title="Ejemplo de push()"
    let frutas = ["Manzana", "Banana"];
    let nuevaLongitud = frutas.push("Cereza");
    console.log(frutas); // ["Manzana", "Banana", "Cereza"]
    console.log(nuevaLongitud); // 3
    ```

#### **`pop()` - Eliminar el último elemento**
Elimina el último elemento del array y devuelve el elemento eliminado.

!!! example "Ejemplo de `pop()`"
    ```javascript linenums="1" title="Ejemplo de pop()"
    let frutas = ["Manzana", "Banana", "Cereza"];
    let eliminado = frutas.pop();
    console.log(frutas); // ["Manzana", "Banana"]
    console.log(eliminado); // "Cereza"
    ```

#### **`shift()` - Eliminar el primer elemento**
Elimina el primer elemento del array y devuelve el elemento eliminado.

!!! example "Ejemplo de `shift()`"
    ```javascript linenums="1" title="Ejemplo de shift()"
    let frutas = ["Manzana", "Banana", "Cereza"];
    let eliminado = frutas.shift();
    console.log(frutas); // ["Banana", "Cereza"]
    console.log(eliminado); // "Manzana"
    ```

#### **`unshift()` - Agregar al inicio**
Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.

!!! example "Ejemplo de `unshift()`"
    ```javascript linenums="1" title="Ejemplo de unshift()"
    let frutas = ["Banana", "Cereza"];
    let nuevaLongitud = frutas.unshift("Manzana");
    console.log(frutas); // ["Manzana", "Banana", "Cereza"]
    console.log(nuevaLongitud); // 3
    ```

#### **`splice()` - Agregar o eliminar elementos**
Permite agregar, eliminar o reemplazar elementos en una posición específica.

**Parámetros:**

1. **Índice de inicio**: Posición donde se comenzará la modificación.
2. **Número de elementos a eliminar**: Define cuántos elementos se eliminan desde el índice indicado.
3. **Elementos a agregar (opcional)**: Elementos que se agregarán en la posición indicada.

!!! example "Ejemplo de `splice()`"
    ```javascript linenums="1" title="Ejemplo de splice()"
    let colores = ["Rojo", "Verde", "Azul"];
    
    // Elimina 1 elemento desde la posición 1 (elimina "Verde")
    colores.splice(1, 1);
    console.log(colores); // ["Rojo", "Azul"]
    
    // Agrega dos elementos en la posición 1 sin eliminar ninguno
    colores.splice(1, 0, "Amarillo", "Violeta");
    console.log(colores); // ["Rojo", "Amarillo", "Violeta", "Azul"]
    
    // Reemplaza un elemento en la posición 2
    colores.splice(2, 1, "Negro");
    console.log(colores); // ["Rojo", "Amarillo", "Negro", "Azul"]
    ```
#### **`isArray()` - Verificar si es un array**
Devuelve `true` si el valor es un array, de lo contrario `false`.

!!! example "Ejemplo de `isArray()`"
    ```javascript linenums="1" title="Ejemplo de isArray()"
    console.log(Array.isArray([1, 2, 3])); // true
    console.log(Array.isArray("Hola")); // false
    ```

#### **`sort()` - Ordenar un array**
Ordena los elementos del array alfabéticamente.

!!! example "Ejemplo de `sort()`"
    ```javascript linenums="1" title="Ejemplo de sort()"
    let frutas = ["Banana", "Manzana", "Cereza"];
    frutas.sort();
    console.log(frutas); // ["Banana", "Cereza", "Manzana"]
    ```

#### **`reverse()` - Invertir el orden de los elementos**
Invierte el orden de los elementos en un array.

!!! example "Ejemplo de `reverse()`"
    ```javascript linenums="1" title="Ejemplo de reverse()"
    let frutas = ["Banana", "Manzana", "Cereza"];
    frutas.reverse();
    console.log(frutas); // ["Manzana", "Cereza", "Banana"]
    ```

#### **`join()` - Convertir un array en una cadena**
Une los elementos del array en una cadena de texto con un separador especificado.

!!! example "Ejemplo de `join()`"
    ```javascript linenums="1" title="Ejemplo de join()"
    console.log(frutas.join(", ")); // "Manzana, Cereza, Banana"
    ```

#### **`concat()` - Unir arrays**
Concatena uno o más arrays y devuelve un nuevo array.

!!! example "Ejemplo de `concat()`"
    ```javascript linenums="1" title="Ejemplo de concat()"
    let numeros1 = [1, 2, 3];
    let numeros2 = [4, 5, 6];
    let resultado = numeros1.concat(numeros2);
    console.log(resultado); // [1, 2, 3, 4, 5, 6]
    ```

#### **`indexOf()` - Encontrar la posición de un elemento**
Devuelve el primer índice donde se encuentra el elemento en el array, o `-1` si no existe.

!!! example "Ejemplo de `indexOf()`"
    ```javascript linenums="1" title="Ejemplo de indexOf()"
    let numeros = [10, 20, 30, 40, 20];
    console.log(numeros.indexOf(20)); // 1
    console.log(numeros.indexOf(100)); // -1
    ```

#### **`lastIndexOf()` - Encontrar la última aparición de un elemento**
Devuelve el último índice donde se encuentra el elemento en el array.

!!! example "Ejemplo de `lastIndexOf()`"
    ```javascript linenums="1" title="Ejemplo de lastIndexOf()"
    let numeros = [10, 20, 30, 40, 20];
    console.log(numeros.lastIndexOf(20)); // 4
    ```

---

### **Métodos Avanzados de Arrays**

Estos métodos permiten realizar operaciones más avanzadas sobre los arrays. En estos métodos necesitamos definir una función que se aplicará a cada elemento del array, seguramente cuando veamos las `funciones`y las `funciones flecha` en el tema siguiente te resultará más sencillo entender estos métodos.

#### **`some()` - Verificar si algún elemento cumple una condición**
Devuelve `true` si al menos un elemento cumple la condición dada. Sería como un `OR` lógico a todos los elementos, devolviendo `true` si al menos uno cumple la condición.

!!! example "Ejemplo de `some()`"
    ```javascript linenums="1" title="Ejemplo de some()"
    const ages = [3, 10, 18, 20];
    function checkAdult(age) {
        return age > 18;
    }
    ages.some(checkAdult);
    ```
El mismo ejemplo utilizando una función flecha.
!!! example "Ejemplo de `some()`"
    ```javascript linenums="1" title="Ejemplo de some()"
    let edades = [10, 20, 30, 40];
    let hayMayoresDe18 = edades.some(edad => edad > 18);
    console.log(hayMayoresDe18); // true
    ```

#### **`every()` - Verificar si todos los elementos cumplen una condición**
Devuelve `true` si todos los elementos cumplen la condición dada.

!!! example "Ejemplo de `every()`"
    ```javascript linenums="1" title="Ejemplo de some()"
    const ages = [3, 10, 18, 20];
    function checkAdult(age) {
        return age > 18;
    }
    ages.every(checkAdult);
    ```
El mismo ejemplo utilizando una función flecha.
!!! example "Ejemplo de `every()`"
    ```javascript linenums="1" title="Ejemplo de every()"
    let edades = [10, 20, 30, 40];
    let todosMayoresDe18 = edades.every(edad => edad > 18);
    console.log(todosMayoresDe18); // false
    ```

#### **`filter()` - Filtrar elementos de un array**
Devuelve un nuevo array con los elementos que cumplen una condición.

!!! example "Ejemplo de `filter()`"
    ```javascript linenums="1" title="Ejemplo de some()"
    const ages = [10, 20, 30, 40];
    function checkAdult(age) {
        return age > 18;
    }
    let mayoresDe18 = ages.filter(checkAdult);
    console.log(mayoresDe18); // [20, 30, 40]
    ```
El mismo ejemplo utilizando una función flecha.

!!! example "Ejemplo de `filter()`"
    ```javascript linenums="1" title="Ejemplo de filter()"
    let edades = [10, 20, 30, 40];
    let mayoresDe18 = edades.filter(edad => edad > 18);
    console.log(mayoresDe18); // [20, 30, 40]
    ```

#### **`forEach()` - Recorrer un array ejecutando una función**
Ejecuta una función sobre cada elemento del array.

!!! example "Ejemplo de `forEach()`"
    ```javascript linenums="1" title="Ejemplo de forEach()"
    let frutas = ["Manzana", "Banana", "Cereza"];
    function mostrarFruta(fruta) {
        console.log(fruta);
    }
    frutas.forEach(mostrarFruta); // Manzana, Banana, Cereza
    ```
Con una función flecha:
!!! example "Ejemplo de `forEach()`"
    ```javascript linenums="1" title="Ejemplo de forEach()"
    let frutas = ["Manzana", "Banana", "Cereza"];
    frutas.forEach(fruta => console.log(fruta));
    ```

#### **`map()` - Transformar elementos de un array**
Devuelve un nuevo array con los elementos transformados por una función.

!!! example "Ejemplo de `map()`"
    ```javascript linenums="1" title="Ejemplo de map()"
    let numeros = [10, 20, 30, 40];
    function doblarNumero(num) {
        return num * 2;
    }
    let numerosDobles = numeros.map(doblarNumero);
    console.log(numerosDobles); // [20, 40, 60, 80]
    ```
Utilizando una función flecha
!!! example "Ejemplo de `map()`"
    ```javascript linenums="1" title="Ejemplo de map()"
    let edades = [10, 20, 30, 40];
    let edadesDobladas = edades.map(edad => edad * 2);
    console.log(edadesDobladas); // [20, 40, 60, 80]
    ```

### **Método `reduce()` en Arrays**

El método `reduce()` permite recorrer un array y **acumular** un resultado a partir de los elementos. Se utiliza comúnmente para sumar valores, calcular promedios o transformar datos de una colección. És como una función de agregación en SQL, o un `reduce` en Excel.

#### **Sintaxis de `reduce()`**
```javascript linenums="1" title="Sintaxis de reduce()"
function sumar(acumulador, elementoActual) {
    return acumulador + elementoActual;
}
let suma = array.reduce(sumar, valorInicial);
```
Utilizando una función flecha
```javascript
array.reduce((acumulador, elementoActual) => {
    // Operación sobre cada elemento
    return nuevoAcumulador;
}, valorInicial);
```

- **`acumulador`**: Es el valor acumulado en cada iteración.
- **`elementoActual`**: Es el elemento actual del array en la iteración.
- **`valorInicial`** (opcional): Es el valor inicial del acumulador. Si no se proporciona, toma el primer elemento del array.

#### **Ejemplo básico: Sumar elementos de un array**

!!! example "Ejemplo de uso de `reduce()`"
    ```javascript linenums="1" title="Suma de elementos con reduce()"
    let numeros = [10, 20, 30, 40];
    // definimos una función que sumará dos números
    function sumar(acumulador, num) {
        return acumulador + num;
    }
    // llamamos a reduce con la función sumar y el valor inicial 0
    let suma = numeros.reduce(sumar, 0);
    console.log("Suma total:", suma); // 100
    ```
El mismo ejemplo pero con la función flecha
!!! example "Ejemplo de uso de `reduce()`"
    ```javascript linenums="1" title="Suma de elementos con reduce()"
    let numeros = [10, 20, 30, 40];
    let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
    console.log("Suma total:", suma); // 100
    ```

#### **Ejemplo: Contar elementos con una condición**

!!! example "Ejemplo de contar elementos con `reduce`"
    ```javascript linenums="1" title="Contar elementos con reduce()"
    let respuestas = [5, 3, 4, 2, 5, 1, 4, 3, 5, 2];
    function contarInsatisfechos(contador, respuesta) {
        return respuesta <= 3 ? contador + 1 : contador;
    }
    let insatisfechos = respuestas.reduce(contarInsatisfechos, 0);
    console.log("Número de clientes insatisfechos:", insatisfechos);
    ```

El miso ejemplo con la función flecha
!!! example "Ejemplo de contar elementos con `reduce()`"
    ```javascript linenums="1" title="Contar elementos con reduce()"
    let respuestas = [5, 3, 4, 2, 5, 1, 4, 3, 5, 2];
    
    let insatisfechos = respuestas.reduce((contador, respuesta) => {
        return respuesta <= 3 ? contador + 1 : contador;
    }, 0);
    
    console.log("Número de clientes insatisfechos:", insatisfechos);
    ```

`reduce()` es una herramienta poderosa cuando se necesita transformar un array en un único valor acumulado.

### **forEach vs for vs for...of en Arrays**

Existen varias formas de recorrer un array en JavaScript, cada una con sus ventajas y desventajas:

- **`forEach()`**: Es más limpio y legible cuando solo necesitamos aplicar una función a cada elemento.
- **El bucle `for`**: Ofrece más flexibilidad, ya que permite controlar el índice y usar `break` o `continue`.
- **El bucle `for...of`**: Es una sintaxis más moderna para iterar sobre los valores de un array sin necesidad de acceder a los índices.

#### **Ejemplo Comparativo: `forEach` vs `for` vs `for...of`**

??? example "Comparación de `forEach()`, `for` y `for...of`"
    ```javascript linenums="1" title="Comparación de forEach(), for y for...of"
    let numeros = [10, 20, 30, 40, 50];
    
    console.log("Recorriendo con forEach:");
    numeros.forEach(num => console.log(num));
    
    console.log("Recorriendo con for:");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
    
    console.log("Recorriendo con for...of:");
    for (let numero of numeros) {
        console.log(numero);
    }
    ```

#### **¿Cuándo usar `forEach()`, `for` o `for...of`?**

| Método      | Cuándo Usarlo |
|------------|------------------------------------------------|
| `forEach()` | Cuando solo queremos ejecutar una acción sobre cada elemento sin modificar el array ni necesitar el índice. |
| `for`       | Cuando necesitamos acceder a los índices, modificar el array o salir del bucle con `break`. |
| `for...of`  | Cuando queremos recorrer directamente los valores del array sin preocuparnos por los índices. |

El `forEach()` es conveniente para realizar tareas simples sobre cada elemento, `for` nos da más control sobre la iteración, y `for...of` es una alternativa moderna y clara para recorrer los valores del array directamente.


---

### **Arrays Multidimensionales**

Un array puede contener otros arrays dentro de sí, formando una estructura de datos multidimensional.

!!! example "Ejemplo de array multidimensional"
    ```javascript linenums="1" title="Array de arrays"
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    console.log(matriz[1][2]); // 6
    ```

#### **Recorrer un array multidimensional con `for` anidado**

!!! example "Ejemplo de recorrido con `for` anidado"
    ```javascript linenums="1" title="Recorrer array multidimensional"
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
        }
    }
    ```
    !!! exercise "Retos"
        - 1. Modifica el código anterior para que muestre el array completo en forma de matriz.
        - 2. Modifica el array completo para que muestre la diagonal principal de la matriz. (la diagonal principal son los elementos donde `i` y `j` son iguales).


#### **Multiplicación de dos matrices**

En este ejemplo, multiplicamos dos matrices `A` y `B` para obtener un resultado `C`. Para multiplicar dos matrices, el número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz. Podemos encontrar más [información sobre multiplicación de matrices aquí](https://www.matricesydeterminantes.com/matrices/multiplicacion-de-matrices-2x2-y-3x3-ejemplos-y-ejercicios-resueltos-paso-a-paso/) 

!!! example "Ejemplo de multiplicación de matrices"
    ```javascript linenums="1" title="Multiplicación de matrices"

    let A = [
        [1, 2],
        [3, 4]
    ];

    Let B = [
        [5, 6],
        [7, 8]
    ];

    Let resultado =[];

    for (let i = 0; i < A.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            let suma = 0;
            for (let k = 0; k < A[0].length; k++) {
                suma += A[i][k] * B[k][j];
            }
            resultado[i][j] = suma;
        }
    }

    console.log(resultado);
    ```
### **Ejercicios sobre Arrays en JavaScript**

A continuación, se presentan una serie de ejercicios que ponen en práctica los conceptos aprendidos en este tema.

---

!!! question "Ejercicio 1: Crear un array y mostrar su contenido"
    - Crea un array con cinco nombres y muestra su contenido utilizando `for`.
    
    ??? example "Solución"
        ```javascript linenums="1" title="Mostrar contenido de un array"
        let nombres = ["Ana", "Luis", "Pedro", "María", "Carlos"];
        for (let i = 0; i < nombres.length; i++) {
            console.log(nombres[i]);
        }
        ```

    !!! exercise "Retos"
        - 1. Modifica el código anterior para que muestre los nombres en orden inverso.
        - 2. Modifica el código para que muestre solo los nombres que empiecen con la letra "A".
        - 3. Utiliza forEach para mostrar los nombres en lugar de un bucle `for`.

---

!!! question "Ejercicio 2: Buscar un elemento en un array"
    - Pide al usuario un nombre y verifica si existe en un array de nombres utilizando `indexOf()`.

    ??? example "Solución"
        ```javascript linenums="1" title="Búsqueda en un array"
        const prompt = require("prompt-sync")();
        let nombres = ["Ana", "Luis", "Pedro", "María", "Carlos"];
        let nombreBuscado = prompt("Introduce un nombre: ");
        
        let posicion = nombres.indexOf(nombreBuscado);
        if (posicion !== -1) {
            console.log(`El nombre está en la posición ${posicion}`);
        } else {
            console.log("Nombre no encontrado");
        }
        ```

---

!!! question "Ejercicio 3: Uso de `push()` y `pop()`"
    - Crea un array vacío.
    - Usa `push()` para agregar tres elementos.
    - Usa `pop()` para eliminar el último elemento y mostrar el resultado.

    ??? example "Solución"
        ```javascript linenums="1" title="Agregar y eliminar con push y pop"
        let numeros = [];
        numeros.push(10, 20, 30);
        console.log(numeros);
        
        numeros.pop();
        console.log(numeros);
        ```
    !!! exercise "Retos"
        - 1. Modifica el código para pedir al usuario los elementos a agregar hasta que ponga un 0.

---

!!! question "Ejercicio 4: Filtrar elementos con `filter()`"
    - Crea un array de números.
    - Usa `filter()` para obtener solo los números mayores de 50.
    
    ??? example "Solución"
        ```javascript linenums="1" title="Uso de filter()"
        let numeros = [10, 55, 60, 32, 70];
        let mayoresDe50 = numeros.filter(num => num > 50);
        console.log(mayoresDe50); // [55, 60, 70]
        ```

    !!! exercise "Retos"
        - 1. Modifica el código para que el usuario introduza un mínimo y máximo para filtrar.

---

!!! question "Ejercicio 5: Transformar elementos con `map()`"
    - Dado un array de precios en euros, conviértelos a dólares (suponiendo que 1€ = 1.1$).
    
    ??? example "Solución"
        ```javascript linenums="1" title="Uso de map()"
        let preciosEuros = [10, 20, 30];
        let preciosDolares = preciosEuros.map(precio => precio * 1.1);
        console.log(preciosDolares);
        ```
    !!! exercise "Retos"
        - 1. Modifica con un array de cambios (dolares, yenes y libras) con el valor de cada uno respecto al euro. Pide al usuario a qué moneda quiere cambiar los precios. Y muestra los precios en la moneda seleccionada.
        

---

!!! question "Ejercicio 6: Recorriendo un array con `forEach()`"
    - Dado un array de nombres, usa `forEach()` para mostrarlos en la consola.

    ??? example "Solución"
        ```javascript linenums="1" title="Uso de forEach()"
        let nombres = ["Ana", "Luis", "Pedro", "María", "Carlos"];
        nombres.forEach(nombre => console.log(nombre));
        ```

    !!! exercise "Retos"
        - 1. Modifica el código para que muestre los nombres en mayúsculas.
        - 2. Modifica el código para que muestre los nombres con su longitud.
---

!!! question "Ejercicio 7: Uso de `splice()` para modificar un array"
    - Dado un array de colores, usa `splice()` para eliminar el segundo elemento y agregar un nuevo color en su lugar.
    
    ??? example "Solución"
        ```javascript linenums="1" title="Uso de splice()"
        let colores = ["Rojo", "Verde", "Azul"];
        colores.splice(1, 1, "Amarillo");
        console.log(colores); // ["Rojo", "Amarillo", "Azul"]
        ```
    !!! exercise "Retos"
        - 1. Modifica el código para que el usuario pueda elegir el color a elagregar y en qué posición lo quiere. Si el color está repetido, mostrar un mensaje de error.
        - 2. Modifica el código para que el usuario pueda elegir el color a eliminar. Si el color no se encuntra dar un mensaje de error.
        

---

!!! question "Ejercicio 8: Uso de `sort()` y `reverse()`"
    - Dado un array de palabras, ordénalas alfabéticamente y luego en orden inverso.
    
    ??? example "Solución"
        ```javascript linenums="1" title="Uso de sort() y reverse()"
        let palabras = ["manzana", "banana", "cereza", "durazno"];
        palabras.sort();
        console.log(palabras);
        
        palabras.reverse();
        console.log(palabras);
        ```

---

!!! question "Ejercicio 9: Matriz bidimensional"
    - Crea una matriz 3x3 e imprime todos sus elementos con un `for` anidado.

    ??? example "Solución"
        ```javascript linenums="1" title="Recorrer matriz bidimensional"
        let matriz = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
            }
        }
        ```

---

### **Proyecto Final: Elección de Delegado**

En este proyecto, gestionaremos la elección de delegado de clase. Contamos con **5 candidatos** y **50 votos de alumnos**. Nuestro objetivo es calcular el número de votos obtenidos por cada candidato y mostrar el ranking en orden descendente.

El inicio de nuestro programe debe ser:
```javascript linenums="1" title="Elección de delegado"
let candidatos = ["Ana", "Luis", "Carlos", "María", "Pedro"];
let votos = [
    1, 2, 3, 4, 5, 1, 1, 3, 4, 2,
    5, 3, 2, 1, 4, 5, 3, 1, 2, 4,
    3, 5, 2, 1, 3, 4, 5, 1, 2, 3,
    1, 2, 3, 4, 5, 2, 1, 5, 3, 4,
    5, 1, 2, 3, 4, 2, 5, 1, 3, 4
];
...
...

```
#### **Solución con Bucles**

Usaremos bucles para contar los votos y ordenar los resultados.

??? example "Solución con Bucles"
    ```javascript linenums="1" title="Elección de delegado con bucles"
    let candidatos = ["Ana", "Luis", "Carlos", "María", "Pedro"];
    let votos = [
        1, 2, 3, 4, 5, 1, 1, 3, 4, 2,
        5, 3, 2, 1, 4, 5, 3, 1, 2, 4,
        3, 5, 2, 1, 3, 4, 5, 1, 2, 3,
        1, 2, 3, 4, 5, 2, 1, 5, 3, 4,
        5, 1, 2, 3, 4, 2, 5, 1, 3, 4
    ];
    
    let conteo = [0, 0, 0, 0, 0];
    
    for (let i = 0; i < votos.length; i++) {
        let indice = votos[i] - 1;
        conteo[indice]++;
    }
    
    let resultados = [];
    for (let i = 0; i < candidatos.length; i++) {
        resultados.push({ nombre: candidatos[i], votos: conteo[i] });
    }
    
    resultados.sort((a, b) => b.votos - a.votos);
    console.log("Resultados de la elección:", resultados);
    ```

---

#### **Solución con Métodos de Arrays**

Ahora usaremos métodos como `reduce()`, `map()` y `sort()` para simplificar el código.

??? example "Solución con Métodos de Arrays"
    ```javascript linenums="1" title="Elección de delegado con métodos de arrays"
    let conteoVotos = votos.reduce((acc, voto) => {
        acc[voto - 1]++;
        return acc;
    }, [0, 0, 0, 0, 0]);
    
    let resultadosFinales = candidatos.map((nombre, i) => ({ nombre, votos: conteoVotos[i] }))
                                     .sort((a, b) => b.votos - a.votos);
    
    console.log("Resultados de la elección:", resultadosFinales);
    ```

Esta segunda solución es más concisa y aprovecha mejor las funciones avanzadas de los arrays.

