console.log('Client js')


const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#msg-1')
const messagetwo=document.querySelector("#msg-2")

messageone.textContent=''
messagetwo.textContent=''
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const searchadd=search.value
 
    fetch('/Weather?search='+searchadd).then((response)=>{
     response.json().then(data=>{
      if(data.error)
      {
          console.log('error')
          messageone.textContent='error'

      }
      else{
      console.log(data)
      messagetwo.textContent=data.msg
      }
  })
})



})

