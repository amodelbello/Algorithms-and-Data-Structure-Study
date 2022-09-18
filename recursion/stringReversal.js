const stringReversal = str => {
  const firstChars = str.slice(0, str.length - 1)
  const lastChar = str.slice(-1)

  if (firstChars === lastChar) {
    return lastChar
  }

  return lastChar + stringReversal(firstChars)
}

module.exports = {
  stringReversal,
}
