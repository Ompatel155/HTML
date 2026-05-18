let btn=document.querySelector("button")

let inp=document.querySelector("input")
let h1=document.querySelector("h1")
btn.addEventListener("click",()=>{
    h1.innerText=inp.value
    inp.value=""
})