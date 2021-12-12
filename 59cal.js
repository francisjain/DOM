// function displayValue(num){
//     let res=document.querySelector("#result").value+=num
// }
var displayValue=(num)=>result.value+=num

// function clearBox(){
//     document.querySelector("#result").value=""
// }
var clearBox=()=>result.value=""
// function evaluateExpression(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     let result=eval(cur_val)
//     res.value=result
// }
var evaluateExpression=()=>result.value=eval(result.value)

// function backspace(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     res.value=cur_val.slice(0,-1) 
// }
var backspace=()=>result.value=result.value.slice(0,-1)