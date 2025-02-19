---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Manejo de errores, Try Catch
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 03 - Funciones y Manejo de Errores
---

# **Unidad 3: Funciones y Manejo de Errores**

## **3.2 Manejo de Errores en JavaScript**

JavaScript proporciona mecanismos para **manejar errores y prevenir que un programa falle completamente** cuando ocurre un problema inesperado. 

El uso de `try...catch` nos permite **capturar errores** y tomar decisiones sobre cómo manejarlos sin interrumpir la ejecución del programa.

---

### **3.2.1 El Bloque `try...catch`**

La estructura básica para manejar errores en JavaScript es:

```javascript linenums="1" title="Sintaxis de try...catch"
try {
    // Código que puede generar un error
} catch (error) {
    // Código que se ejecuta si ocurre un error
}
```

Cuando el código dentro de `try` genera un error, la ejecución se **detiene** y se pasa automáticamente al bloque `catch`, donde podemos manejar el error.

!!! example "Ejemplo básico de `try...catch`"
    ```javascript linenums="1" title="Captura de error con try...catch"
    try {
        let resultado = 10 / 0;
        console.log(resultado);
    } catch (error) {
        console.log("Se ha producido un error:", error.message);
    }
    ```

---

### **3.2.2 Uso del Bloque `finally`**

El bloque `finally` se ejecuta **siempre**, independientemente de si hubo o no un error.

!!! example "Ejemplo con `finally`"
    ```javascript linenums="1" title="Uso de try...catch...finally"
    try {
        let x = 5;
        console.log(x.toUpperCase()); // Error: toUpperCase no existe en un número
    } catch (error) {
        console.log("Se ha capturado un error:", error.message);
    } finally {
        console.log("Este mensaje siempre se mostrará.");
    }
    ```

---

### **3.2.3 Lanzar Errores con `throw`**

Podemos **generar errores manualmente** usando `throw`. Esto es útil cuando queremos validar datos y detener la ejecución si no son correctos.

!!! example "Ejemplo con `throw`"
    ```javascript linenums="1" title="Lanzamiento de errores con throw"
    function verificarEdad(edad) {
        if (edad < 18) {
            throw new Error("No puedes acceder, eres menor de edad.");
        }
        return "Acceso permitido.";
    }

    try {
        console.log(verificarEdad(16)); // Esto generará un error
    } catch (error) {
        console.log("Error detectado:", error.message);
    }
    ```

### **3.2.3 Tipos de Errores Comunes en JavaScript**

JavaScript tiene varios tipos de errores que pueden ocurrir durante la ejecución de un programa. Algunos de los errores más comunes son:

- **`SyntaxError`**: Ocurre cuando hay un error en la sintaxis del código.
- **`ReferenceError`**: Sucede cuando intentamos acceder a una variable que no está definida.
- **`TypeError`**: Aparece cuando intentamos ejecutar una operación sobre un tipo de dato incorrecto.
- **`RangeError`**: Se produce cuando un valor numérico está fuera del rango permitido.
- **`EvalError`**: Relacionado con el uso incorrecto de `eval()` (aunque es poco común en código moderno).

!!! example "Ejemplo de errores comunes"
    ```javascript linenums="1" title="Errores comunes en JavaScript"
    // SyntaxError (descomenta para ver el error)
    // console.log("Hola);
    
    // ReferenceError
    try {
        console.log(variableNoDefinida);
    } catch (error) {
        console.log("ReferenceError detectado:", error.message);
    }
    
    // TypeError
    try {
        let num = 5;
        num(); // No se puede llamar un número como función
    } catch (error) {
        console.log("TypeError detectado:", error.message);
    }
    ```

---

### **3.2.4 Personalización de Mensajes de Error**

Podemos personalizar los errores en JavaScript lanzando mensajes descriptivos mediante `throw`. Esto es útil cuando queremos manejar errores específicos en nuestro código.

!!! example "Ejemplo de personalización de errores"
    ```javascript linenums="1" title="Lanzar errores personalizados"
    function dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }
    
    try {
        console.log(dividir(10, 2)); // 5
        console.log(dividir(10, 0)); // Error
    } catch (error) {
        console.log("Error personalizado:", error.message);
    }
    ```

Los mensajes de error personalizados permiten que el código sea más claro y fácil de depurar.

---


---

### **Ejercicios: Manejo de Errores en JavaScript**

!!! question "Ejercicio 1: Validación de entrada numérica"
    - Crea una función `pedirNumero` que solicite un número al usuario.
    - Usa `try...catch` para asegurarte de que el usuario ingrese un número válido.
    - Si el usuario ingresa algo que no sea un número, lanza un error con `throw` y captura el error.

    ??? example "Solución"
        ```javascript linenums="1" title="Validación de entrada numérica"
        const prompt = require("prompt-sync")();
        
        function pedirNumero() {
            try {
                let input = prompt("Introduce un número: ");
                let numero = Number(input);
                if (isNaN(numero)) {
                    throw new Error("El valor introducido no es un número válido.");
                }
                console.log("Número ingresado:", numero);
            } catch (error) {
                console.log("Error:", error.message);
            }
        }
        
        pedirNumero();
        ```
    !!! question "Reto"
        - Modifica la función `pedirNumero`, que tenga un valir mínimo y uno máximo, que de dos tipos de errores, uno si la entrada no es numérica y otro si el número no está en el rango permitido.

!!! question "Ejercicio 2: División segura"
    - Crea una función `dividir` que reciba dos números y los divida.
    - Usa `try...catch` para evitar divisiones entre cero.
    - Si el divisor es cero, lanza un error con `throw`.

    ??? example "Solución"
        ```javascript linenums="1" title="División segura con manejo de errores"
        function dividir(a, b) {
            try {
                if (b === 0) {
                    throw new Error("No se puede dividir por cero.");
                }
                return a / b;
            } catch (error) {
                console.log("Error:", error.message);
            }
        }
        
        console.log(dividir(10, 2)); // 5
        console.log(dividir(10, 0)); // Error: No se puede dividir por cero.
        ```

!!! question "Ejercicio 3: Validación de edad para votar"
    - Crea una función `validarEdadVotacion` que reciba una edad como parámetro.
    - Si la edad es menor que 18, lanza un error con `throw` indicando que la persona no puede votar.
    - Usa `try...catch` para capturar el error y mostrar un mensaje adecuado.

    ??? example "Solución"
        ```javascript linenums="1" title="Validación de edad para votar"
        function validarEdadVotacion(edad) {
            try {
                if (edad < 18) {
                    throw new Error("No puedes votar, debes tener al menos 18 años.");
                }
                console.log("Puedes votar.");
            } catch (error) {
                console.log("Error:", error.message);
            }
        }
        
        validarEdadVotacion(20); // Puedes votar.
        validarEdadVotacion(16); // Error: No puedes votar, debes tener al menos 18 años.
        ```
