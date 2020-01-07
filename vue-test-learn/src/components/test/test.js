// const state = Vue.observable({ count: 0 })
// export default {
//   render(h) {
//     return h('button', {
//       on: { click: () => { state.count++ } }
//     }, `count is: ${state.count}`)
//   }
// }


function a() {
  return new Promise((resolve) => {
    return resolve(123)
  })
}
function b() {
  return new Promise((resolve, reject) => {
    return reject(456)
  })
}

b().then(rs => { }).catch(err => console.log('err:', err))

// a.then(res => console.log(res))
Promise.all([a(), b()]).then(([c, d]) => {
  console.log(c, d)
}).catch(e => console.log(e))


var arr = [2, 1, 5, 3, 5, 7, 8]
// 不用算法
function findMaxAndMin(arr) {
  if (toString.call(arr) !== '[object Array]') {
    console.error('paramter is not type of Array')
    return
  }

  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return { max, min }
}
// 采用Array.prototype.sort, 至少要循环遍历一次, 感觉跟冒泡差不多
function findMaxAndMin1(arr) {
  if (toString.call(arr) !== '[object Array]') {
    console.error('paramter is not type of Array')
    return
  }
  arr.sort((a, b) => {
    return a - b
  })
  return {
    max: arr[arr.length - 1],
    min: arr[0]
  }
}
// 遍历数组，每次循环产生两个随机数，把随机数对应的数组下标对应的值进行交换
function randomArray(array) {
  if (toString.call(array) !== '[object Array]') {
    console.error('paramter is not type of Array')
    return
  }
  let arr = array.slice()
  let len = arr.length
  for (let i = 0;i < len;i++) {
    let start = Math.floor(Math.random() * len)
    let end = Math.floor(Math.random() * len)
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
  }
  return arr
}
// 利用Array.prototype.sort
function randomArray(array) {
  if (toString.call(array) !== '[object Array]') {
    console.error('paramter is not type of Array')
    return
  }
  let arr = array.slice()
  arr.sort((a, b) => {
    return Math.random() - .5
  })
  return arr
}



function validatePassword(password) {
  const tex = /^(?=.*[a-zA-Z]{2,})(?=.*[0-9])[A-Za-z0-9]{6,12}$/
  return tex.test(password)
}
function formatNumber(num) {
  const text = /\B(?=(?:\d{3})+\b)/g
  let numStr = num.toString()
  return numStr.replace(text, ',')
}
var str = 'dows95bbbbdows98'
str.match(/dows(?=95|98|NT|2000)/, function (i) {
  console.log(i)
})