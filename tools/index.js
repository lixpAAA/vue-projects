// var arr = [
//   { parentId: null, node: 'A', name: 'A', id: 1 },
//   { parentId: 1, node: 'B', name: 'B', id: 2 },
//   { parentId: 2, node: 'C', name: 'C', id: 3 },
//   { parentId: 3, node: 'D', name: 'D', id: 4 },
//   { parentId: 4, node: 'E', name: 'E', id: 5 },
// ]

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
