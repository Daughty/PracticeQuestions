function formatter(args){
  let res = []
  let mappi = new Map()
  for (let i=0;i<args.length;i++){
    if(args[i]['parent']===-1){
      mappi.set(args[i]['id'],args[i]['children'])
    } else if(mappi.get(args[i]['parent'])){
      let child = mappi.get(args[i]['parent'])
      mappi.set(args[i]['id'],[...child,...args[i]['children']])
    }
  }
  console.log(mappi)
  //return res
}