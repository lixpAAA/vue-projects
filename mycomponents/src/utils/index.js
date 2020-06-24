export const throttle = (fn, wait) => {
  let updateTime = Date.now()
  return (...agr) => {
    const now = Date.now()
    if (now - updateTime > wait) {
      const res = fn.apply(this, agr)
      updateTime = now
      return res
    }
  }
}
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  let cpObj = obj instanceof Array ? [] : {};
  for (let key in obj) cpObj[key] = deepClone(obj[key]);
  return cpObj;
}
export const debounce = (fn, ms = 200) => {
  let timeoutId
  return function (arg) {
    let result
    return new Promise((resolve) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        result = fn.call(null, arg)
        resolve(result)
      }, ms)
    })

  }
}

