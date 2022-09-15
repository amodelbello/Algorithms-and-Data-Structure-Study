module.exports = {
  selectionSort: arr => {
    let numOps = 0

    for (let x = 0; x < arr.length; x++) {
      let smallestIndex = x
      for (let y = x + 1; y < arr.length; y++) {
        numOps++
        if (arr[y] < arr[smallestIndex]) {
          smallestIndex = y
        }
      }

      if (smallestIndex !== x) {
        const temp = arr[x]
        arr[x] = arr[smallestIndex]
        arr[smallestIndex] = temp
      }
    }
    return [arr, numOps]
  },
}
