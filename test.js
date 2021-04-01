import async from './index.js'
// 可以使用自定义的Promise替换原生的Promise
import Promise from 'promise'

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => resolve(x), 2000)
  })
}

const f1 = async function () {
  let x = await resolveAfter2Seconds(10)
  console.log(x)
}

const f2 = async(function* () {
  let x = yield resolveAfter2Seconds(10)
  console.log(x)
})

f1()
f2()
