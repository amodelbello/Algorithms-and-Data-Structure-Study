const countX = str => {
  const oneIfX = char => (char === 'x' || char === 'X' ? 1 : 0)

  if (str.length <= 1) {
    return oneIfX(str)
  }

  const firstChar = str.slice(0, 1)
  const rest = str.slice(1, str.length)

  return oneIfX(firstChar) + countX(rest)
}

module.exports = {
  countX,
}
