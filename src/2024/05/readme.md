# Reto #05: 🔪 Encuentra al asesino 💀💀💀

Estás atrapado en **Silent Hill**, en una habitación cuadrada de tamaño n x n y el temido _Pyramid Head_ (▲) está en algún lugar de la habitación, moviéndose hacia ti (T).

Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, **en cualquiera de las cuatro direcciones cardinales** (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto hacia tu posición. Tu objetivo es determinar si _Pyramid Head_ puede alcanzarte.

La habitación está representada por una matriz n x n:

- T: tu posición (donde te encuentras atrapado).
- ▲: la posición inicial de Pyramid Head.
- .: espacios vacíos donde Pyramid Head puede moverse.
- #: paredes que Pyramid Head no puede atravesar.

Escribe una función que determine si _Pyramid Head_ podrá alcanzarte. Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve -1.

```js
const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

escapePyramidHead(room) // -> 8

const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

escapePyramidHead(room2) // -> 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]

escapePyramidHead(room3) // -> -1
```
