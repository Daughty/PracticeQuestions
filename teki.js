// // function abc () {}

// // const abc = () => {
// //   console.log(this)
// // }

// class Testing {
//   abc = () => {
//     console.log(this)
//   }
  
//  xyz (){
//    console.log(this)
//  }

// }

// let t1 = new Testing()
// t1.abc()
// t1.xyz()


// var arr = [100, 100, 100];
// console.log(arr.map(parseInt));

// console.log(arr.map((x,index,)=>{
//   return parseInt(x)
// }))

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(3).then(res => {
    console.log(res);
    setTimeout(() => {
      console.log(7);
    }, 100);

    setTimeout(() => {
      console.log(8);
    }, 0);
});

setTimeout(() => {
  console.log(4);
}, 100);

setTimeout(() => {
  console.log(9);
}, 0);

setTimeout(() => {
  console.log(5);
}, -100);

console.log(6);

// //1 6 3 2 9 5 8 4 7


// function add1(a,x,y) {
// 	return a + x + y+ 1;
// } 

// function add2(b) {
// 	return b + 2;
// } 

// function add3(c) {
// 	return c + 3;
// } 

// // console.log(add3(add2(add1(1)))) // 7

// function compose(...fn){
//   const arr = fn
//   return function(...args) {
//    let args = [...arguments]
//    let curr = 0
//    let i = arr.length-1
//    while(i>=0){
//      curr = arr[i](args)
//      args = curr
//      i--
//    }
//    return curr
//   }
// }

// console.log(compose(add3,add2,add1)(1,2,3)) //7

