function valideBook(bk_name){
    return bk_name in localStorage?true:false
}



function addToDb(){
    let book_name=bk_name.value;
    let author_name=author.value;
    let price=amount.value;
    let book={
        book_name,
        author_name,
        price
    }

    if(valideBook(book_name)){
        swal("alread exist","failed","error");
    }
    else{
        localStorage.setItem(book_name,JSON.stringify(book))
        swal("Good job!", "book has been created", "success")
        displayValues();
    
    }
    
}

function findBook(){
    let html_data=``
    let book_name=srch.value
    if(valideBook(book_name)){
    let book=JSON.parse(localStorage.getItem(book_name))
    html_data=`
    <p>Book name: ${book.book_name}</p>
    <p>Author : ${book.author_name} </p>
    <p>Price : ${book.price} </p>`
    //console.log(book);
    document.querySelector("#srch_result").innerHTML=html_data  
}

else{
    console.log("no data");
}
}

function getAllBooks(){
    let books=[];
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let book=JSON.parse(localStorage.getItem(key))
        books.push(book)
    }
    displayValues(books);
}

function displayValues(books){
let html_data=``
for (let book of books) {
    html_data+=`<tr>
        <td>${book.book_name} </td>
        <td>${book.author_name} </td>
        <td>${book.price} </td>
    </tr>`
}
document.querySelector("#result").innerHTML=html_data
}

window.onload=getAllBooks

