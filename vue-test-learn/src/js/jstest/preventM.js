function getM() {
  const m = process.memoryUsage();
  console.log('size', m.heapTotal)

}
getM()

class A {
  constructor() {
    this.a = 1
  }
}
class B extends A {
  constructor() {
    super()
    this.b = 2
  }
}
var b = new B()
for (let a in b) {
  console.log('key:', a)
}