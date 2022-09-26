const partition = (arr, beginning, end) => {
  let leftIndex = beginning
  let rightIndex = end - 1
  let pivot = arr[end]

  while (true) {
    while (arr[leftIndex] < pivot) {
      ++leftIndex
    }

    while (arr[rightIndex] > pivot) {
      --rightIndex
    }

    if (leftIndex >= rightIndex) {
      break
    } else {
      // swap left and right elements
      const temp = arr[rightIndex]
      arr[rightIndex] = arr[leftIndex]
      arr[leftIndex] = temp

      // This is important
      // Will hange if both left and right elements equal the pivot
      ++leftIndex
    }
  }

  // swap left element and pivot
  arr[end] = arr[leftIndex]
  arr[leftIndex] = pivot
  return leftIndex
}

const qs = (arr, leftIndex, rightIndex) => {
  if (rightIndex - leftIndex <= 1) {
    return arr
  }

  const pivot = partition(arr, leftIndex, rightIndex)

  qs(arr, leftIndex, pivot - 1)
  qs(arr, pivot + 1, rightIndex)

  return arr
}

const quicksort = arr => {
  return qs(arr, 0, arr.length - 1)
}

module.exports = {
  quicksort,
}
