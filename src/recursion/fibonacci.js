const fib = (n, memos = {}) => {
  if (n <= 0) return 0
  if (n <= 2) return 1

  // no memoization
  /* return fib(n - 1) + fib(n - 2) */

  // with memoization
  let f1 = 0
  if (memos[n - 1]) {
    f1 = memos[n - 1]
  } else {
    f1 = fib(n - 1, memos)
    memos[n - 1] = f1
  }
  let f2 = 0
  if (memos[n - 2]) {
    f2 = memos[n - 2]
  } else {
    f2 = fib(n - 2, memos)
    memos[n - 2] = f2
  }
  return f1 + f2
}

module.exports = {
  fib,
}
