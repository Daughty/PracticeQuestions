// Example 1 

// let arr = ["apples", "bananas", "cucumbers", "dragonfruit"]
// const p1 = new Promise((resolve,reject) => {
//                        resolve()
//                        })
// for (var i=0; i<arr.length;i++) {
//     setTimeout(function () {
//         console.log('E --- ', i); 
//     }, 1000 - (i*100)) // 'E --- ' 4
// }
// //console.log(i)
// var arr1= [1, 2, 3, 4, 5, 6]
// console.log('A', i) // 'A' 4


// for (var i=0; i<arr1.length; i++) { // last value of i===6
// p1.then(() => {console.log('G', i)}) //'G'
//   setTimeout(() => {
//     console.log('B', i); // 'B' 4
//   }, 100 - i * 20) 
// }
// console.log('C', i--); // 'C' 6 ...updated i=5

// setTimeout(() => {
//   console.log('D', --i); // 'D' 4
// }, 0) 

// 'A' 4
// 'C' 6
// 'G' 5 * 6
// 'B' 4 * 6
// 'D' 4
// 'E' 4 * 4

// Example 2
var arr = ['eat','tea','bat','tab','listen','silent'] // Question - Anagram pair count
 
var output = arr.map((x)=>{
   return x.split("").sort().join("") // sort the individual string 
})
arr[0].split()
console.log(output)

 function removeDuplicates(arr) { // remove duplicates from the output array
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
 }
 console.log(removeDuplicates(output).length) // remaining array length is the answer
 
 // Example 3
 var c = {
   name:"hello",
   log: function() {
         //let self = this;
         this.name = "daughty";
         let setName = (newName) => {
             this.name = newName
         }
         setName("hotstar"); // "hotstar"
         console.log(this.name) // object ??? 
     }
 }
 
 c.log()
 
// Example 4
console.log(1<2<3) // true
console.log("" == 0) // true
console.log("" == false) //  true

greet()
function greet(){
console.log('hi')
}



/////
function formatter(args){
    let res = []
    let mappi = {}
    for (let i=0;i<args.length;i++) {
      let parent = args[i]['parent']
      if(parent==-1) {
        mappi[args[i]['id']]=args[i]['children']
      } else if (mappi[parent]) {
        let child = mappi[parent]
        mappi[parent]=[...child,...args[i]['children']]
      } else {
        if(Object.keys(mappi).includes(parent)){
          mappi[Object.keys(mappi)[parent]] = [...mappi[Object.keys(mappi)[parent],...args[i]['children']] 
        } 
      }
    }
    console.log(mappi)
    return res
  }
  let input = [
    {
    title: "Engineering",
    id: 1,
    children: [2,3],
    parent: -1,
    },
    {
    title: "Dev",
    id: 2,
    children: [4,5],
    parent: 1,
    },
    {
    title: "QA",
    id: 3,
    children:[],
    parent: 1,
    },
    {
    title: "FE",
    id: 4,
    children:[],
    parent: 2,
    },
    {
    title: "BE",
    id: 5,
    children:[6],
    parent: 2,
    }
  ]
  
  console.log(formatter(input))



///Promise.allsettled polyfill
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('1')}, 300)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('2')}, 100)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {reject('3')}, 500)
})
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('4')}, 200)
})

const allSettledFn = (arrayOfPromises) => {
    let resArr = arrayOfPromises.map((promise)=>{
            return promise.then((resp)=>{
                return {
                  status: "Success",
                  value: resp
                }
            })
            .catch((err)=>{
              return {
                  status: "Failure",
                  value: err
                }
            })
    })
    return Promise.all(resArr);
}

allSettledFn([p1,p2,p3,p4]).then(resp => {
    console.log(resp);
    
//[{status:'success', result:'1'},{status:'success', result:'2'},{status:'failure', result:'3'},{status:'success', result:'4'}]
})


//Currying function 
const multiply=(a) => {
  return function(b){
      if(!b){
         return a 
      } else {
          return multiply(a*b)
      }
  }
}

console.log(multiply(1)(2)(3)(4)()) // 48
// console.log(multiply(3)(2))



var c = {
  name:"hello",
  log: function() {
        this.name = "pushpa";
        let setName = (newName) => {
            this.name = newName
        }
        setName("walmart"); 
        console.log(this.name)
    }
}

c.log()

