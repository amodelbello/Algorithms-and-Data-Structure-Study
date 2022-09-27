const arraySum = arr => {
  if (arr.length <= 0) {
    return 0
  }
  if (arr.length === 1) {
    return arr[0]
  }

  return arr[0] + arraySum(arr.slice(1, arr.length))
}

module.exports = {
  arraySum,
}
