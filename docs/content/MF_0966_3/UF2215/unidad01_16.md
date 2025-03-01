---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---
# **Unidad 1: Uso Avanzado de Números, Cadenas y Fechas**

## **1.6 Ejercicios**

### **Tenis**

!!! question "Ejercicio 1: Marcador de tenis simplificado"
    - Diseña un programa que permita llevar el marcador de un partido de tenis:
        - Solicita los nombres de los jugadores.
        - Permite ingresar quién gana cada punto y actualiza el marcador.
        - Llega a "deuce" cuando ambos tienen 40 puntos.
        - Lleva el conteo de juegos ganados, y cuando un jugador llega a 6 juegos, suma un set.
        - Finaliza cuando un jugador gana 2 sets.

    ??? example "Solución del ejercicio **pendiente**"
        <!--
        ```javascript linenums="1" title="Marcador de tenis"
        const prompt = require("prompt-sync")();

        const jugador1 = prompt("Nombre del jugador 1: ");
        const jugador2 = prompt("Nombre del jugador 2: ");

        let puntos1 = 0, puntos2 = 0;
        let juegos1 = 0, juegos2 = 0;
        let sets1 = 0, sets2 = 0;

        const puntosTenis = ["0", "15", "30", "40"];

        function mostrarMarcador() {
            console.log(`\n${jugador1}: ${puntosTenis[puntos1]} | Juegos: ${juegos1} | Sets: ${sets1}`);
            console.log(`${jugador2}: ${puntosTenis[puntos2]} | Juegos: ${juegos2} | Sets: ${sets2}`);
        }

        while (true) {
            const ganadorPunto = prompt("¿Quién ganó el punto? (1 o 2): ") === "1" ? 1 : 2;

            if (ganadorPunto === 1) {
                puntos1++;
            } else {
                puntos2++;
            }

            if (puntos1 > 3 && puntos1 - puntos2 >= 2) {
                juegos1++;
                puntos1 = 0;
                puntos2 = 0;

                if (juegos1 === 6) {
                    sets1++;
                    juegos1 = 0;
                    juegos2 = 0;
                }
            } else if (puntos2 > 3 && puntos2 - puntos1 >= 2) {
                juegos2++;
                puntos1 = 0;
                puntos2 = 0;

                if (juegos2 === 6) {
                    sets2++;
                    juegos1 = 0;
                    juegos2 = 0;
                }
            } else if (puntos1 === 3 && puntos2 === 3) {
                console.log("Deuce!");
            }

            mostrarMarcador();

            if (sets1 === 2 || sets2 === 2) {
                const ganador = sets1 === 2 ? jugador1 : jugador2;
                console.log(`\nEl ganador del partido es: ${ganador}`);
                break;
            }
        }
        ```
        -->

### **Fechas de pago**

!!! question "Ejercicio 2: Fechas de pago"
    - Escribe un programa que reciba:
        - Un importe.
        - Una fecha de factura en formato `YYYY-MM-DD`.
        - Una opción para calcular fechas de pago: a 30 días, a 30 y 60 días, o a 30, 60 y 90 días.
    - Muestra las fechas de pago correspondientes.

    ??? example "Solución del ejercicio **pendiente**"
        <!--
        ```javascript linenums="1" title="Fechas de pago"
        const prompt = require("prompt-sync")();

        const importe = parseFloat(prompt("Introduce el importe de la factura: "));
        const fechaFactura = new Date(prompt("Introduce la fecha de la factura (YYYY-MM-DD): "));
        const opcion = parseInt(prompt("¿Calcular fechas de pago a 30, 30/60 o 30/60/90 días? (1/2/3): "));

        let pagos = "\nFechas de pago:\n";

        for (let i = 1; i <= opcion; i++) {
            let fechaPago = new Date(fechaFactura);
            fechaPago.setDate(fechaPago.getDate() + i * 30);
            pagos += `Pago ${i}: ${fechaPago.toLocaleDateString()}\n`;
        }

        console.log(pagos);
        ```
        -->

### **codificación/decodificación**

!!! question "Ejercicio 3: Codificación de cadenas"
    - Diseña un programa que permita codificar y decodificar cadenas de texto.
        - Solicita una cadena de texto 
        - Codifica y decodifica la cadena según la cadena de codificación.
        - La cadena de codificación será: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz` por `DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc`.

    ??? example "Solución del ejercicio **pendiente**"
        <!--    
        ```javascript linenums="1" title="Codificación de cadenas"
        const prompt = require("prompt-sync")();
        const original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const codificado = "DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc";
        let resultado = "";
        const texto = prompt("Introduce un texto: ");
        for (let i = 0; i < texto.length; i++) {
            const index = original.indexOf(texto[i]);
            resultado += index === -1 ? texto[i] : codificado[index];
        }
        console.log(`Texto codificado: ${resultado}`);
        let decodificado = "";
        for (let i = 0; i < resultado.length; i++) {
            const index = codificado.indexOf(resultado[i]);
            decodificado += index === -1 ? resultado[i] : original[index];
        }
        console.log(`Texto decodificado: ${decodificado}`);
        ```
        -->
    
---

