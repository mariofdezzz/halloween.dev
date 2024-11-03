import { assertEquals } from 'assert/equals'
import { findTheKiller } from '~/2024/04/index.ts'

Deno.test('Test #01', () => {
  const whisper = 'd~~~~~a'
  const suspects = [
    'Dracula',
    'Freddy Krueger',
    'Jason Voorhees',
    'Michael Myers',
  ]

  const result = findTheKiller(whisper, suspects)

  assertEquals(typeof result, 'string')
})

Deno.test('Test #02', () => {
  const whisper = 'd~~~~~a'
  const suspects = [
    'Dracula',
    'Freddy Krueger',
    'Jason Voorhees',
    'Michael Myers',
  ]

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, 'Dracula')
})

Deno.test('Test #03', () => {
  const whisper = '~r~dd~'
  const suspects = ['Freddy', 'Freddier', 'Fredderic']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, 'Freddy,Freddier,Fredderic')
})

Deno.test('Test #04', () => {
  const whisper = '~r~dd$'
  const suspects = ['Freddy', 'Freddier', 'Fredderic']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, '')
})

Deno.test('Test #05', () => {
  const whisper = 'mi~~def'
  const suspects = ['Midudev', 'Midu', 'Madeval']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, '')
})

Deno.test('Test #06', () => {
  const whisper = '~~~~~~'
  const suspects = ['Pennywise', 'Leatherface', 'Agatha']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, 'Pennywise,Leatherface,Agatha')
})

Deno.test('Test #07', () => {
  const whisper = '~~~~~~$'
  const suspects = ['Pennywise', 'Leatherface', 'Agatha']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, 'Agatha')
})

Deno.test('Test #08', () => {
  const whisper = 's~v~r~'
  const suspects = ['Severus Snape', 'Sirius Black', 'Salazar Slytherin']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, 'Severus Snape')
})

Deno.test('Test #09', () => {
  const whisper = '~~~~~y$'
  const suspects = ['Chucky', 'Tiffany', 'Freddy', 'Mickey']

  const result = findTheKiller(whisper, suspects)

  assertEquals(result, 'Chucky,Freddy,Mickey')
})
