function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round(Math.random() * max)
  })
}

/* const arr = randomArray(100, 99)
 * console.warn(arr)
 *  */
module.exports = {
  arrayOfNumbers: [
    32, 55, 89, 40, 59, 77, 77, 57, 56, 52, 47, 47, 21, 30, 29, 31, 33, 30, 79,
    11, 22, 20, 88, 97, 55, 40, 25, 12, 56, 99, 76, 21, 66, 2, 96, 18, 87, 49,
    93, 5, 96, 98, 18, 80, 4, 96, 52, 57, 24, 91, 0, 6, 6, 19, 24, 67, 76, 29,
    92, 16, 74, 71, 11, 68, 2, 36, 9, 72, 53, 60, 93, 82, 27, 68, 57, 18, 6, 49,
    46, 9, 77, 80, 33, 22, 30, 45, 42, 41, 8, 75, 75, 48, 94, 1, 63, 26, 42, 2,
    14, 94,
  ],
}
