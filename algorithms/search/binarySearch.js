module.exports = {
  binarySearch: (needle, haystack) => {
    let numOps = 0
    let lo = 0
    let hi = haystack.length

    while (hi > lo) {
      numOps++

      // addition here, _not_ subtraction
      let m = Math.floor((hi + lo) / 2)

      let v = haystack[m]
      /* console.warn(
       *   `searching for ${needle}, hi: ${hi}, lo: ${lo}, array[${m}] = ${v}`,
       * )
       */
      if (needle === v) {
        return [true, numOps]
      } else if (needle > v) {
        lo = m + 1
      } else if (needle < v) {
        hi = m
      }
    }
    return [false, numOps]
  },
}
