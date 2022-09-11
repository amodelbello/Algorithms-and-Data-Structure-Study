const arrayOfNumbers = require('../data').arrayOfNumbers

const insertionSort = arr => {
  let numOps = 0

  console.warn('original array', arr)

  if (arr.length < 2) return arr

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

  console.warn('sorted array', arr)
  console.warn('number of elements', arr.length)
  console.warn('number of operations', numOps)
}

insertionSort(arrayOfNumbers)
