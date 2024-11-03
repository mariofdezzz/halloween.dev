export function battleHorde(zombies: string, humans: string) {
  const [z, h] = zombies.split('').reduce(([prevZ, prevH], zombie, idx) => {
    const z = Number(zombie) + prevZ
    const h = Number(humans[idx]) + prevH

    return [
      z > h ? z - h : 0,
      h > z ? h - z : 0,
    ]
  }, [0, 0])

  return z ? z + 'z' : h ? h + 'h' : 'x'
}
