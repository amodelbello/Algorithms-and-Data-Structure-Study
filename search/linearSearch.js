let numOps = 0
module.exports = {
  linearSearch: (needle, haystack) => {
    for (let x = 0; x < haystack.length; x++) {
      numOps++
      if (needle === haystack[x]) {
        console.warn(`needle: ${needle}, haystack[x]: ${haystack[x]}, x: ${x}`)
        return [true, numOps]
      }
    }
    return [false, numOps]
  },
}
