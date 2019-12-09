class AA{
  constructor(name){
    this.name = name
  }
  test() {
    console.log(this.name)
  }
}
class BB extends AA{
  constructor(name){
   super(name)
    this.ddd=function(){
    console.log(this.name)
  }
  }
 
}
let bb = new BB('lcp')
let aa = new AA('lkxp')
console.log(BB.isPrototypeOf(AA) )
