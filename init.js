/** It's time for a cookie eating challenge - eat all the cookies and get the Job. 
- There are n stacks of Cookies. You have h hours to eat all of the cookies.
- In one hour, you can eat from only one stack and eat C cookies (if there are less than C cookies in a stack you can eat all of them).
- Since you are a not-so sweet-tooth person, so though you want to win the challenge but at the same time you want to eat as minimum number of cookies as possible in an hour.
So what's the least value of C for which you can eat all the cookies in h hours.

For example : 
stack of cookies : [10,4,6,8,11]
and 7 hr

C should be 8, if you take C = 7, you will need 8 hours.. 

10 4 6 8 11

2 4 6 8 11
0 4 6 8 11
0 0 6 8 11
0 0 0 8 11
0 0 0 0 11
0 0 0 0 3
0 0 0 0 0

4 4 6 8 11
0 4 6 8 11
0 0 6 8 11
0 0 0 1 11
0 0 0 0 5
0 0 0 0 0

10 4 6 8 11
**/
var cookies = [10,4,6,8,11]
var h = 7
var minCookie = 0

var sortCookies = cookies.sort((a,b)=>a-b)
console.log(sortCookies)

const possibleArr = [...Array(10).keys]
console.log(possibleArr)
function binarySearch(arr,start,last,val){
    const n = arr.length
    const mid = n-1 - Math.floor((n-1-0)/2)
    if(mid===val){
        return 
    } else if (val>mid) {
        return binarySearch(arr,mid,n-1,val)
    } else {
        return binarySearch(arr,0,mid-1,val)
    }
    return 
}

function findMin(sortCookies,h){
    const start = sortCookies[0]
    const n = sortCookies.length
    const last = sortCookies[n-1]
    const mid = last - Math.floor((last-start)/2)
    
    console.log(binarySearch(sortCookies,start,last,h))
}

findMin(sortCookies,h)


