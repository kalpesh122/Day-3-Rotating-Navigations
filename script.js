const op=document.getElementById('open')
const cl=document.getElementById('close')
const con = document.querySelector('.container')
op.addEventListener('click',()=>{
    con.classList.add('show-nav')
})
cl.addEventListener('click',()=>{
    con.classList.remove('show-nav')
})