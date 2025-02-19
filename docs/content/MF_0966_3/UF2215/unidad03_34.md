---
Autor: Javier Beteta LLuna
Fecha: 2025-01-20
Keywords: MF_0966_3, UF2215, Programación, JavaScript, Asincronía, Callbacks, Promesas, Async/Await
Form Module: MF_0966_3 - Consulta y manipulación de información contenida en gestores de datos
Form Unit: UF 2215 - Herramientas de sistemas gestores de bases de datos. Pasarelas y medios de conexión
Unit: 03 - Funciones y Manejo de Errores
---

# **Unidad 3: Funciones y Manejo de Errores**

## **3.4 Ejemplo práctico con Async/Await**

Este microservicio proporciona información sobre ciudades españolas almacenadas en un archivo **JSON**.

### **📌 Introducción a las API REST**

Este microservicio sigue el concepto de **API REST (Representational State Transfer)**, un estilo arquitectónico que permite la comunicación entre sistemas a través de HTTP. 

### **Características de una API REST**
- **Basado en recursos**: Cada entidad (en este caso, ciudades) es un recurso accesible mediante una URL única.
- **Uso de métodos HTTP estándar**: Se utilizan métodos como:
  - `GET` para obtener datos.
  - `POST` para enviar datos (no implementado en este ejemplo).
  - `PUT` para actualizar datos.
  - `DELETE` para eliminar recursos.
- **Formato de datos JSON**: Los datos se envían y reciben en formato JSON, lo que facilita la interoperabilidad con otros sistemas.

Este microservicio REST proporciona información sobre **ciudades españolas** mediante dos endpoints:

1. **`GET /ciudades`** → Devuelve la lista completa de ciudades.
2. **`GET /ciudades/:codigo`** → Devuelve la información de una ciudad específica según su código.

## **1️⃣ Archivo JSON con los datos (`ciudades.json`)**

```json linenums="1" title="ciudades.json"
[
    { "codigo": "MAD", "nombre": "Madrid", "poblacion": 3223000 },
    { "codigo": "BCN", "nombre": "Barcelona", "poblacion": 1620000 },
    { "codigo": "VAL", "nombre": "Valencia", "poblacion": 791000 },
    { "codigo": "SEV", "nombre": "Sevilla", "poblacion": 688000 },
    { "codigo": "ZAR", "nombre": "Zaragoza", "poblacion": 674000 },
    { "codigo": "MAL", "nombre": "Málaga", "poblacion": 574000 },
    { "codigo": "MUR", "nombre": "Murcia", "poblacion": 460000 },
    { "codigo": "PAL", "nombre": "Palma de Mallorca", "poblacion": 415000 },
    { "codigo": "BIL", "nombre": "Bilbao", "poblacion": 345000 },
    { "codigo": "VGO", "nombre": "Vigo", "poblacion": 296000 }
]
```

---

## **2️⃣ Servidor Node.js con Express y Async/Await (`server.js`)**

```javascript linenums="1" title="server.js"
const express = require("express");
const fs = require("fs/promises"); // Uso de fs con promesas para async/await
const app = express();
const PORT = 3000;

// Función para leer el JSON de ciudades
async function cargarCiudades() {
    try {
        const data = await fs.readFile("ciudades.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer el archivo JSON", error);
        return [];
    }
}

// 📌 Endpoint para obtener todas las ciudades
app.get("/ciudades", async (req, res) => {
    const ciudades = await cargarCiudades();
    res.json(ciudades);
});

// 📌 Endpoint para obtener una ciudad por su código
app.get("/ciudades/:codigo", async (req, res) => {
    const codigo = req.params.codigo.toUpperCase();
    const ciudades = await cargarCiudades();
    const ciudad = ciudades.find(c => c.codigo === codigo);
    
    if (ciudad) {
        res.json(ciudad);
    } else {
        res.status(404).json({ error: "Ciudad no encontrada" });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

---

## **3️⃣ Cómo Ejecutar el Microservicio**

### **📌 1. Instalar Node.js y Express**
Ejecuta los siguientes comandos:
```sh
npm init -y
npm install express
```

### **📌 2. Crear los archivos**
- Guarda el archivo **`ciudades.json`** con los datos.
- Guarda el archivo **`server.js`** con el código del servidor.

### **📌 3. Iniciar el servidor**
Ejecuta el siguiente comando:
```sh
node server.js
```

---

## **4️⃣ Pruebas con el Servidor**

### **✔ Obtener todas las ciudades**
📌 **Ruta:** `http://localhost:3000/ciudades`

📌 **Ejemplo de respuesta:**
```json
[
    { "codigo": "MAD", "nombre": "Madrid", "poblacion": 3223000 },
    { "codigo": "BCN", "nombre": "Barcelona", "poblacion": 1620000 }
]
```

### **✔ Obtener una ciudad por código**
📌 **Ruta:** `http://localhost:3000/ciudades/MAD`

📌 **Ejemplo de respuesta:**
```json
{ "codigo": "MAD", "nombre": "Madrid", "poblacion": 3223000 }
```

### **❌ Ciudad no encontrada**
📌 **Ruta:** `http://localhost:3000/ciudades/XYZ`

📌 **Respuesta:**
```json
{ "error": "Ciudad no encontrada" }
```

---

---

## **5️⃣ Cómo acceder a los servicios REST**

Existen varias formas de probar y consumir servicios REST. Aquí te mostramos tres métodos: **desde un plugin de VSCode**, **desde un navegador web** y **con Postman**.

### **✔ Opción 1: Usar una Extensión de VSCode (REST Client)**

1. **Instalar la extensión REST Client** en VSCode.
2. Crear un archivo con extensión `.http` o `.rest`.
3. Escribir la petición:

   ```http
   GET http://localhost:3000/ciudades
   ```

4. Hacer clic en **Send Request** para ver la respuesta en JSON.

### **✔ Opción 2: Desde el navegador Chrome**

Si solo necesitas probar las peticiones `GET`, puedes hacerlo desde el navegador:

1. Abre **Google Chrome**.
2. Escribe en la barra de direcciones:
   ```
   http://localhost:3000/ciudades
   ```
3. Verás la respuesta en formato JSON en pantalla.
4. Para buscar una ciudad específica:
   ```
   http://localhost:3000/ciudades/MAD
   ```

Esto mostrará la información de la ciudad de **Madrid**.

### **✔ Opción 3: Usar Postman para probar la API**

1. **Descargar e instalar Postman** desde [postman.com](https://www.postman.com/).
2. Abrir Postman y crear una **nueva solicitud (`New Request`)**.
3. Seleccionar el método **GET** e ingresar la URL:
   ```
   http://localhost:3000/ciudades
   ```
4. Hacer clic en **Send** y ver la respuesta JSON.
5. Para buscar una ciudad específica, cambia la URL:
   ```
   http://localhost:3000/ciudades/MAD
   ```
6. Si deseas probar otros métodos como `POST` o `PUT`, puedes enviar datos JSON en el **Body**.

---


## **Conclusión**
Este microservicio muestra cómo utilizar **async/await en Node.js** para manejar archivos JSON de manera asíncrona y proporcionar datos a través de una API sencilla con **Express.js**. 🚀
