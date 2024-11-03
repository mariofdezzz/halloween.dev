export function findTheKiller(whisper: string, suspects: string[]) {
  const _suspects = whisper.endsWith('$')
    ? suspects.filter((v) => v.length === whisper.length - 1)
    : suspects
  const _whisper = whisper.endsWith('$')
    ? whisper.slice(0, whisper.length - 1)
    : whisper

  const killers = _suspects.filter((s) =>
    _whisper.split('').every((char, idx) =>
      char === '~' ||
      s[idx]?.toLocaleLowerCase() === char.toLocaleLowerCase()
    )
  )

  return killers.join(',')
}
