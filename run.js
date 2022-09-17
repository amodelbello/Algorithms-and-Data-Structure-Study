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

// Data Structures
const Stack = require('./dataStructures/stack').Stack
const Queue = require('./dataStructures/queue').Queue

// Sort our large array
/* console.warn(`Sorting ${largeArray.length.toLocaleString()} elements...`)
 * const t0 = performance.now()
 * const [sortedArray, numSortOps] = insertionSort([...largeArray])
 * const t1 = performance.now()
 * console.log(
 *   `Sorting function took: ${(t1 - t0).toFixed(
 *     0,
 *   )} ms, ${numSortOps.toLocaleString()} operations`,
 * )
 *  */

// Search
/* console.warn('\nStarting search...')
 *
 * const [exists, numOps] = binarySearch(77, sortedArray)
 * const [exists2, numOps2] = linearSearch(77, largeArray)
 *
 * console.warn(`binary: ${exists}, ${numOps}`)
 * console.warn(`linear: ${exists2}, ${numOps2}`)
 *  */
/* console.warn('number of operations', numOps) */

// Stack
const stack = new Stack()

stack
  .push('hello')
  .push('nananana')
  .push(44)
  .push(false)
  .push(true)
  .push('the end')
console.warn('this is the end', stack.peek())
const theEnd = stack.pop()
console.warn('theEnd?', theEnd)
console.warn('this is not the end', stack.peek())
console.warn('this is THE END', stack.push('THE END').peek())

console.warn('')

// Queue
const queue = new Queue()

queue
  .enqueue('the beginning')
  .enqueue('nananana')
  .enqueue(44)
  .enqueue(false)
  .enqueue(true)
  .enqueue('the end')
console.warn('this is the beginning', queue.peek())
const theBeginning = queue.dequeue()
console.warn('theEnd?, no theBeginning', theBeginning)
console.warn('this is not the beginning', queue.peek())
console.warn('this is not THE BEGINNING', queue.enqueue('THE BEGINNING').peek())
