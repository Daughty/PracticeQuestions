var arr = [[3,5],8,9,[10,0]]
var output = []

// Method 1
function flattenArr(arr) {
  for(var i=0;i<arr.length;i++) {
  if(Array.isArray(arr[i])){
    flattenArr(arr[i])
  } else {
    output.push(arr[i])
  }
}
  return output
}
console.log(flattenArr(arr))

// Method 2 ( drawback , will not flatten a 3 level nesting of array)
// var arr = [[3,5],8,9,[10,0,[2,3]]]
let flat = [].concat(...arr)
console.log(flat)


var arr = [[3,5],8,9,[10,0,[2,3]]]
var output = []
  let flat = arr.reduce((acc,curr)=>{
  if(Array.isArray(curr)){
  flattenArr(curr)
  } else {
  acc.push(curr)
  }      
  },[])
                    
console.log(flat)