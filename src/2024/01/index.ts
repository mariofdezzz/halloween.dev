export function createMagicPotion(potions: number[], target: number) {
  let bIndex
  const aIndex = potions.findIndex((a, idx) => {
    bIndex = potions.slice(0, idx).findIndex((b) => a + b === target)

    return bIndex > -1
  })

  return aIndex > -1 ? [bIndex, aIndex] : undefined
}
