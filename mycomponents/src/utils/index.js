export const throttle = (fn, wait) => {
  let updateTime = Date.now()
  console.log(updateTime)
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
  return function (...arg) {
    console.log('12345')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, arg), ms)
  }
}
export const throttle1 = (fn, wait, updateTime) => {
  console.log(updateTime)
  return (...agr) => {
    const now = Date.now()
    console.log(now)
    if (now - updateTime > wait) {
      const res = fn.apply(this, agr)
      updateTime = now
      return res
    }
  }
}

