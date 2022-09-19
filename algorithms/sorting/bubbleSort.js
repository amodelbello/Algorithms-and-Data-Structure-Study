module.exports = {
  bubbleSort: arr => {
    // because we know the value that bubbles up to the end is in the correct place
    // we don't need to compare
    let unsortedUntil = arr.length

    let keepGoing = true
    let numOps = 0

    while (keepGoing) {
      keepGoing = false

      for (let x = 0; x < unsortedUntil; x++) {
        numOps += 1

        if (arr[x] > arr[x + 1]) {
          const temp = arr[x]
          arr[x] = arr[x + 1]
          arr[x + 1] = temp
          keepGoing = true
        }
      }
      unsortedUntil -= 1
    }

    return [arr, numOps]
  },
}
