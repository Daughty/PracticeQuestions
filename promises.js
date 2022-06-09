let prom = new Promise((resolve,reject)=>{
  setTimeout(()=>{resolve(['12'])},1000)
})

prom.then((res)=>{
  console.log('hii',res)
}).catch((err)=>{
  console.log(err)
}) 


// promise from scratch

class Promises {
  constructor(handler){
    this.status = "pending"
    this.val = null;
    
    const resolve = value => {
      if(this.status === 'pending'){
        this.status = 'fulfilled'
        this.val = value;
      }
    };

    const reject = err => {
      if(this.status === 'pending'){
        this.status = 'rejected'
        this.val = err;
      }
    };

    try {
      handler(resolve, reject)
    } catch (err) {
      reject(err);
    }

    then = (onFulfilled,onRejection) => {
      if(this.status==='fulfilled'){
        onFulfilled(this.val)
      } else if(this.status==='rejected') {
        onRejection(this.val)
      }
    };
  }
}

const p1 = new Promises ((resolve,reject)=>{
    resolve('resolved')
})

const p2 = new Promises ((resolve,reject)=>{
  reject('resolved')
})

p1.then((res)=>{
  console.log(res)
},(err)=>{
  console.log(err)
})

// Polyfill Promise.all 

let p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>resolve(),1000)
})
