// https://www.zhihu.com/question/36567099/answer/68196697
'use strict';

function async(generator) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      const g = generator(...args)
      function next(val) {
        try {
          const result = g.next(val)
          const value = result.value
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

export default async;
