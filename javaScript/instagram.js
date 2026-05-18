function step1(fn){
    setTimeout(()=>{
        console.log("select.....")
        fn()
    },5000)
}
function step2(fn){
    setTimeout(()=>{
        console.log("filter.....")
        fn()
    },4000)
}
function step3(fn){
    setTimeout(()=>{
        console.log("song.....")
        fn()
    },2000)
}
function step4(fn){
    setTimeout(()=>{
        console.log("post.....")
        fn()
    },1000)
}
 step1(function(){
    step2(function(){
        step3(function(){
            step4()

        })
    })
 })
