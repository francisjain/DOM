var product={
    product_name:"mango",
    mrp:170,
    manufacture:"applepi",
    aval_qty:650 
}

//localStorage.setItem(product.product_name,JSON.stringify(product))

//print apple details

// if ("apple" in localStorage){
//     data=JSON.parse(localStorage.getItem("apple"))
// }
// console.log(data);

for (let i=0;i<localStorage.length;i++){
    let key=localStorage.key(i);
    let data=JSON.parse(localStorage.getItem(key))
    console.log(data);
}

// for(let i in localStorage){
//     console.log(JSON.parse(localStorage.getItem(i)))
// }                                                                                               