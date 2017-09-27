const assert = require('assert')

class NegativeError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NegativeError'
  }
}

function add(x, y) {
  if (x < 0 || y <)
    throw new NegativeError('음수는 허용되지 않습니다.')

  return x + y
}

assert.equal(add(1, 2), 3)

assert.throws(() => {
  add(-1, 2)
}, NegativeError)
