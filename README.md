# Proyecto de Node.js

Este proyecto es un servidor básico creado con Node.js y Express. Proporciona varias rutas que devuelven información sobre la fecha y hora actual, utilizando funciones personalizadas para procesar datos de tiempo.

## Archivos principales

### **index.js**
Es el punto de entrada del servidor. Importa el módulo `chalk` para estilizar la consola y configura el servidor en el puerto `3000`.

### **time.js**
Contiene funciones para manejar y transformar datos relacionados con tiempo y fechas:
- **SacarFechaActual**: Devuelve la fecha y hora en un formato legible.
- **diaNombre**: Devuelve el día de la semana.
- **año**: Devuelve el año actual.
- **dia**: Devuelve el día del mes.
- **month**: Devuelve el mes actual.

### **app.js**
Define las rutas del servidor utilizando Express:
- **GET /**: Bienvenida al servidor.
- **GET /hora**: Muestra la hora actual.
- **GET /day**: Devuelve el nombre del día de la semana.
- **GET /fecha-completa**: Muestra una fecha completa en formato de texto, incluyendo día, mes y año.



