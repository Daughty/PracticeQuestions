function dnsImplementation(args){
  let res = []
  let mappi = new Map()
  for (let i=0;i<args.length;i++){
    switch(args[i][0]){
      case 'PUT':
      mappi.set(args[i][1],args[i][2])  
      break;
      case 'GET':
      if(mappi.get(args[i][1])){
        res.push(mappi.get(args[i][1]))
      } else {
        res.push('404')
      }
      break;
      case 'COUNT':
      let kiees = Array.from(mappi.keys());
      let searchki = args[i][1]
      let count = 0
      for(let j=0;j<kiees.length;j++){
        console.log(kiees[j])
        if(kiees[j].includes(searchki)){
          count = count + 1
        }
      }
      res.push(count)
      break;
    }
  }
  console.log(mappi)
  return res
}
let input = [
    ["PUT","www.phonepe.com","10.20.30.40"],
    ["PUT","carrers.phonepe.com","10.20.30.50"],
    ["PUT","sites.google.com","142.250.183.238"],
    ["GET","example.com"],
    ["GET","www.phonepe.com"],
    ["COUNT","phonepe.com"],
    ["COUNT","com"]
]
console.log(dnsImplementation(input))