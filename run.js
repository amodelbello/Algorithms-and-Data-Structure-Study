// Get data to work with
const arrayOfNumbers = require('./data').arrayOfNumbers
const largeArray = require('./data').largeArray.map(Number)

// Sorting algorithms
const bublleSort = require('./algorithms/sorting/bubbleSort').bubbleSort
const insertionSort =
  require('./algorithms/sorting/insertionSort').insertionSort
const selectionSort =
  require('./algorithms/sorting/selectionSort').selectionSort
const quicksort = require('./algorithms/sorting/quicksort').quicksort

// Search algorithms
const binarySearch = require('./algorithms/search/binarySearch').binarySearch
const linearSearch = require('./algorithms/search/linearSearch').linearSearch

// Data Structures
const Stack = require('./dataStructures/stack').Stack
const Queue = require('./dataStructures/queue').Queue

// Recursion
const arraySum = require('./recursion/arraySum').arraySum
const stringReversal = require('./recursion/stringReversal').stringReversal
const countX = require('./recursion/countX').countX
const staircase = require('./recursion/staircase').staircase
const fib = require('./recursion/fibonacci').fib

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
/* const stack = new Stack()
 *
 * stack
 *   .push('hello')
 *   .push('nananana')
 *   .push(44)
 *   .push(false)
 *   .push(true)
 *   .push('the end')
 * console.warn('this is the end', stack.peek())
 * const theEnd = stack.pop()
 * console.warn('theEnd?', theEnd)
 * console.warn('this is not the end', stack.peek())
 * console.warn('this is THE END', stack.push('THE END').peek())
 *
 * console.warn('')
 *  */

// Queue
/* const queue = new Queue()
 *
 * queue
 *   .enqueue('the beginning')
 *   .enqueue('nananana')
 *   .enqueue(44)
 *   .enqueue(false)
 *   .enqueue(true)
 *   .enqueue('the end')
 * console.warn('this is the beginning', queue.peek())
 * const theBeginning = queue.dequeue()
 * console.warn('theEnd?, no theBeginning', theBeginning)
 * console.warn('this is not the beginning', queue.peek())
 * console.warn('this is not THE BEGINNING', queue.enqueue('THE BEGINNING').peek()) */
/*
 * const result = arraySum([0, 2, 22, 42, 1, 3, 5, 6, 7, 9])
 * console.warn('result of arraySum', result)
 *
 * const result2 = stringReversal('hello, this is a string.')
 * console.warn('result of stringReversal', `$ ${result2} $`)
 *
 * const numXs = countX('XsXsxthis is a number ox xs XXXX')
 * console.warn('result of numXs', numXs)
 *
 * const numCombos = staircase(11)
 * console.warn('numCombos', numCombos)
 *
 * // 0 1 1 3 5
 * const start = new Date().getTime()
 * const fibNum = fib(44)
 * const end = new Date().getTime()
 *
 * console.warn('fibs', fibNum, ', time: ', end - start) */

const smallSorted = quicksort([4, 5, 77, 3, 2, 8, 56, 7, 4, 8, 5, 3, 8])
console.warn('smallSorted', smallSorted)

const largeSorted = quicksort([...largeArray])

console.warn('largeSorted', largeSorted)

/* for (let x = 0; x < largeArray.length; x++) {
 *   if (x % 92 === 0) {
 *     console.warn(largeSorted.slice(x - 92, (x / 92) * 92))
 *   }
 * } */
