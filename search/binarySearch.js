let numOps = 0
module.exports = {
  binarySearch: (needle, haystack) => {
    let lo = 0
    let hi = haystack.length

    while (hi - lo > 1) {
      if (numOps > 20) break
      numOps++

      // addition here, _not_ subtraction
      let m = Math.floor((hi + lo) / 2)

      let v = haystack[m]
      console.warn(
        `searching for ${needle}, hi: ${hi}, lo: ${lo}, array[${m}] = ${v}`,
      )
      if (needle === v) {
        console.warn('it is equal\n')
        return [true, numOps]
      } else if (needle > v) {
        console.warn('needle is greater\n')
        lo = m + 1
      } else if (needle < v) {
        console.warn('needle is less\n')
        hi = m
      }
    }
    console.warn('it is the last one')
    return [false, numOps]
  },
}
