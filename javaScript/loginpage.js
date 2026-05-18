let form = document.querySelector("#formData")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log()
    console.log(form[1].value);
    console.log(form[1].value);
    let userData={
        name:form[0].value,
        email:form[1].value,
        pass:form[2].value
    }
    localStorage.setItem('data',JSON.stringify(userData))
})



 let LoginData=  document.querySelector("#LoginData")
 LoginData.addEventListener("submit",(e)=>{
    e.preventDefault()

    let login={
        email:LoginData[0].value,
        pass:LoginData[1].value,

    }
   let localStorageData= localStorage.getItem("data")
   console.log(localStorageData);
 let mainData=    JSON.parse(localStorageData)
 console.log(mainData,"save data");

 if(login.email===mainData.email && login.pass===mainData.pass){
    alert("aapne sab kuch sahi kiya haii...")
 }else{
    alert("kuch nhi ho sakta aapse...")
 }
 
   

 })
   
 