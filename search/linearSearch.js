const arrayOfNumbers = require('../data').arrayOfNumbers

const linearSearch = (needle, haystack) => {
  for (let x = 0; x < haystack.length; x++) {
    if (needle === haystack[x]) {
      return true
    }
  }
  return false
}

console.warn('original array', arrayOfNumbers)
const exists = linearSearch(9, arrayOfNumbers)
console.warn('the value is in the array?', exists)
