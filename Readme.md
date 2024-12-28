# Bibliotecas compartida en npm

### 1. **¿Como funcionan las librerias en npm?**

Las librerias en **npm** son paquetes de codigo que se pueden instalar en un proyecto particular para añadir funcionalidades reutilizables. Estos paquetes pueden ser librerias, herramientas, frameworks, utilidades, etc. Los paquetes en npm estan disponibles en su registro central, y se puede instalar, actualizar y gestionar dependencias a traves de la herramienta de linea de comandos de npm.

### 2. **Pasos para usar una propia libreria desde npm**

#### Paso 1: **Prepara el proyecto**

Primero, crear una carpeta para la aplicacion principal y navega hasta ella:

```bash
mkdir prueba-saludar-lib
cd prueba-saludar-lib
mkdir src
cd src
```

Luego, iniciar el proyecto con el comando:

```bash
npm init
```

Este comando pedira informacion sobre la aplicacion, como su nombre, version, descripcion, entrada principal (`main, index, etc`), etc. Si no quieres pasar por todas las preguntas, puedes usar `npm init -y` para aceptar los valores por defecto.

#### Paso 2: **Agregar la libreria al proyecto**

La libreria publicada esta disponible desde npm. Se podra instalar usando el comando:

```bash
npm install saludar-lib
```

En el archivo `package.json` se añadiran las lineas

```bash
  "dependencies": {
    "saludar-lib": "^1.0.0"
  }
```

#### Paso 3: **Escribir el programa principal**

Ahora, se puede importar la libreria en el proyecto de prueba:

```javascript
// app.js en prueba-saludar-lib
const saludar = require("saludar-lib");

console.log(saludar("FG")); // Salida: Hola, FG!
```

#### Paso 4: **Ejecutar el programa principal**

Ejecutar el ejemplo usando el comando:

```bash
node app.js
```
