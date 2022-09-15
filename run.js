// Get data to work with
const arrayOfNumbers = require('./data').arrayOfNumbers
const largeArray = require('./data').largeArray.map(Number)

// Sorting algorithms
const bublleSort = require('./sorting/bubbleSort').bubbleSort
const insertionSort = require('./sorting/insertionSort').insertionSort
const selectionSort = require('./sorting/selectionSort').selectionSort

// Search algorithms
const binarySearch = require('./search/binarySearch').binarySearch
const linearSearch = require('./search/linearSearch').linearSearch

// Sort our large array
console.warn(`Sorting ${largeArray.length.toLocaleString()} elements...`)
const t0 = performance.now()
const [sortedArray, numSortOps] = insertionSort([...largeArray])
const t1 = performance.now()
console.log(
  `Sorting function took: ${(t1 - t0).toFixed(
    0,
  )} ms, ${numSortOps.toLocaleString()} operations`,
)

// Search
console.warn('\nStarting search...')

const [exists, numOps] = binarySearch(77, sortedArray)
const [exists2, numOps2] = linearSearch(77, largeArray)

console.warn(`binary: ${exists}, ${numOps}`)
console.warn(`linear: ${exists2}, ${numOps2}`)

/* console.warn('number of operations', numOps) */
