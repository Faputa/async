import async from './index.js'
// 可以使用自定义的Promise替换原生的Promise
import Promise from 'promise'

global.Promise = Promise

const f1 = async(function* (a, b, c) {
  let x = yield a
  console.log(x)
  x = yield b
  console.log(x)
  x = yield c
  console.log(x)
  return 100
})

const f2 = async function (a, b, c) {
  let x = await a
  console.log(x)
  x = await b
  console.log(x)
  x = await c
  console.log(x)
  return 100
}

f1(1, 2, 3).then(console.log)
f2(1, 2, 3).then(console.log)
