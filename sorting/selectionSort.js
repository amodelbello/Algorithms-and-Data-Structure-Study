const arrayOfNumbers = require('../data').arrayOfNumbers

const selectionSort = arr => {
  console.warn('original array', arr)

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

  console.warn('sorted array', arr)
  console.warn('number of elements', arr.length)
  console.warn('number of operations', numOps)
}

selectionSort(arrayOfNumbers)
