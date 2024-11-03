import { assertEquals } from 'assert/equals'
import { escapePyramidHead } from '~/2024/05/index.ts'

Deno.test('Test #01', () => {
  const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
  ]

  const result = escapePyramidHead(room)

  assertEquals(typeof result, 'number')
})

Deno.test('Test #02', () => {
  const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
  ]

  const result = escapePyramidHead(room)

  assertEquals(result, 8)
})
Deno.test('Test #03', () => {
  const room = [
    ['T', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['▲', '.', '.', '#'],
    ['.', '#', '#', '#'],
  ]

  const result = escapePyramidHead(room)

  assertEquals(result, 2)
})

Deno.test('Test #04', () => {
  const room = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
  ]

  const result = escapePyramidHead(room)

  assertEquals(result, -1)
})

Deno.test('Test #05', () => {
  const room = [
    ['#', '#'],
    ['▲', 'T'],
  ]

  const result = escapePyramidHead(room)

  assertEquals(result, 1)
})

Deno.test('Test #06', () => {
  const room = [
    ['.', '.', '.'],
    ['T', '▲', '.'],
    ['.', '.', '.'],
  ]

  const result = escapePyramidHead(room)

  assertEquals(result, 1)
})
