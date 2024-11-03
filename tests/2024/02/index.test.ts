import { assertEquals } from 'assert'
import { battleHorde } from '~/2024/02/index.ts'

Deno.test('Test #01', () => {
  const zombies = '242'
  const humans = '334'
  const result = battleHorde(zombies, humans)

  assertEquals(typeof result, 'string')
})

Deno.test('Test #02', () => {
  const result = battleHorde('242', '334')

  assertEquals(result, '2h')
})

Deno.test('Test #03', () => {
  const result = battleHorde('444', '282')

  assertEquals(result, 'x')
})

Deno.test('Test #04', () => {
  const result = battleHorde('555', '666')

  assertEquals(result, '3h')
})

Deno.test('Test #05', () => {
  const result = battleHorde('321', '123')

  assertEquals(result, 'x')
})

Deno.test('Test #06', () => {
  const result = battleHorde('4598', '7682')

  assertEquals(result, '3z')
})

Deno.test('Test #07', () => {
  const result = battleHorde('8989898999', '7779998811')

  assertEquals(result, '20z')
})

Deno.test('Test #08', () => {
  const result = battleHorde('57685849323', '98765438965')

  assertEquals(result, '10h')
})
