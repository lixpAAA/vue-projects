// var arr = [
//   { parentId: null, node: 'A', name: 'A', id: 1 },
//   { parentId: 1, node: 'B', name: 'B', id: 2 },
//   { parentId: 2, node: 'C', name: 'C', id: 3 },
//   { parentId: 3, node: 'D', name: 'D', id: 4 },
//   { parentId: 4, node: 'E', name: 'E', id: 5 },
// ]
/***** 数组转为具有树形结构 ***********************************/
function createMap(arr) {
  let map = {}
  arr.forEach(item => {
    map[item.id] = item
  })
  return map
}
//  把一串数组解析成树形结构
function toTree(arr) {
  let map = createMap(arr)
  let res = []
  arr.forEach(item => {
    let parent = map[item.parentId]
    if (parent) {
      parent.children || (parent.children = [])
      parent.children.push(item)
    } else {
      res.push(item)
    }
  })
  return res
}

/***** 对象拷贝 ***********************************/
function deepClone(data) {
  let type = chekType(data)
  let res
  switch (type) {
    case 'Array':
      res = []
      for (let i = 0;i < data.length;++i) {
        res[i] = deepClone(data[i])
      }
      return res
    case 'Object':
      res = {}
      for (let key in data) {
        res[key] = deepClone(data[key])
      }
      return res
    default:
      return data
  }
}


function chekType(item) {
  let str = toString.call(item)
  if (str === '[object Array]') {
    return 'Array'
  } else if (str === '[object Object]') {
    return 'Object'
  } else {
    return true
  }
}
/*****  ***********************************/
//  获取全局对象
var getGlobal =
  function () {
    if (typeofself !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  };

var globals = getGlobal();