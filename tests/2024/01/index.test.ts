import { assertEquals } from 'assert'
import { createMagicPotion } from '~/2024/01/index.ts'

Deno.test('Ejemplo 1', () => {
  const potions = [4, 5, 6, 2]
  const goal = 8

  assertEquals(createMagicPotion(potions, goal), [2, 3])
})

Deno.test('Ejemplo 2', () => {
  const potions = [1, 2, 3, 4]
  const goal = 9

  assertEquals(createMagicPotion(potions, goal), undefined)
})

Deno.test('Ejemplo 3', () => {
  const potions = [1, 2, 3, 4]
  const goal = 5

  assertEquals(createMagicPotion(potions, goal), [1, 2])
})

Deno.test('Test #01', () => {
  const potions = [4, 5, 6, 2]
  const goal = 8

  const result = createMagicPotion(potions, goal)

  assertEquals(typeof result, 'object')
  assertEquals(Array.isArray(result), true)
})

Deno.test('Test #02', () => {
  const result = createMagicPotion([13, 5, 6, 2], 8)

  assertEquals(result, [2, 3])
})

Deno.test('Test #03', () => {
  const result = createMagicPotion([11, 3, 7, 5], 10)

  assertEquals(result, [1, 2])
})

Deno.test('Test #04', () => {
  const result = createMagicPotion([4, 3, 2, 3, 4], 6)

  assertEquals(result, [0, 2])
})

Deno.test('Test #05', () => {
  const result = createMagicPotion([0, 0, -2, 3], 2)

  assertEquals(result, undefined)
})

Deno.test('Test #06', () => {
  const result = createMagicPotion([10, 5, 2, 3, 7, 5], 10)

  assertEquals(result, [3, 4])
})

Deno.test('Test #07', () => {
  const result = createMagicPotion([1, 2, 3, 4, 5], 8)

  assertEquals(result, [2, 4])
})

Deno.test('Test #08', () => {
  const result = createMagicPotion([5, 1, 4, 6, 2], 9)

  assertEquals(result, [0, 2])
})

Deno.test('Test #09', () => {
  const result = createMagicPotion([1, -2, 3, -4, 5], -1)

  assertEquals(result, [0, 1])
})

Deno.test('Test #10', () => {
  const result = createMagicPotion([10, 20, 30, 40], 50)

  assertEquals(result, [1, 2])
})

Deno.test('Test #11', () => {
  const result = createMagicPotion([], 10)

  assertEquals(result, undefined)
})
