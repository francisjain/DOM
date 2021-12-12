function valideProduct(Product_Name){
    return Product_Name in localStorage?true:false
}



function addToDB(){
    let Product_Name=p_name.value
    let Price=price.value
    let Aval_Amount=aval.value
    var Product={Product_Name,Price,Aval_Amount}
   if(valideProduct(Product_Name)){
       console.log("Exist");
   }else{
    localStorage.setItem(Product_Name,JSON.stringify(Product))
    alert("Added")
   }
   getProduct()
}

function getProduct(){
    let data=[]
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let item=JSON.parse(localStorage.getItem(key))
        data.push(item)
    }displayValues(data)
}
function displayValues(data){
let html_data=``
for (let da of data) {
    html_data+=`<tr>
        <td>${da.Product_Name} </td>
        <td>${da.Price} </td>
        <td>${da.Aval_Amount} </td>
    </tr>`
}
document.querySelector("#result").innerHTML=html_data
}

window.onload=getProduct

function findProduct(){
    let html_data=``
    let product_name=srch.value
    if(valideProduct(product_name)){
    let item=JSON.parse(localStorage.getItem(product_name))
    html_data+=`
    <p>Book name: ${item.Product_Name}</p>
    <p>Author : ${item.Price} </p>
    <p>Price : ${item.Aval_Amount} </p>`
    //console.log(item);
    document.querySelector("#srch_result").innerHTML=html_data  
}

else{
    console.log("no data");
}
}
