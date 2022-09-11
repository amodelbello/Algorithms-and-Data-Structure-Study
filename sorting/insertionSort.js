const arrayOfNumbers = require('../data').arrayOfNumbers

const insertionSort = arr => {
  let numOps = 0

  console.warn('original array', arr)

  if (arr.length < 2) return arr

  for (let x = 0; x < arr.length; x++) {
    let item = arr[x + 1]
    let shiftIndex = x
    let hasShifted = false
    while (item < arr[shiftIndex]) {
      numOps++
      arr[shiftIndex + 1] = arr[shiftIndex]
      shiftIndex--
      hasShifted = true
    }
    if (hasShifted) {
      arr[shiftIndex + 1] = item
    }
  }
  console.warn('sorted array', arr)
  console.warn('number of elements', arr.length)
  console.warn('number of operations', numOps)
  console.warn(arr[-1])
}

insertionSort(arrayOfNumbers)
