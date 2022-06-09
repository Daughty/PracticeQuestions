function searchInsert(nums, target) {
  let n = nums.length
  return binarySearch(nums,0,n-1,target)
}
function binarySearch(arr,l,r,target){
  if(r>=l) {
    let mid = l + Math.floor((r - l) / 2);
    if(target===arr[mid]) {
        return mid
    } else if(target < arr[mid]){
        return binarySearch(arr,0,mid-1,target)
    } else {
        return binarySearch(arr,mid+1,r,target)
    } 
  }
  return -1
}
function runCode(){
  let nums = [1,3,5,6]
  let target = 7
  console.log(searchInsert(nums,target))
}
runCode()