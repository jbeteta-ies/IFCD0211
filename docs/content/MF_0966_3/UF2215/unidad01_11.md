---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Bases de Datos, CMS
Form Module: MF 0966_3 - Consulta y manipulación de información contenida en gestores de datos 
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 01 - Configuración del Entorno y Fundamentos de JavaScript
---

# Unidad 1: Configuración del Entorno y Fundamentos de JavaScript

## 1.1 Configuración del Entorno de Desarrollo

### **Objetivos**

1. Configurar un entorno de desarrollo para escribir y ejecutar código en JavaScript.
2. Familiarizarse con herramientas clave: Node.js, Visual Studio Code (VSCode) y la consola.
3. Ejecutar un programa básico en JavaScript para validar la configuración.

---

### **1.1.1 Instalación de Node.js y configuración básica**

#### **¿Qué es Node.js y por qué lo necesitamos?**

Node.js es un entorno de ejecución para JavaScript construido sobre el motor **V8** de Google Chrome. Permite ejecutar JavaScript en el lado del servidor, fuera del navegador. Esto lo convierte en una herramienta fundamental para el desarrollo de aplicaciones modernas, como servidores web, herramientas de línea de comandos y aplicaciones de tiempo real.

---

##### **Historia de Node.js**

- **Lanzamiento inicial:** Node.js fue creado por **Ryan Dahl** y lanzado en **2009**.
- **Motivación:** Ryan Dahl desarrolló Node.js para solucionar problemas comunes en los servidores web tradicionales, como la falta de eficiencia al manejar múltiples conexiones simultáneas.
- **Primera versión estable:** La versión 0.10 fue lanzada en marzo de 2013, marcando el inicio de su adopción masiva.
- **Ecosistema en crecimiento:** Desde 2015, el desarrollo de Node.js es administrado por la **Node.js Foundation**, que posteriormente se fusionó con la **JS Foundation** en 2019 para formar la **OpenJS Foundation**.
- **Licencia:** Node.js está disponible bajo la licencia **MIT**, lo que permite su uso, modificación y distribución de forma gratuita, incluso en proyectos comerciales.

---

##### **Modo de Funcionamiento**

**Modelo de ejecución asíncrono:** Node.js utiliza un modelo basado en eventos que permite manejar múltiples solicitudes al mismo tiempo sin bloquear el servidor. Esto lo hace ideal para aplicaciones que requieren un manejo intensivo de entradas y salidas (I/O).

**Motor V8:** Node.js está construido sobre el motor V8 de Google Chrome, que convierte el código JavaScript en código máquina, asegurando un rendimiento óptimo.

**Ejecución concurrente:** Aunque utiliza un solo hilo, Node.js puede manejar múltiples conexiones simultáneamente mediante un bucle de eventos (`event loop`) y callbacks.

---

##### **Características Clave**

- **Modelo No Bloqueante:** Las operaciones I/O no bloquean el flujo del programa, lo que permite manejar múltiples tareas de manera eficiente.
- **Compatibilidad Cross-Platform:** Funciona en sistemas operativos como Windows, macOS y Linux.
- **Ecosistema de Paquetes (NPM):** Node.js incluye el administrador de paquetes más grande del mundo, NPM, que cuenta con más de un millón de paquetes.
- **Aplicaciones en Tiempo Real:** Ideal para aplicaciones como chats, juegos en línea y transmisiones en tiempo real.
- **Escalabilidad:** Gracias a su arquitectura basada en eventos, Node.js puede manejar un gran número de conexiones simultáneamente.

---

##### **Ventajas**

- **Velocidad:** Su motor V8 es altamente eficiente.
- **Ecosistema Extenso:** La comunidad de NPM ofrece soluciones para casi cualquier tarea.
- **Reutilización de Conocimientos:** Permite usar JavaScript en el frontend y el backend.
- **Ideal para Microservicios:** Su arquitectura ligera es adecuada para diseñar aplicaciones modulares.

##### **Limitaciones**

- **Operaciones Intensivas en CPU:** Node.js no es la mejor opción para tareas que requieren un alto procesamiento, como cálculos complejos.
- **Callback Hell:** Aunque mitiga esto con Promises y `async/await`, el uso intensivo de callbacks puede hacer que el código sea difícil de mantener.

---

##### **Casos de Uso Reales**

- **Netflix:** Utiliza Node.js para mejorar la velocidad de carga de su interfaz de usuario.
- **Uber:** Emplea Node.js para manejar solicitudes en tiempo real.
- **PayPal:** Mejoró el rendimiento de sus aplicaciones migrando a Node.js.

---

##### **Enlaces a Soluciones con Node.js**

- **[Express.js](https://expressjs.com):** Framework minimalista para construir aplicaciones web y APIs.
- **[Socket.io](https://socket.io):** Biblioteca para crear aplicaciones en tiempo real como chats y juegos.
- **[NestJS](https://nestjs.com):** Framework para desarrollar aplicaciones backend modulares y escalables.
- **[Electron](https://www.electronjs.org):** Herramienta para crear aplicaciones de escritorio multiplataforma con Node.js.
- **[Strapi](https://strapi.io):** CMS basado en Node.js para crear APIs rápidas y personalizables.

---

##### **Recursos Adicionales**

- **Documentación oficial de Node.js:** [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- **Guía para principiantes:** [https://www.freecodecamp.org/news/learn-node-js-beginners-guide/](https://www.freecodecamp.org/news/get-started-with-nodejs/)
- **Tutorial en video:** [Net Ninja - Curso de Node.js](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)

---

#### **Descargar e instalar Node.js**

1. Accede al sitio oficial de Node.js: [https://nodejs.org](https://nodejs.org).
2. Selecciona la versión **LTS (Long Term Support)**.
3. Descarga y sigue el proceso de instalación según tu sistema operativo.

#### **Descargar e instalar Node.js en Windows**

1. **Accede al sitio oficial de Node.js:**

     - Ve a [https://nodejs.org](https://nodejs.org).
     - Encontrarás dos opciones principales de descarga:
        
        !!! info "Versiones de Node.js"
             - **LTS (Long Term Support):** Recomendado para la mayoría de los usuarios, ya que es más estable.
             - **Current:** Incluye las últimas características, pero podría ser menos estable.

     - **Selecciona LTS** para garantizar estabilidad en el curso.

2. **Descarga el instalador:**

     - Haz clic en el botón de descarga que corresponde a tu sistema operativo (Windows detectará automáticamente la versión adecuada, ya sea de 32 o 64 bits).

3. **Ejecuta el instalador:**

     - Busca el archivo descargado (generalmente estará en la carpeta `Descargas`) y haz doble clic para abrirlo.

4. **Sigue los pasos del asistente de instalación:**

     - **Pantalla de bienvenida:**
   
        !!! info "Asistente de instalación de Node.js"
                 
             - Haz clic en `Next` para continuar.
   
     - **Acuerdo de licencia:**

        !!! info "Lee los términos de la licencia"
   
            - Lee los términos de la licencia y haz clic en `I accept the terms in the License Agreement`, luego en `Next`.
   
     - **Carpeta de instalación:**

        !!! info "Selecciona la carpeta de instalación"
   
            - Selecciona la carpeta donde deseas instalar Node.js (por defecto es `C:\Program Files\nodejs`).
            - Se recomienda dejar la ubicación predeterminada y hacer clic en `Next`.
   
     - **Componentes a instalar:**

        !!! info "Selecciona los componentes"

             - Asegúrate de que todas las opciones estén seleccionadas:
                    
            ???+ note "Componentes a instalar"

                 - **Node.js runtime:** El núcleo del entorno de ejecución.
                 - **npm package manager:** Administrador de paquetes para instalar bibliotecas.
                 - **Add to PATH:** Agrega Node.js a las variables de entorno del sistema (muy importante).
                 - **Online documentation shortcuts:** Acceso rápido a la documentación en línea.

             - Haz clic en `Next`.

     - **Herramientas adicionales para la compilación nativa (opcional):**

        !!! info "Herramientas adicionales"
             - En algunos casos, el instalador puede ofrecer la opción de instalar herramientas adicionales como **Python** o compiladores de C++ necesarios para algunos paquetes.
             - Si aparece esta opción, selecciona el checkbox y haz clic en `Next`.

     - **Instalación:**

        !!! info "Proceso de instalación"
              - Haz clic en `Install` y espera a que el instalador copie los archivos necesarios.

     - **Finalización:**

        !!! info "Finalización de la instalación"
              - Una vez terminada la instalación, marca la opción de "Automatically install necessary tools" (si está disponible) y haz clic en `Finish`.
            


#### **Validación de la instalación**

1. Abre la terminal o consola de comandos.
2. Ejecuta los siguientes comandos para verificar que Node.js y npm están instalados correctamente:

    ```bash linenums="1" title="Comandos de verificación"
    node -v
    npm -v
    ```


3. Deberías ver los números de versión correspondientes.

#### **Ejecutar un primer script en Node.js**

1. Crea un archivo `hello.js` con el siguiente contenido:
   
   ```javascript linenums="1" title="Hola Mundo!"
   console.log("¡Hola, mundo!");
   ```

2. En la consola, navega hasta el directorio donde guardaste el archivo y ejecuta:

```bash linenums="1" title="Ejecutar programa hello.js"
   node hello.js
```

---

### **1.1.2 Uso de Visual Studio Code (VSCode) como editor principal**

#### **Introducción a VSCode**
Visual Studio Code es uno de los editores más populares para desarrollo, con soporte para múltiples lenguajes y extensiones.

#### **Instalación y configuración**

1. Descarga desde el sitio oficial: [https://code.visualstudio.com](https://code.visualstudio.com).
2. Instálalo y abre la aplicación.

#### **Configuración básica**

1. Personaliza el tema visual desde las opciones de configuración.
2. Instala las siguientes extensiones recomendadas:
    
    !!! info "Extensiones Recomendadas"
         - **Live Server:** Permite visualizar páginas web en tiempo real.
         - **Prettier:** Formateo automático del código.
         - **ESLint:** Detección de errores y problemas en el código.
         - **JavaScript (ES6) Code Snippets:** Accesos rápidos para escribir código.


#### **Creación y ejecución de un programa en VSCode**

1. Abre un nuevo proyecto en VSCode.
2. Crea un archivo `app.js` con el siguiente contenido:
   
   ```javascript linenums="1" title="Programa de ejemplo"
   const saludo = "¡Hola desde VSCode!";
   console.log(saludo);
   ```

3. Ejecuta el programa desde la terminal integrada de VSCode:
    
    !!! info "Ejecutar programa en VSCode"
         - Abre la terminal integrada con `Ctrl + \`.
         - Escribe: 
            ```bash linenums="1" title="Ejecutar programa app.js"
            node app.js
            ```
   

---

### **1.1.3 Introducción al uso de la consola y ejecución de programas**


#### **¿Qué es la consola?**

La consola es una herramienta para interactuar con el sistema operativo y ejecutar comandos.

#### **Comandos básicos**

1. Navegar entre carpetas:
   
   ```bash
   cd nombre-de-la-carpeta
   ```
2. Listar archivos:

    !!! info "Comandos para listar archivos"
         - En Windows: `dir`
         - En macOS/Linux: `ls`
3. Crear y eliminar archivos:

   ```bash
   touch archivo.js
   rm archivo.js
   ```

#### **Uso del REPL de Node.js**

1. Inicia el entorno interactivo ejecutando:
   ```bash
   node
   ```
2. Escribe comandos simples:

   ```javascript linenums="1" title="Ejemplo en el REPL"
   console.log("Hola desde el REPL");
   2 + 2;
   ```

---

### **Actividad Práctica**

1. Configura el entorno completo instalando Node.js y VSCode.
2. Crea una carpeta llamada `proyecto_inicial`.
3. Dentro de la carpeta, crea un archivo `index.js` con este código:

    !!! example "Código de ejemplo"
        
        ```javascript linenums="1" title="Programa de bienvenida"
            const nombre = "Estudiante";
            console.log(`¡Bienvenido, ${nombre}, a la programación con JavaScript!`);
        ```
4. Ejecuta el programa en la consola.

    ```bash linenums="1" title="Ejecutar programa index.js"
    node index.js
    ```



#### **Reto Extra**

1. Investiga cómo instalar un paquete de npm.
2. Instala `chalk` y úsalo para cambiar el color del texto en la consola:
   ```bash
   npm install chalk
   ```
3. Código de ejemplo:
   ```javascript linenums="1" title="Uso de chalk"
   import chalk from 'chalk';
   console.log(chalk.green("¡Texto en color verde!"));
   ```

---

### **Evaluación**

Los estudiantes pueden:
    
??? important "Evaluación"

    1. Ejecutar scripts básicos en Node.js.
    2. Crear y ejecutar programas en VSCode.
    3. Usar la consola para navegar y gestionar archivos.

---