// ***********************************************************************************************
// *                                                                                             *
// *                                 Fco Galan Software Ltd.                                     *
// *                                                                                             *
// *                                          app.js                                             *
// *                                                                                             *
// *                                                                                             *
// *                                 Copyright (c) 1980-2024                                     *
// *                                                                                             *
// ***********************************************************************************************
// 
// ***********************************************************************************************
// * Copyright (c) 1980-2024 FGalan Software and its licensors.                                  *
// * All rights reserved.                                                                        *
// * Without the owner's prior written consent,                                                  *
// * no decompiling or reverse-engineering shall be allowed.                                     *
// ***********************************************************************************************
//
//
// ***********************************************************************************************
// Aplicacion         : Bibliotecas para javascript
// Modulo             : app.js
//                      Ejemplo para importa una biblioteca que esta fuera del proyecto prinicipal
// Lenguaje           : node.js v12.16.3
// Empaquetador       : npm  10.9.0
// Historia de cambios:
// ***********************************************************************************************
// Version  Fecha            Programador  Descripcion del cambio
// -------  ---------------  -----------  --------------------------------------------------------
// 1.0.1.0  2024/12/27       FGalan       Version inicial
//                                        Este programa muestra como im portaruna biblioteca que se ubica
//                                        en una carpeta diferente al repositorio del proyecto principal
//                                        Se usa el comando npm link para simular un repositorio externo
//                                        Documentacion
// ***********************************************************************************************
//

// app.js en prueba-saludar-lib

const saludar = require('saludar-lib');

console.log(saludar('FGalan')); // Salida: Hola, FG!

