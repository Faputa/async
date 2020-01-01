// https://www.zhihu.com/question/36567099/answer/68196697
'use strict';

function async(generator) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      let g = generator(...args)
      function next(val) {
        try {
          let result = g.next(val)
          let value = result.value
          if (result.done) {
            resolve(value)
          } else {
            Promise.resolve(value).then(next, reject)
          }
        } catch (e) {
          reject(e)
        }
      }
      next()
    })
  }
}

module.exports = async;
