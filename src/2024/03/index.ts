export function findSafestPath(dream: number[][]) {
  const cost: number[][] = JSON.parse(JSON.stringify(dream))

  for (let i = 1; i < cost[0].length; i++) {
    cost[0][i] += cost[0][i - 1]
  }

  for (let i = 1; i < cost.length; i++) {
    cost[i][0] += cost[i - 1][0]
  }

  for (let i = 1; i < cost.length; i++) {
    for (let j = 1; j < cost[0].length; j++) {
      cost[i][j] += Math.min(
        cost[i - 1][j],
        cost[i][j - 1],
      )
    }
  }

  return cost.at(-1)?.at(-1)
}
