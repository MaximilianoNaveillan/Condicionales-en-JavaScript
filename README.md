# 🔀 Guía Paso a Paso: Condicionales en JavaScript (Node.js)

**if · else if · else · Operadores Lógicos · Condiciones de Borde**

Esta versión del ejercicio está pensada para ejecutarse **desde la terminal usando Node.js**, sin navegador ni `index.html`. El foco está en comprender la **lógica condicional** y el **flujo del programa**.

---

## 🎯 Objetivo de la Demo

Al finalizar esta guía, serás capaz de:

- Usar `if`, `else if` y `else`
- Aplicar operadores lógicos (`&&`, `||`, `!`)
- Detectar y manejar condiciones de borde
- Ejecutar un archivo JavaScript desde la terminal con Node.js

---

## ⏱️ Tiempo Estimado

🕛 **30 minutos**

---

## 📂 Estructura del Proyecto

```text
.
├── index.js      # Archivo principal con la lógica del ejercicio
└── README.md     # Esta guía
```

---

## 🧩 Paso 1: Crear el archivo `index.js`

En una carpeta vacía del proyecto, crea un archivo llamado `index.js`.

Este archivo contendrá **todo el código JavaScript** que vamos a ejecutar desde la terminal.

---

## 🧱 Paso 2: Evaluación básica de edad para votar (`if / else`)

Comenzamos con una condición simple.

```javascript
let edad = 20;

if (edad >= 18) {
  console.log('Puede votar 🗳️');
} else {
  console.log('No puede votar ❌');
}
```

🧠 Si la condición del `if` es verdadera, se ejecuta ese bloque. Si no, se ejecuta `else`.

---

## 🧱 Paso 3: Condición intermedia con `else if`

Agregamos el caso especial cuando la persona tiene **17 años**.

```javascript
let edad = 17;

if (edad >= 18) {
  console.log('Puede votar 🗳️');
} else if (edad === 17) {
  console.log('Pronto podrás votar ⏳');
} else {
  console.log('No puede votar ❌');
}
```

🧠 JavaScript evalúa las condiciones **en orden**, de arriba hacia abajo.

---

## 🧱 Paso 4: Complejizar la lógica con operadores lógicos

Ahora combinamos más de una condición.

---

### 🔹 Ejemplo con operador AND (`&&`)

```javascript
let edad = 18;
let tieneDNI = true;

if (edad >= 18 && tieneDNI) {
  console.log('Puede votar 🗳️');
} else {
  console.log('No puede votar ❌');
}
```

---

### 🔹 Ejemplo con operador NOT (`!`)

```javascript
let estaRegistrado = false;

if (!estaRegistrado) {
  console.log('Debe registrarse primero 📝');
}
```

---

## ⚠️ Paso 5: Condiciones de Borde – División por 0

Las condiciones de borde son casos extremos que debemos considerar.

---

### 🔹 División por 0

```javascript
let resultado = 10 / 0;
console.log(resultado);
```

🖥️ Resultado en terminal:

```text
Infinity
```

📌 En JavaScript, dividir por 0 **no genera error**, devuelve `Infinity`.

---

### 🔹 Caso extremo

```javascript
console.log(0 / 0);
```

🖥️ Resultado:

```text
NaN
```

---

### 🛑 Protección ante división inválida

```javascript
let divisor = 0;

if (divisor === 0) {
  console.log('No se puede dividir por 0 ⚠️');
} else {
  console.log(10 / divisor);
}
```

---

## ▶️ Paso 6: Ejecutar el archivo desde la terminal

1. Abre una terminal
2. Navega hasta la carpeta del proyecto
3. Ejecuta el archivo con el comando:

```bash
node index.js
```

🧠 Node.js interpreta el archivo y ejecuta el código línea por línea.

---

## 🚫 Errores Comunes

❌ No estar ubicado en la carpeta correcta al ejecutar `node index.js`

❌ No tener Node.js instalado

❌ Usar `=` en lugar de `===` en condiciones

---

## 🧪 Desafío Final

👉 Modifica el archivo para que:

- Solo pueda votar si es mayor de edad **y** está registrado
- Si tiene 17 años **y** está registrado, mostrar un mensaje especial
- Evitar cualquier división por 0

---

## ✅ Conclusión

Ejecutar JavaScript desde la terminal permite enfocarse en la **lógica pura**, sin distracciones del navegador. Dominar condicionales en Node.js es clave para avanzar a:

- Scripts
- Backend con Node.js
- APIs y validaciones

📘 Si esta demo te resulta clara, estás listo para el siguiente paso 🚀
