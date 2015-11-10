import assert from 'power-assert'
import add from '../src/add'
describe('add', () => {
  it('should returns result of A plus B', () => {
    assert(add(1, 2) === 3)
  })
})
