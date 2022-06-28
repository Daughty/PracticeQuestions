// import utils from './utils'
// function mainCode() {
// console.log(utils)
// }
// mainCode()

// function fetchUsers(){} // to fetch teh users from api

// function createTable(){}

// function paginate(){}

// function search(){}

// function addRow(){}
// function deleteRow(){}
// function editRow(){}

function mainCode() {
  let dataCopy = []
  window.addEventListener('DOMContentLoaded',() => {
    console.log('onload done')
    
    const inputEl = document.getElementById('inptext')

    const res = debounce(search,1000,true)
    inputEl.addEventListener('keyup',(e)=>{
      //res(e.target.value)
      search(e.target.value,dataCopy)
    })
    console.log(fetchUsers())
  })

  function search(findId,data) {
     if(findId && typeof findId === Number){
      const filtered = data.filter((x)=>x.id===findId)
      createTable(filtered)
     } else {
      const filtered = data.filter((x)=>x.name.includes(findId))
      createTable(filtered)
     }
     //createTable(data)
  }

  const debounce = function(fn,delay,immediate){
    let timer
    return function(...args) {
      const context = this
      var callNow = immediate && !timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        if(!immediate){
          fn.apply(context,args)
        }
      }, delay)
      if(callNow) {
        fn.apply(context,args)
      }
    }
  }
  
  function fetchUsers(){
  fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    .then((response)=>response.json())
    .then((data)=> {
      dataCopy = data
      createTable(data)
    })
  }

  function createTable(data){
    let tabular = document.getElementById('tabular')
    tabular.innerHTML=""
    let table =  document.createElement('table')
    let tbody = document.createElement('tbody')
    let thead = document.createElement('thead')
    table.appendChild(tbody)
    table.appendChild(thead)

    document.getElementById('tabular').appendChild(table)

    // Adding heading row to table 
    const kiies = Object.keys(data[0])
    console.log(kiies)
    let row1=document.createElement('tr')
    let inputCheckbox = document.createElement('input')
    inputCheckbox.type='checkbox'
    row1.appendChild(inputCheckbox)
    kiies.map((x)=>{
      let heading = document.createElement('th')
      heading.innerHTML=x
      row1.appendChild(heading)
    })
    thead.appendChild(row1)
    
    //Adding data rows
    data.map((item)=>{
      let row=document.createElement('tr')
      let inputCheckbox = document.createElement('input')
      inputCheckbox.type='checkbox'
      row.appendChild(inputCheckbox)
      kiies.map((x)=>{
        let data = document.createElement('td')
        data.innerHTML=item[x]
        row.appendChild(data)
      })
      table.appendChild(row)
    })
  }
}
mainCode()
