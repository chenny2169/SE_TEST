const should = require('should')
const average = require('../src/average')
describe('#I want to test average', () => {
  // 測試算出來的平均是不是 2.5
  it('should return the average of array', done => {
    var avg = average([1, 2, 3, 4])
    avg.should.equal(2.5)
    done()
  })
}) 






