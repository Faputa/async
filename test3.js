function f1(a, b, c) { console.log(a + b + c) }
// 剩余参数语法
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters
function f2(...args) { f1(...args) }
f2(1, 2, 3)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function f3() { f1.apply(undefined, arguments)}
f3(1, 2, 3)
