const staircase = numSteps => {
  if (numSteps <= 2) {
    return Math.max(0, numSteps)
  }

  if (numSteps === 3) {
    return 4
  }

  return (
    staircase(numSteps - 1) + staircase(numSteps - 2) + staircase(numSteps - 3)
  )
}

module.exports = {
  staircase,
}
