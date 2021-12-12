var books={
    Book_name:"book1",
    author:"fram",
    avalprice_qty:120 ,
    avl_cnt:76
}
//localStorage.setItem(books.Book_name,JSON.stringify(books))

//print all bookname
for (let i=0;i<localStorage.length;i++){
    let key=localStorage.key(i);
    let data=JSON.parse(localStorage.getItem(key))
    console.log(data);
}
//print details of aaple1
if ("Apple" in localStorage){
    let data=JSON.parse(localStorage.getItem("Apple"))
    console.log(data);
}
