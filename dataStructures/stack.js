class Stack {
  constructor() {
    this.data = []
  }
  push(item) {
    this.data.push(item)
    return this
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = {
  Stack,
}
