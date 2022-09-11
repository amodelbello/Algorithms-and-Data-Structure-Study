const arrayOfNumbers = require('../data').arrayOfNumbers

const sortFunction = arr => {
  console.warn('original array', arr)

  let numOps = 0

  console.warn('original array', arr)
  console.warn('number of elements', arr.length)
  console.warn('number of operations', numOps)
}

sortFunction(arrayOfNumbers)
