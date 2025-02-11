---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Funciones, Errores
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 02 - Funciones y Manejo de Errores
---

# **Unidad 2: Funciones y Manejo de Errores**

## **2.1 Funciones en JavaScript**

Las funciones son bloques de código reutilizables que permiten organizar y estructurar mejor nuestros programas. Nos ayudan a reducir la repetición de código y mejorar la legibilidad.

### **¿Cómo se ejecutan las funciones en un programa?**

Cuando declaramos una función en JavaScript, esta **no se ejecuta inmediatamente**, sino que se almacena en memoria y solo se ejecuta cuando es llamada en el código. Esto nos permite definir funciones al inicio de un programa y utilizarlas en cualquier momento posterior.

???+ example "Ejemplo de declaración y llamada de función"
    ```javascript linenums="1" title="Ejemplo básico de función"
    function mensaje() {
        console.log("Este mensaje se muestra solo cuando se llama a la función.");
    }
    
    // Llamamos a la función
    mensaje();
    ```

### **2.1.1 Declaración y Uso de Funciones**

Las funciones en JavaScript se pueden declarar utilizando la palabra clave `function`. Estas permiten organizar el código en bloques reutilizables.

!!! example "Ejemplo de función simple"
    ```javascript linenums="1" title="Función que muestra un mensaje"
    function saludar() {
        console.log("Hola, bienvenido a JavaScript!");
    }
    
    saludar(); // Llamada a la función
    ```

Las funciones pueden aceptar parámetros para hacerlas más dinámicas:

!!! example "Ejemplo con parámetros"
    ```javascript linenums="1" title="Función con parámetros"
    function saludar(nombre) {
        console.log("Hola, " + nombre + "!");
    }
    
    saludar("Carlos"); // Salida: Hola, Carlos!
    saludar("María"); // Salida: Hola, María!
    ```

---

### **2.1.2 Parámetros y Valores de Retorno**

Las funciones pueden devolver valores utilizando la palabra clave `return`. Esto permite que el resultado de una función pueda ser utilizado posteriormente en el programa.

!!! example "Ejemplo con valor de retorno"
    ```javascript linenums="1" title="Función que retorna un valor"
    function sumar(a, b) {
        return a + b;
    }
    
    let resultado = sumar(5, 3);
    console.log("La suma es:", resultado);
    ```

Si una función no tiene `return`, devuelve `undefined` de forma implícita.

!!! example "Ejemplo de función sin retorno"
    ```javascript linenums="1" title="Función sin return"
    function mostrarMensaje() {
        console.log("Este es un mensaje de prueba");
    }
    
    let mensaje = mostrarMensaje();
    console.log(mensaje); // undefined
    ```

---

### **2.1.3 Funciones Anónimas**

Las funciones anónimas son aquellas que no tienen un nombre definido. Se suelen asignar a variables:

!!! example "Ejemplo de función anónima"
    ```javascript linenums="1" title="Función anónima asignada a una variable"
    let multiplicar = function(a, b) {
        return a * b;
    };
    
    console.log(multiplicar(4, 5)); // Salida: 20
    ```

Las funciones anónimas son útiles para definir comportamientos que solo se usan en un contexto específico.

---


### **2.1.4 Funciones como Expresiones**

En JavaScript, las funciones pueden ser declaradas como expresiones y asignadas a variables.

!!! example "Ejemplo de función como expresión"
    ```javascript linenums="1" title="Función como expresión"
    let suma = function(a, b) {
        return a + b;
    };
    
    console.log(suma(3, 4)); // Salida: 7
    ```

Las funciones expresadas se usan cuando queremos definir una función y almacenarla en una variable para luego ejecutarla en un momento determinado.

### **2.1.5 Paso de Parámetros por Valor y por Referencia**

En JavaScript, los **tipos primitivos** (números, cadenas, booleanos) se pasan por **valor**, mientras que los **objetos** y **arrays** se pasan por **referencia**.

!!! info "Nota"
    Pasar por valor significa que se crea una copia del valor original, mientras que pasar por referencia significa que se comparte la misma referencia en memoria. En los casos de los tipos primitivos, cualquier cambio dentro de la función no afectará a la variable original. Por tanto el paso es por valor.

!!! example "Ejemplo de paso por valor"
    ```javascript linenums="1" title="Paso por valor"
    function cambiarValor(numero) {
        numero = 100;
        console.log("Dentro de la función:", numero);
    }
    
    let x = 10;
    cambiarValor(x);
    console.log("Fuera de la función:", x); // x sigue siendo 10
    ```

!!! info "Nota"
    En el caso de los objetos y arrays, si modificamos el objeto dentro de la función, los cambios se reflejarán fuera de la función. Por tanto en este caso se pasa siempre por referencia.

!!! example "Ejemplo de paso por referencia"
    ```javascript linenums="1" title="Paso por referencia"
    function modificarObjeto(objeto) {
        objeto.nombre = "Modificado";
    }
    
    let persona = { nombre: "Original" };
    modificarObjeto(persona);
    console.log("Después de la función:", persona.nombre); // "Modificado"
    ```

### **2.1.6 Alcance de las Variables: Local y Global**

Las variables en JavaScript pueden tener **ámbito global** o **ámbito local** dependiendo de dónde sean declaradas.

- **Variables globales**: Son accesibles desde cualquier parte del código.
- **Variables locales**: Solo existen dentro de la función donde fueron declaradas.

!!! example "Ejemplo de variables globales y locales"
    ```javascript linenums="1" title="Ámbito de variables"
    let global = "Soy global";
    
    function mostrarAmbito() {
        let local = "Soy local";
        console.log(global); // Accede a la variable global
        console.log(local);  // Accede a la variable local
    }
    
    mostrarAmbito();
    console.log(global); // Funciona
    // console.log(local); // Error: local no está definida fuera de la función
    ```

---

### **2.1.7 Funciones recursivas (Introducción)**

Una función recursiva es aquella que se llama a sí misma dentro de su propio cuerpo. Es una técnica muy poderosa y útil en programación, especialmente para resolver problemas que se pueden dividir en subproblemas más pequeños.

Algunos ejemplos típicos de resolución de problemas mediante funciones recursivas son el cálculo de factoriales, la serie de Fibonacci, la búsqueda de elementos en árboles, entre otros.

Vamos a ver como ejercicios prácticos algunos ejemplos de funciones recursivas.

!!! example "Ejemplo de función recursiva: Factorial"
    ```javascript linenums="1" title="Función recursiva: Factorial"
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    
    console.log(factorial(5)); // 5! = 120
    ```


### **2.1.8 Retorno de Funciones**

Las funciones en JavaScript pueden devolver un valor mediante la palabra clave `return`. Esto permite que el resultado de una función pueda ser utilizado posteriormente en el programa.

!!! example "Ejemplo de retorno en funciones"
    ```javascript linenums="1" title="Uso del return en funciones"
    function sumar(a, b) {
        return a + b;
    }
    
    let resultado = sumar(5, 3);
    console.log("El resultado de la suma es:", resultado);
    ```

Cuando una función no tiene `return`, devuelve `undefined` de forma implícita.

!!! example "Ejemplo de función sin retorno"
    ```javascript linenums="1" title="Función sin return"
    function mostrarMensaje() {
        console.log("Este es un mensaje de prueba");
    }
    
    let mensaje = mostrarMensaje();
    console.log(mensaje); // undefined
    ```

Las funciones pueden retornar distintos tipos de valores:

1. **Valores primitivos (números, cadenas, booleanos):**
    ```javascript linenums="1" title="Retorno de valores primitivos"
    function obtenerNombre() {
        return "Carlos";
    }
    
    console.log(obtenerNombre());
    ```

2. **Expresiones o cálculos:**
    ```javascript linenums="1" title="Retorno de una expresión"
    function calcularDoble(x) {
        return x * 2;
    }
    
    console.log(calcularDoble(10)); // Salida: 20
    ```

3. **Objetos (tema que veremos más adelante):**
    ```javascript linenums="1" title="Retorno de un objeto"
    function crearPersona(nombre, edad) {
        return { nombre: nombre, edad: edad };
    }
    
    let persona = crearPersona("Ana", 30);
    console.log(persona.nombre, persona.edad); // Salida: Ana 30
    ```

4. **Otras funciones:**
    ```javascript linenums="1" title="Retorno de una función"
    function crearFuncion() {
        return function() {
            console.log("Soy una función retornada");
        };
    }
    
    let nuevaFuncion = crearFuncion();
    nuevaFuncion();
    ```

El uso adecuado de `return` permite que las funciones sean más reutilizables y organizadas dentro del código.

---

### **2.1.9 Funciones Anónimas Autoejecutadas (IIFE)**

Las funciones anónimas autoejecutadas (IIFE, Immediately Invoked Function Expressions) son funciones que se ejecutan inmediatamente después de ser definidas. Se usan para evitar contaminar el ámbito global y encapsular variables.

!!! example "Ejemplo de función autoejecutada"
    ```javascript linenums="1" title="IIFE básica"
    (function() {
        console.log("Esta función se ejecuta inmediatamente");
    })();
    ```

También pueden recibir parámetros:

!!! example "IIFE con parámetros"
    ```javascript linenums="1" title="IIFE con parámetros"
    (function(nombre) {
        console.log("Hola, " + nombre);
    })("Carlos");
    ```

En este punto podemos añadir la `función cierre` o `closure` que es una función anidada dentro de otra función que tiene acceso a las variables de la función exterior. Veamos un ejemplo con una función `contador` con un atributo `valor` y métodos `getValor` y `incrementar` y `decrementar`:

!!! example "Ejemplo de función cierre"
    ```javascript linenums="1" title="Función cierre"
    var miContador = (function contador() {
        let valor = 0;
        
        return {
            getValor: function() {
                return valor;
            },
            incrementar: function() {
                valor++;
            },
            decrementar: function() {
                valor--;
            }
        };
    })();
    
    console.log(miContador.getValor()); // 0
    miContador.incrementar();
    miContador.incrementar();
    console.log(miContador.getValor()); // 2
    miContador.decrementar();
    console.log(miContador.getValor()); // 1
    ```

Este patrón de diseño es muy útil para proteger variables y métodos de ser accedidos desde fuera de la función. Su principal diferencia con los objetos (clases) es que no se pueden crear instancias de la función `contador` y solo se puede acceder a sus métodos a través de la función `contador`.

---

### **2.1.10 Funciones Flecha (`Arrow Functions`)**

Las funciones flecha (`=>`) son una forma más concisa de escribir funciones en JavaScript. Se utilizan sobre todo en funciones cortas y expresiones de retorno rápido.

**Sintaxis básica:**

```javascript linenums="1" title="Sintaxis de una función flecha"
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // Salida: 8
```

Si la función tiene una sola línea, el `return` es implícito. Si tiene varias líneas, se necesita escribir un bloque con `{}` y `return`:

!!! example "Ejemplo con varias líneas"
    ```javascript linenums="1" title="Función flecha con varias líneas"
    const multiplicar = (a, b) => {
        let resultado = a * b;
        return resultado;
    };
    console.log(multiplicar(4, 5)); // Salida: 20
    ```

Las funciones flecha **no tienen su propio `this`**, lo que las hace útiles en ciertos casos (aunque esto se verá más adelante).

---


### **Ejercicios: Funciones en JavaScript**


!!! question "Ejercicio 1: Función para determinar si un número es positivo, negativo o cero"
    - Crea una función llamada `determinarSigno` que reciba un número como parámetro.
    - La función debe devolver `"positivo"` si el número es mayor que cero, `"negativo"` si es menor que cero, y `"cero"` si es exactamente cero.

    ??? example "Solución"
        ```javascript linenums="1" title="Función para determinar signo de un número"
        function determinarSigno(numero) {
            if (numero > 0) {
                return "positivo";
            } else if (numero < 0) {
                return "negativo";
            } else {
                return "cero";
            }
        }

        console.log(determinarSigno(10));  // positivo
        console.log(determinarSigno(-5));  // negativo
        console.log(determinarSigno(0));   // cero
        ```

!!! question "Ejercicio 2: Función para verificar si una palabra es un palíndromo"
    - Crea una función `esPalindromo` que reciba una palabra y devuelva `true` si se lee igual de izquierda a derecha que de derecha a izquierda, y `false` en caso contrario.

    ??? example "Solución"
        ```javascript linenums="1" title="Función para verificar palíndromos usando bucles"
        function esPalindromo(palabra) {
            let longitud = palabra.length;
            for (let i = 0; i < longitud / 2; i++) {
                if (palabra[i].toLowerCase() !== palabra[longitud - 1 - i].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }

        console.log(esPalindromo("reconocer")); // true
        console.log(esPalindromo("javascript")); // false
        ```


!!! question "Ejercicio 3: Función para calcular la media de tres números"
    - Crea una función llamada `calcularMedia` que reciba tres números como parámetros y devuelva la media aritmética de los tres.

    ??? example "Solución"
        ```javascript linenums="1" title="Función para calcular la media"
        function calcularMedia(a, b, c) {
            return (a + b + c) / 3;
        }

        console.log(calcularMedia(5, 10, 15)); // 10
        console.log(calcularMedia(7, 14, 21)); // 14
        ```

!!! question "Ejercicio 4: Función para determinar si un número es primo"
    - Crea una función `esPrimo` que reciba un número entero positivo y devuelva `true` si es primo y `false` en caso contrario.

    ??? example "Solución"
        ```javascript linenums="1" title="Función para verificar si un número es primo"
        function esPrimo(numero) {
            if (numero < 2) return false;
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    return false;
                }
            }
            return true;
        }

        console.log(esPrimo(7)); // true
        console.log(esPrimo(10)); // false
        ```

!!! question "Ejercicio 5: Función que devuelve la cantidad de vocales en una palabra"
    - Crea una función `contarVocales` que reciba una palabra y devuelva cuántas vocales contiene.

    ??? example "Solución"
        ```javascript linenums="1" title="Función para contar vocales en una palabra"
        function contarVocales(palabra) {
            let contador = 0;
            let vocales = "aeiouAEIOU";
            for (let i = 0; i < palabra.length; i++) {
                if (vocales.includes(palabra[i])) {
                    contador++;
                }
            }
            return contador;
        }

        console.log(contarVocales("javascript")); // 3
        console.log(contarVocales("programación")); // 5
        ```

!!! question "Ejercicio 6: Función para generar un número aleatorio entre dos valores"
    - Crea una función `numeroAleatorio` que reciba dos números (`min` y `max`) y devuelva un número entero aleatorio dentro de ese rango, incluyendo ambos valores.

    ??? example "Solución"
        ```javascript linenums="1" title="Función para generar un número aleatorio"
        function numeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        console.log(numeroAleatorio(1, 10)); // Número aleatorio entre 1 y 10
        console.log(numeroAleatorio(50, 100)); // Número aleatorio entre 50 y 100
        ```


!!! question "Ejercicio 7: Función como expresión"
    - Crea una función como expresión que calcule el cuadrado de un número y la almacene en una variable.
    
    ??? example "Solución"
        ```javascript linenums="1" title="Función como expresión"
        let cuadrado = function(n) {
            return n * n;
        };
        
        console.log(cuadrado(5)); // Salida: 25
        ```

!!! question "Ejercicio 8: Diferencia entre paso por valor y referencia"
    - Declara una función que intente modificar una variable primitiva y otra que modifique un objeto. Explica la diferencia.
    
    ??? example "Solución"
        ```javascript linenums="1" title="Paso por valor y referencia"
        function cambiarNumero(num) {
            num = 50;
        }
        
        function cambiarObjeto(obj) {
            obj.nombre = "Nuevo";
        }
        
        let numero = 10;
        let persona = { nombre: "Viejo" };
        
        cambiarNumero(numero);
        cambiarObjeto(persona);
        
        console.log(numero); // Sigue siendo 10 (paso por valor)
        console.log(persona.nombre); // "Nuevo" (paso por referencia)
        ```

!!! question "Ejercicio 9: Comprender el ámbito de variables"
    - Crea una función que defina una variable local e intenta acceder a ella desde fuera de la función. ¿Qué sucede?
    
    ??? example "Solución"
        ```javascript linenums="1" title="Ámbito de variables"
        function definirVariable() {
            let local = "Solo existo aquí";
            console.log(local); // Funciona dentro de la función
        }
        
        definirVariable();
        // console.log(local); // Error: local no está definida fuera de la función
        ```

---

### **Ejercicios adicionales**

!!! question "Ejercicio 10: Validar la letra del DNI"
    - Crea una función que reciba un número de DNI y su letra.
    - Comprueba si la letra es correcta (usando el método oficial de cálculo del DNI en España).
    - Pista: define y utiliza la constante `const letras = "TRWAGMYFPDXBNJZSQVHLCKE"`;
    - Pide al usuario el número de DNI y su letra y verifica si son correctos.

    ??? example "Solución"
        ```javascript linenums="1" title="Validación de letra del DNI"
        const prompt = require("prompt-sync")();

        function calcularLetraDNI(numero) {
            const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            return letras[numero % 23];
        }

        let dni = prompt("Introduce el número del DNI: ");
        let letra = prompt("Introduce la letra del DNI: ").toUpperCase();

        let letraCalculada = calcularLetraDNI(parseInt(dni));
        
        if (letra === letraCalculada) {
            console.log("DNI correcto.");
        } else {
            console.log("DNI incorrecto. La letra debería ser:", letraCalculada);
        }
        ```

!!! question "Ejercicio 11: Contar repeticiones de una letra en una cadena"
    - Crea una función que reciba una cadena y una letra.
    - Devuelve cuántas veces aparece esa letra en la cadena.
    - Pide al usuario una cadena y una letra y muestra el resultado.

    ??? example "Solución"
        ```javascript linenums="1" title="Contar letras en una cadena"
        const prompt = require("prompt-sync")();

        function contarLetra(cadena, letra) {
            let contador = 0;
            for (let i = 0; i < cadena.length; i++) {
                if (cadena[i].toLowerCase() === letra.toLowerCase()) {
                    contador++;
                }
            }
            return contador;
        }

        let cadenaUsuario = prompt("Introduce una cadena: ");
        let letraUsuario = prompt("Introduce una letra: ");
        
        console.log(`La letra '${letraUsuario}' aparece`, contarLetra(cadenaUsuario, letraUsuario), "veces en la cadena.");
        ```

!!! question "Ejercicio 12: Cálculo área de diferentes figuras"
    - Crea funciones que calculen el área de diferentes figuras geométricas. (`"cuadrado"`, `"triangulo"`, `"circulo"`).
    - Crea una función para pedir al usuario un número positivo y validar que sea un número, devolver -1 si no es válido.
    - Pide al usuario la figura y dependiendo d la figura pide los parámetros necesarios.
    - Calcula el área de la figura y muéstrala (utilizando la función correspondiente). 

    ??? example "Solución con `if...else`"
        ```javascript linenums="1" title="Cálculo de áreas de figuras geométricas"
        const prompt = require("prompt-sync")();

        function pedirNumero() {
            let numero = prompt("Introduce un número positivo (el símbolo decimal es la ','): ");
            if (isNaN(numero) || numero <= 0) {
                return -1;
            }
            return parseFloat(numero);
        }

        function calcularAreaCuadrado(lado) {
            return lado * lado;
        }

        function calcularAreaTriangulo(base, altura) {
            return (base * altura) / 2;
        }

        function calcularAreaCirculo(radio) {
            return Math.PI * radio * radio;
        }

        let figura = prompt("Introduce la figura (cuadrado, triangulo, circulo): ").toLowerCase();

        if (figura === "cuadrado") {
            let lado = pedirNumero();
            if (lado !== -1) {
                console.log("El área del cuadrado es:", calcularAreaCuadrado(lado));
            } else {
                console.log("Número inválido.");
            }
        } else if (figura === "triangulo") {
            let base = pedirNumero();
            let altura = pedirNumero();
            if (base !== -1 && altura !== -1) {
                console.log("El área del triángulo es:", calcularAreaTriangulo(base, altura));
            } else {
                console.log("Número inválido.");
            }
        } else if (figura === "circulo") {
            let radio = pedirNumero();
            if (radio !== -1) {
                console.log("El área del círculo es:", calcularAreaCirculo(radio));
            } else {
                console.log("Número inválido.");
            }
        } else {
            console.log("Figura no válida.");
        }
        ```

    ??? example "Solución con `switch`"

        ```javascript linenums="1" title="Cálculo de áreas de figuras geométricas con switch"       
        const prompt = require("prompt-sync")();
        function pedirNumero() {
            let numero = prompt("Introduce un número positivo (el símbolo decimal es la ','): ");
            if (isNaN(numero) || numero <= 0) {
                return -1;
            }
            return parseFloat(numero);
        }

        function calcularAreaCuadrado(lado) {
            return lado * lado;
        }
        function calcularAreaTriangulo(base, altura) {
            return (base * altura) / 2;
        }
        function calcularAreaCirculo(radio) {
            return Math.PI * radio * radio;
        }
        let figura = prompt("Introduce la figura (cuadrado, triangulo, circulo): ").toLowerCase();

        switch (figura) {
            case "cuadrado":
                let lado = pedirNumero();
                if (lado !== -1) {
                    console.log("El área del cuadrado es:", calcularAreaCuadrado(lado));
                } else {
                    console.log("Número inválido.");
                }
                break;
            case "triangulo":
                let base = pedirNumero();
                let altura = pedirNumero();
                if (base !== -1 && altura !== -1) {
                    console.log("El área del triángulo es:", calcularAreaTriangulo(base, altura));
                } else {
                    console.log("Número inválido.");
                }
                break;
            case "circulo":
                let radio = pedirNumero();
                if (radio !== -1) {
                    console.log("El área del círculo es:", calcularAreaCirculo(radio));
                } else {
                    console.log("Número inválido.");
                }
                break;
            default:
                console.log("Figura no válida.");
        }
        ```

    

---

