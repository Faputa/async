// 剩余参数语法
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters
function f1(a, b, c) { console.log(a + b + c) }
function f2(...args) { f1(...args) }
f2(1, 2, 3)
