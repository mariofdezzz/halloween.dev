type Position = [number, number]
type Room = string[][]

const costs = {
  '▲': 0,
  '.': 1,
  'T': 1,
}
const directions: Position[] = [
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
  [-1, 0], // Up
]

export function escapePyramidHead(room: Room) {
  const n = room.length
  const [startX, startY] = getStart(room)

  const priorityQueue: [number, number, number][] = [[
    0,
    startX,
    startY,
  ]]
  const costMatrix = Array.from(
    { length: n },
    () => Array(n).fill(Infinity),
  )
  costMatrix[startX][startY] = 0

  while (priorityQueue.length > 0) {
    priorityQueue.sort(([a], [b]) => a - b)
    const [currentCost, x, y] = priorityQueue.shift()!

    if (room[x][y] === 'T') return currentCost

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        room[nx][ny] !== '#'
      ) {
        const newCost = currentCost + costs[room[nx][ny] as keyof typeof costs]

        if (newCost < costMatrix[nx][ny]) {
          costMatrix[nx][ny] = newCost
          priorityQueue.push([newCost, nx, ny])
        }
      }
    }
  }

  return -1
}

function getStart(room: Room): Position {
  const n = room.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (room[i][j] === '▲') return [i, j]
    }
  }

  return [-1, -1]
}
