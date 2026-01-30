## 🛒 Desafío Integrador: Simulador de Tienda Online

### 🙌 Contexto

Vas a programar un **simulador básico de compras online**.  
Este ejercicio integra lo aprendido sobre:

- Operaciones matemáticas
- Condicionales (`if / else`)
- Operadores lógicos
- Incremento y decremento
- Conversión de tipos
- Condiciones de borde

El foco está en **pensar la lógica**, no en la interfaz.

---

## 🎯 Objetivo del Desafío

Simular el proceso de compra de un producto desde la **terminal**, validando datos, stock y aplicando descuentos cuando corresponda.

---

## 🧠 Antes de programar (IMPORTANTE)

👉 **Dibuja un diagrama de flujo** que represente el sistema.

Piensa en:

- ¿Qué datos entran?
- ¿Qué validaciones se hacen?
- ¿Qué decisiones toma el sistema?
- ¿Cuándo se muestra un error?
- ¿Cuándo la compra es válida?

⚠️ **No empieces a programar sin el diagrama**.

---

## ✍️ Consigna

Tu tarea es escribir un script en JavaScript que:

- Solicite:
  - el **precio** del producto
  - la **cantidad** a comprar
- Convierta los valores ingresados a tipo **number**
- Calcule el **total de la compra**
- Aplique un **descuento del 10%** si el total supera los **$100**
- Simule un **stock disponible**
- Muestre un **resumen final** de la compra en consola

---

## 🧩 Pistas Paso a Paso (sin resolver)

### 🔹 1. Entrada de datos

- Simula los valores usando variables
- Recuerda que los datos ingresados suelen ser **string**
- Usa `Number()` para convertirlos

💡 Pista: ¿Qué pasa si no se puede convertir?

---

### 🔹 2. Cálculo del total

- Multiplica precio por cantidad
- Guarda el resultado en una variable

💡 Pista: valida que precio y cantidad sean mayores a 0

---

### 🔹 3. Descuento

- Si el total es **mayor a 100**, aplica un **10%**
- Si no, mantiene el valor original

💡 Pista: usa una condición `if`

---

### 🔹 4. Simulación de stock

- Supón que el stock inicial es de **10 unidades**
- Verifica si la cantidad solicitada está disponible

Casos a considerar:

- stock exacto
- stock insuficiente
- cantidad mayor al stock
- cantidad igual a 0

💡 Pista: piensa en **condiciones de borde**

---

### 🔹 5. Actualización de stock

- Si la compra es válida:
  - resta las unidades compradas
  - muestra cuántas quedan

💡 Pista: puedes usar operadores de decremento (`--` o `-=`)

---

### 🔹 6. Resumen final

Muestra en consola:

- precio
- cantidad
- total
- descuento (si aplica)
- stock restante

💡 Pista: muestra mensajes claros y ordenados

---

## ⚠️ Condiciones de Borde a Considerar

- Precio igual a 0 o negativo
- Cantidad mayor al stock
- Cantidad igual a 0
- Valores no numéricos
- Total exactamente igual a 100

👉 **No todos los valores son válidos**, protégelos con condicionales.

---

## ▶️ Ejecución del programa

Desde la terminal, en la carpeta del proyecto:

```bash
node index.js
```
