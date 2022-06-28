
const foo = {
  x: 20,
  getX: function() {
        console.log(this.x);
 },
};


const localGetX = foo.getX;
localGetX();

// console.log(localGetX.call(foo))



setTimeout(function() {
  console.log('A');
}, 0);
Promise.resolve()
  .then(function() {
    console.log('B');
  })
  .then(function() {
    console.log('C');
});

console.log('D');



// Implement polyfill for Promise.race()

// From mdn web docs -
// The Promise.race() method returns a promise
// that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
// with the value or reason from that.

// Output snippets:
// const promise1 = new Promise(res => setTimeout(res, 500, 'p1'));
// const promise2 = new Promise(res => setTimeout(res, 1000, 'p2'));
// const promise3 = new Promise((res, rej) => setTimeout(rej, 500, 'p3'));

// const testOne = [promise1, promise2]; // should resolve with p1
// const testTwo = [promise2, promise3]; // should reject with p3

// const racy = (promises) => {
//   return new Promise((resolve,reject)=>{promises.forEach((p)=>{
//       p.then((response)=>{
//           resolve(response)
//       }).catch((err)=>{
//           reject(err)
//       })
//   })})
// }

// array.map // proto
// Array.isArray // ?


// Promise.racy = (promises) => {
//   return new Promise((resolve,reject)=>{promises.forEach((p)=>{
//       p.then((response)=>{
//           resolve(response)
//       }).catch((err)=>{
//           reject(err)
//       })
//   })})
// }

// Promise.racy(testOne).then(console.log).catch(console.log)
// Promise.racy(testTwo).then(console.log).catch(console.log)



// Write the implementation of the addSum function such that it performs alternate addition and subtraction operation.

// function addSum() {
//  const args = [...arguments]
//  return function (...args2) {
//      if(!args2.length) return [...args]
//      else {
//          return addSum(...args,...args2)
//      }
// }
// }

// console.log(addSum(1,2)(3)()); // [1,2,3,4,5,6] // 1-2+3-4+5-6 = -3
