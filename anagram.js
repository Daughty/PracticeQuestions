// Find if two string are anagram or not 
// "anagram" "nagaram"
function sortString(x){
  return x.split("").sort().join()
}
var isAnagram = function(s, t) {
  if(sortString(s)===sortString(t)){
      return true
  }
  return false
};

// Find anagram ( short strings)
var findAnagrams = function(s, p) {
    var len = p.length
    var res = []
    for(var i=0;i<s.length;i++){
       if(len+i<=s.length){
           var shortStr = s.slice(i,len+i)
           if(sortString(shortStr) === sortString(p)) {
               res.push(i)
           } 
       }
    }
    return res
};

function sortString(s){
    return s.split("").sort().join("")
}

console.log(findAnagrams("cbaabcabc","abc"))