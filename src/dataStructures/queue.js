class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    return this
  }

  dequeue() {
    return this.data.shift()
  }

  peek() {
    return this.data[0]
  }
}

module.exports = {
  Queue,
}
