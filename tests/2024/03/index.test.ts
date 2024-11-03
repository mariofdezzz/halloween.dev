import { assertEquals } from 'assert/equals'
import { findSafestPath } from '~/2024/03/index.ts'

Deno.test('Test #01', () => {
  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  const result = findSafestPath(dream)

  assertEquals(typeof result, 'number')
})

Deno.test('Test #02', () => {
  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  const result = findSafestPath(dream)

  assertEquals(result, 7)
})

Deno.test('Test #03', () => {
  const dream = [
    [5, 9],
    [4, 2],
  ]
  const result = findSafestPath(dream)

  assertEquals(result, 11)
})

Deno.test('Test #04', () => {
  const dream = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]
  const result = findSafestPath(dream)

  assertEquals(result, 5)
})

Deno.test('Test #05', () => {
  const dream = [
    [1, 2, 3],
    [3, 2, 1],
    [4, 4, 4],
  ]
  const result = findSafestPath(dream)

  assertEquals(result, 10)
})

Deno.test('Test #06', () => {
  const dream = [
    [1, 2],
    [3, 4],
    [6, 5],
    [7, 8],
  ]
  const result = findSafestPath(dream)

  assertEquals(result, 20)
})

Deno.test('Test #07', () => {
  const dream = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const result = findSafestPath(dream)

  assertEquals(result, 21)
})
