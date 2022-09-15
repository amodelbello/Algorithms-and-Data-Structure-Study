module.exports = {
  insertionSort: arr => {
    let numOps = 0

    if (arr.length < 2) return [arr, numOps]

    // easier to start at 1
    for (let x = 1; x < arr.length; x++) {
      let item = arr[x]
      let position = x - 1

      while (position >= 0) {
        numOps++
        if (arr[position] > item) {
          arr[position + 1] = arr[position]
          position--
        } else {
          break
        }
      }
      arr[position + 1] = item
    }

    return [arr, numOps]
  },
}
