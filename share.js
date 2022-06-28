const _ = require('lodash');

function sayHello() {
  // console.log('Hello, World');
}

_.times(5, sayHello);


//You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// # // i=1 , upddatedN = 5 , count =1
// # # // i=2 updatedN = 3 , count = 2
// # # #  // i=3 , uN = 0 
//n=6, o/p = 3

// # // i=1 , uN = 7 , count =1 
// # # // i=2 uN = 5 , count=2
// # # # // i =3 , uN = 2 , count 3
// # # # #  // i =4 , uN = -2 , count 3
//n=8, o/p = 3 

var n = 15
var count = 0
function solution(n,count) {
  var uN = 0
  for(let i=1;i<=n;i++) {
    uN  = i*(i+1)/2 
    if(uN===n) {
      return i
    } else if(uN>n){
      return i-1
    }
}
}
console.log(solution(n,count))

//(n*(n+1))/2 n = 6 , 21 

// i*(i+1)/2 = n 
// i*i+i = 12
