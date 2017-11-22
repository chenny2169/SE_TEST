const should = require('should')
const min = require('../src/min')
describe('#min', () => {
  // 測試有沒有取得正確的最小值
  it('should return the minimum in array', done => {
    var minimum = min([1, 10, 100, 1000])
    minimum.should.equal(1)
    done()
  })
})