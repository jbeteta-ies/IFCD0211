---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Objetos, Clases
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 02 - Arrays, Objetos y Clases
---

# **Unidad 2: Arrays, Objetos y Clases**

## **2.2 Objetos y su uso**

### **Introducción a los Objetos en JavaScript**

Los objetos en JavaScript son estructuras de datos que permiten agrupar información en un mismo lugar. Son clave en el desarrollo de aplicaciones ya que representan entidades del mundo real, como por ejemplo: usuarios, productos o empleados. 

A diferencia de los arrays, que almacenan valores en una lista indexada, los objetos almacenan datos en **pares clave-valor**, lo que permite un acceso más intuitivo a la información.

Algunas de las ventajas de los objetos son:

- Permiten organizar datos de forma estructurada.
- Facilitan la manipulación y consulta de información.
- Son fundamentales para la programación orientada a objetos en JavaScript.
- Se utilizan en APIs, almacenamiento en JSON y modelado de datos, etc.

En esta sección, trabajaremos con un objeto `empleado`, al que iremos añadiendo nuevas características en cada sección para entender mejor su utilidad.

---

### **Declarando Objetos**

Existen varias maneras de declarar un objeto en JavaScript:

#### **1️ Declaración con llaves `{}` (Objeto Literal)**

La manera más intuitiva de declarar un objeto es mediante la notación de llaves `{}`. Es la primera opción a considerar para crear objetos simples.

!!! example "Ejemplo de Objeto Literal"
    ```javascript linenums="1" title="Declaración de un objeto"
    let empleado = {
        nombre: "Carlos Pérez",
        edad: 35,
        puesto: "Desarrollador Web"
    };
    ```

#### **2️ Creación con `new Object()`**

la palabra clave `new` se utiliza para crear un nuevo objeto. Se pueden crear tantos objetos como se necesiten.

!!! example "Ejemplo con `new Object()`"
    ```javascript linenums="1" title="Declaración con new Object()"
    let empleado = new Object();
    empleado.nombre = "Carlos Pérez";
    empleado.edad = 35;
    empleado.puesto = "Desarrollador Web";
    ```

**Accediendo a Propiedades**

Podemos acceder a las propiedades de un objeto mediante la notación de punto `.` o corchetes `[]`.
!!! example "Acceso a propiedades"
    ```javascript linenums="1" title="Acceso a propiedades"
    let empleado = {
        nombre: "Carlos Pérez",
        edad: 35,
        puesto: "Desarrollador Web"
    };
    console.log(empleado.nombre); // Carlos Pérez
    console.log(empleado["edad"]); // 35
    ```

#### **3️ Agregar Propiedades en Tiempo de Ejecución**

Podemos agregar propiedades después de haber creado el objeto. Para ello bastará con asignar un nuevo valor a una propiedad que no exista.

!!! example "Agregar propiedades dinámicamente"
    ```javascript linenums="1" title="Agregar nuevas propiedades"
    let empleado = {
        nombre: "Carlos Pérez",
        edad: 35,
        puesto: "Desarrollador Web"
    };
    empleado.salario = 3000;
    console.log(empleado.salario); // 3000
    ```

---

### **Métodos en Objetos**

Los métodos son funciones dentro de un objeto que permiten realizar acciones sobre él.

!!! example "Declaración y uso de métodos"
    ```javascript linenums="1" title="Método en un objeto"
    let empleado = {
        nombre: "Carlos Pérez",
        edad: 35,
        puesto: "Desarrollador Web",
        saludar: function() {
            console.log("Hola, mi nombre es " + this.nombre);
        }
    };
    
    empleado.saludar(); // Hola, mi nombre es Carlos Pérez
    ```

### **La Palabra Clave `this`**

El uso de `this` en JavaScript hace referencia al **objeto actual**, lo que nos permite acceder a sus propiedades dentro de un método.

!!! example "Uso de `this` en métodos"
    ```javascript linenums="1" title="Ejemplo de this en objetos"
    let empleado = {
        nombre: "Carlos Pérez",
        edad: 35,
        puesto: "Desarrollador Web",
        mostrarInfo: function() {
            console.log(`${this.nombre}, ${this.puesto}, ${this.edad} años`);
        }
    };
    
    empleado.mostrarInfo(); // Carlos Pérez, Desarrollador Web, 35 años
    ```

---

### **Constructores de Objetos**

Los constructores permiten crear múltiples objetos con la misma estructura de forma eficiente. De esta manera los objetos comparten la misma estructura y métodos. Ahorrando tiempo y código. 

Primero veamos un ejemplo con un constructor sin parámetros.
!!! example "Declaración de un objeto con constructor sin inicialzación de propiedades"
    ```javascript linenums="1" title="Uso de constructores"
    function Empleado() {
        this.nombre = "Carlos Pérez";
        this.edad = 35;
        this.puesto = "Desarrollador";
    }
    
    let emp1 = new Empleado();
    let emp2 = new Empleado();
    
    console.log(emp1.nombre); // Carlos Pérez
    console.log(emp2.nombre); // Carlos Pérez
    ```

Este método es útil para crear objetos con la misma estructura, pero si queremos personalizar los valores de las propiedades, podemos pasar parámetros al constructor.

!!! example "Declaración de un constructor"
    ```javascript linenums="1" title="Uso de constructores"
    function Empleado(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
        this.mostrarNombre = function() {
            console.log(`Mi nombre es ${this.nombre}`);
        }
    }
    // Otra manera de declarar el objeto
    function Articulo(nombre, precio) {
        let obj = {
            nombre: nombre,
            precio: precio
            mostrarPrecio: function() {
                console.log(`El precio de ${this.nombre} es ${this.precio}`);
            }
        }
        return obj;
    }
    
    let emp1 = new Empleado("Carlos Pérez", 35, "Desarrollador");
    let emp2 = new Empleado("Laura Gómez", 29, "Diseñadora");
    let art1 = new Articulo("Camisa", 20);
    
    console.log(emp1.nombre); // Carlos Pérez
    console.log(emp2.nombre); // Laura Gómez
    console.log(art1.nombre); // Camisa
    ```

### **El Operador `new`**

El operador `new` se usa para crear instancias de un constructor. La diferencia con el objeto literal es que permite generar múltiples objetos con la misma estructura sin repetir código.

---

### **Herencia y Prototipos**

En JS, cuando creamos múltimples objetos estos no comparten la misma estructura, por lo que si creamos centenares o miles de objetos estamos usando una cantidad de memoria innecesaria. Para solucionar esto, podemos usar prototipos. En los prototipos, los objetos comparten la misma estructura y métodos, lo que ahorra memoria.

En JavaScript, los objetos pueden **heredar propiedades y métodos** de otros objetos usando prototipos.

!!! example "Ejemplo de herencia con prototipos"
    ```javascript linenums="1" title="Herencia con prototipos"
    function Empleado(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
    
    Empleado.prototype.saludar = function() {
        console.log("Hola, soy " + this.nombre);
    };
    
    let emp1 = new Empleado("Carlos Pérez", 35, "Desarrollador");
    let emp2 = new Empleado("Laura Gómez", 29, "Diseñadora");
    Let emp3 = new Empleado("Juan Pérez", 45, "Gerente");
    emp1.saludar(); // Hola, soy Carlos Pérez
    ```
En el ejemplo anterior los 3 objetos comparten la misma estructura y el método `saludar`. Lo que ahorra memoria y código.

Ahora si tenemos 2 objetos que heredan de empleado como pueden ser director y gerente, podemos hacer lo siguiente:

!!! example "Ejemplo de herencia con prototipos"
    ```javascript linenums="1" title="Herencia con prototipos"
    function Empleado(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
    
    Empleado.prototype.saludar = function() {
        console.log("Hola, soy " + this.nombre);
    };
    
    function Director(nombre, edad, puesto, departamento) {
        Empleado.call(this, nombre, edad, puesto);
        this.departamento = departamento;
    }
    
    Director.prototype = Object.create(Empleado.prototype);
    Director.prototype.constructor = Director;
    
    let dir1 = new Director("Ana López", 50, "Directora", "Marketing");
    dir1.saludar(); // Hola, soy Ana López
    ```

---

### **Ejercicios sobre Objetos en JavaScript**

A continuación, se presentan una serie de ejercicios que ponen en práctica los conceptos aprendidos en este tema, **sin utilizar `class`**, solo con funciones constructoras y prototipos.

---

!!! question "Ejercicio 1: Crear un objeto `círculo` con métodos para calcular su área y perímetro"
    - Crea un objeto `círculo` con la propiedad `radio`.
    - Agrega métodos para calcular el área y el perímetro.

    ??? example "Solución"
        ```javascript linenums="1" title="Objeto Círculo"
        function Circulo(radio) {
            this.radio = radio;
        }
        
        Circulo.prototype.area = function() {
            return Math.PI * this.radio ** 2;
        };
        
        Circulo.prototype.perimetro = function() {
            return 2 * Math.PI * this.radio;
        };
        
        let c = new Circulo(5);
        console.log("Área:", c.area());
        console.log("Perímetro:", c.perimetro());
        ```

---

!!! question "Ejercicio 2: Crear un objeto `rectángulo` con métodos para calcular su área y perímetro"
    - Crea un objeto `rectángulo` con propiedades `base` y `altura`.
    - Agrega métodos para calcular el área y el perímetro.

    ??? example "Solución"
        ```javascript linenums="1" title="Objeto Rectángulo"
        function Rectangulo(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        
        Rectangulo.prototype.area = function() {
            return this.base * this.altura;
        };
        
        Rectangulo.prototype.perimetro = function() {
            return 2 * (this.base + this.altura);
        };
        
        let r = new Rectangulo(10, 5);
        console.log("Área:", r.area());
        console.log("Perímetro:", r.perimetro());
        ```

---

!!! question "Ejercicio 3: Crear un objeto `triángulo` con métodos para calcular su área y perímetro"
    - Crea un objeto `triángulo` con propiedades `base`, `altura` y `lados`.
    - Agrega métodos para calcular el área y el perímetro.

    ??? example "Solución"
        ```javascript linenums="1" title="Objeto Triángulo"
        function Triangulo(base, altura, lado1, lado2, lado3) {
            this.base = base;
            this.altura = altura;
            this.lados = [lado1, lado2, lado3];
        }
        
        Triangulo.prototype.area = function() {
            return (this.base * this.altura) / 2;
        };
        
        Triangulo.prototype.perimetro = function() {
            return this.lados.reduce((a, b) => a + b, 0);
        };
        
        let t = new Triangulo(6, 4, 3, 4, 5);
        console.log("Área:", t.area());
        console.log("Perímetro:", t.perimetro());
        ```

---

!!! question "Ejercicio 4: Crear un objeto `cuadrado` con métodos para calcular su área y perímetro"
    - Crea un objeto `cuadrado` con la propiedad `lado`.
    - Agrega métodos para calcular el área y el perímetro.

    ??? example "Solución"
        ```javascript linenums="1" title="Objeto Cuadrado"
        function Cuadrado(lado) {
            this.lado = lado;
        }
        
        Cuadrado.prototype.area = function() {
            return this.lado ** 2;
        };
        
        Cuadrado.prototype.perimetro = function() {
            return 4 * this.lado;
        };
        
        let q = new Cuadrado(4);
        console.log("Área:", q.area());
        console.log("Perímetro:", q.perimetro());
        ```

---

!!! question "Ejercicio 5: Crear una superclase `Figura` y herencia para las demás figuras"
    - Crea una superclase `Figura` que tenga los métodos `calcularArea()` y `calcularPerimetro()`.
    - Haz que `Círculo`, `Rectángulo`, `Triángulo` y `Cuadrado` hereden de `Figura`.

    ??? example "Solución"
        ```javascript linenums="1" title="Herencia con Prototipos"
        function Figura() {}
        
        Figura.prototype.calcularArea = function() {
            throw "Este método debe ser implementado en la subclase";
        };
        
        Figura.prototype.calcularPerimetro = function() {
            throw "Este método debe ser implementado en la subclase";
        };
        
        function Circulo(radio) {
            this.radio = radio;
        }
        Circulo.prototype = Object.create(Figura.prototype);
        Circulo.prototype.calcularArea = function() {
            return Math.PI * this.radio ** 2;
        };
        Circulo.prototype.calcularPerimetro = function() {
            return 2 * Math.PI * this.radio;
        };
        
        let c = new Circulo(5);
        console.log("Área:", c.calcularArea());
        console.log("Perímetro:", c.calcularPerimetro());
        ```


### **Clases en JavaScript**

Desde ES6, JavaScript permite definir objetos mediante `class`. Las clases proporcionan una sintaxis más clara y sencilla para crear objetos y manejar herencia.

### **Sintaxis de una Clase**
Una clase en JavaScript se declara utilizando la palabra clave `class`.

!!! example "Sintaxis básica de una clase"
    ```javascript linenums="1" title="Sintaxis de class"
    class Empleado {
        let nombre = "Carlos Pérez";
        let edad = 35;
        let puesto = "Desarrollador";
    }
    ```
- **`class`**: Define una nueva clase.

Ahora para utilizar esta clase, podemos crear un empleado y mostrar o modificar su edad:
!!! example "Creación de una instancia de una clase"
    ``` javascript linenums="1" title="Uso de una clase"
    let emp = new Empleado();
    console.log(emp.nombre); // Carlos Pérez
    emp.edad = 36;
    console.log(emp.edad); // 36
    ```

---

### **El Constructor**
El constructor es un método que se ejecuta cuando se crea una nueva instancia de la clase. Todas las clases tiene un constructor por defecto, pero podemos definir uno personalizado. La ventaja es que nos permite inicializar las propiedades de un objeto.

!!! example "Uso del constructor"
    ```javascript linenums="1" title="Constructor en clase"
    class Empleado {
        constructor(nombre, edad, puesto) {
            this.nombre = nombre;
            this.edad = edad;
            this.puesto = puesto;
        }
    }
    let emp = new Empleado("Carlos Pérez", 35, "Desarrollador");
    ```

- **`constructor`**: Método especial para inicializar las propiedades de un objeto.

El uso de la clase sería el mismo pero podemos inicializar las propiedades:

!!! example "Creación de una instancia de una clase"
    ``` javascript linenums="1" title="Uso de una clase"
    let emp = new Empleado("Carlos Pérez", 35, "Desarrollador");
    console.log(emp.nombre); // Carlos Pérez
    emp.edad = 36;
    console.log(emp.edad); // 36
    ```
---

### **Propiedades y Métodos**
Podemos añadir propiedades y métodos a una clase.

!!! example "Propiedades y métodos"
    ```javascript linenums="1" title="Propiedades y métodos en clase"
    class Empleado {
        constructor(nombre, edad, puesto) {
            this.nombre = nombre;
            this.edad = edad;
            this.puesto = puesto;
        }
        saludar() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    }
    ```

---

### **Getters y Setters**
Los `getters` y `setters` permiten acceder y modificar propiedades de forma controlada. la diferencia entre una propiedad **_nombre** (con guion bajo, usada como convención para propiedades internas o privadas) y una propiedad **nombre** (pública). Aunque JavaScript no tiene propiedades privadas reales, esta convención ayuda a indicar que la propiedad no debería ser modificada directamente. 

!!! example "Uso de getters y setters"
    ```javascript linenums="1" title="Getters y Setters"
    class Empleado {
        constructor(nombre, edad, puesto) {
            this._nombre = nombre;
            this.edad = edad;
            this.puesto = puesto;
        }
        get nombre() {
            return this._nombre;
        }
        set nombre(nuevoNombre) {
            this._nombre = nuevoNombre;
        }
    }
    ```

---

### **Herencia con `extends` y `super`**
Podemos crear clases que hereden propiedades y métodos de otras clases usando `extends`. De esta manera, una clase hija puede reutilizar la estructura de una clase padre, no teniendo que redefinir todos los métodos y propiedades. Esto nos permite en programación crear lo que conocemos como una `jeraquía de clases`. Esto nos permite racionalizar el código y hacerlo más mantenible.

!!! example "Ejemplo de herencia"
    ```javascript linenums="1" title="Herencia con extends y super"
    class Empleado {
        constructor(nombre, edad, puesto) {
            this.nombre = nombre;
            this.edad = edad;
            this.puesto = puesto;
        }
    }
    class Director extends Empleado {
        constructor(nombre, edad, puesto, departamento) {
            super(nombre, edad, puesto);
            this.departamento = departamento;
        }
    }
    ```

Una de las ventajas de la herencia es que los objetos creados con la clase hija `Director` pueden acceder a los métodos y propiedades de la clase padre `Empleado`, y podemos tratar una objeto `Director`  como un objeto `Empleado`.

!!! example "Uso de la herencia"
    ```javascript linenums="1" title="Uso de la herencia"
    function tratarEmpleado(emp) {
        console.log(emp.nombre);
        console.log(emp.edad);
        console.log(emp.puesto);
    }
    let dir = new Director("Ana López", 50, "Directora", "Marketing");
    let emp = new Empleado("Carlos Pérez", 35, "Desarrollador");
    console.log(dir.nombre); // Ana López
    console.log(dir.puesto); // Directora
    tratarEmpleado(emp); // Carlos Pérez, 35, Desarrollador
    traerEmpleado(dir); // Ana López, 50, Directora
    ```

---

### **Ejemplo Completo: Figura, Rectángulo y Círculo**

```javascript linenums="1" title="Ejemplo completo de clases"
class Figura {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    area() { throw "Método no implementado"; }
    perimetro() { throw "Método no implementado"; }
}
class Rectangulo extends Figura {
    constructor(nombre, ancho, alto) {
        super(nombre);
        this.ancho = ancho;
        this.alto = alto;
    }
    area() { return this.ancho * this.alto; }
    perimetro() { return 2 * (this.ancho + this.alto); }
}
class Circulo extends Figura {
    constructor(nombre, radio) {
        super(nombre);
        this.radio = radio;
    }
    area() { return Math.PI * this.radio ** 2; }
    perimetro() { return 2 * Math.PI * this.radio; }
}
```

Ahora podemos ver un ejemplo de uso de la jeraquía de clases:
```javascript linenums="1" title="Uso de la jeraquía de clases"
let r = new Rectangulo('Rectangulo', 10, 5);
let c = new Circulo('Círculo', 5);
console.log("Área del rectángulo:", r.nombre, r.area());
console.log("Perímetro del rectángulo:", r.nombre, r.perimetro());
console.log("Área del círculo:", c.nombre, c.area());
console.log("Perímetro del círculo:", c.nombre, c.perimetro());
```


### **¿Cuándo Usar `class` o Prototipos?**

- **`class`** es más intuitivo y fácil de leer.
- **Los prototipos** permiten más flexibilidad en algunos casos avanzados.

En general, **`class` es recomendado** para la mayoría de proyectos modernos, ya que es más claro y se asemeja a la sintaxis de otros lenguajes orientados a objetos.


### **Ejercicios sobre Clases y Herencia**

!!! question "Ejercicio 1: Crear una jerarquía de Vehículos"
    - Crea una clase `Vehiculo` con propiedades `marca`, `modelo`, `velocidad` y un método `arrancar()`.
    - Crea dos clases que hereden de `Vehiculo`: `Coche` (con propiedad `puertas`) y `Moto` (con propiedad `cilindrada`).
    - Implementa los métodos necesarios para cada subclase.

!!! question "Ejercicio 2: Crear una jerarquía de Animales"
    - Crea una clase `Animal` con propiedades `nombre` y `edad`.
    - Crea dos subclases: `Perro` (con método `ladrar()`) y `Gato` (con método `maullar()`).
    - Implementa un método `presentarse()` en la superclase y úsalo en las subclases.
