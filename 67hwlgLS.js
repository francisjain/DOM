function valideBook(User_name){
    return User_name in localStorage?true:false
}



function addToDb(){
    let User_name=user.value;
    let Password=pass.value;
    let Account_details={
        User_name,
        Password
    }

    if(valideBook(User_name)){
        swal("alread exist","failed","error");
    }
    else{
        localStorage.setItem(User_name,JSON.stringify(Account_details))
        swal("Good job!", "book has been created", "success")
    
    }
    
}

function Login(){
    let User_name=user1.value
    let Password1=pass1.value
    if(valideBook(User_name)){
        let pwd=JSON.parse(localStorage.getItem(User_name)).Password
        if(pwd==Password1){
            console.log("Acess");
        }else{
            console.log("incorrect pass");
        }
        
}
else{
    console.log("no data");
}
}