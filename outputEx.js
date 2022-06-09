// Example 1 

let arr = ["apples", "bananas", "cucumbers", "dragonfruit"]
const p1 = new Promise((resolve,reject) => {
                       resolve()
                       })
for (var i=0; i<arr.length;i++) {
    setTimeout(function () {
        console.log('E --- ', i); 
    }, 1000 - (i*100)) // 'E --- ' 4
}
//console.log(i)
var arr1= [1, 2, 3, 4, 5, 6]
console.log('A', i) // 'A' 4


for (var i=0; i<arr1.length; i++) { // last value of i===6
p1.then(() => {console.log('G', i)}) //'G'
  setTimeout(() => {
    console.log('B', i); // 'B' 4
  }, 100 - i * 20) 
}
console.log('C', i--); // 'C' 6 ...updated i=5

setTimeout(() => {
  console.log('D', --i); // 'D' 4
}, 0) 

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
greet() // hi
function greet(){
console.log('hi')
}