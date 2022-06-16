class Bank {

    valideAccno(bk_acno) {
        return bk_acno in localStorage ? true : false;
    }



    addToDb() {
        let Accno = bk_acno.value;
        let email = bk_email.value;
        let phone = bk_phone.value;
        let password = bk_pwd.value;
        let balance = 2000
        let Account_Details = {
            Accno,
            email,
            phone,
            balance,
            password
        }

        if (this.valideAccno(Accno)) {
            swal("alread exist", "failed", "error");

        }
        else {
            localStorage.setItem(Accno, JSON.stringify(Account_Details))
            swal("Good job!", "book has been created", "success")
            //displayValues();

        }

    }

    authenticate(acno, password) {
        if (this.valideAccno(acno)) {
            let user = JSON.parse(localStorage.getItem(acno))
            if (user.password == password) { return 1; } else { return 0; }

        } else {
            return -1
        }
    }
    login() {
        let username = bk_username.value;
        let password = bk_password.value;
        let user = this.authenticate(username, password)
        if (user === 1) {
            sessionStorage.setItem("user", username)
            alert("Access granted");
            window.location.href = "./home.html"
        } else { alert("Acess dined"); }
    }

    logout() {
        if ("user" in sessionStorage) {
            sessionStorage.removeItem("user");
            window.location.href = "./Login.html"
        } else { alert("Invalide session U must login first") }
    }

    getUser() {
        let user = sessionStorage.getItem("user")
        let div = document.createElement("div")
        div.innerHTML = `<h1 style="text-align: center;">Welcome User ${user}</h1>`
        document.querySelector("body").append(div)

        // let user=sessionStorage.getItem("user")
        // document.querySelector("#welcome").innerHTML=`<h1>Welcome User ${user}</h1>`
    }

    getUserDataFromLocalStorage(acno) { return JSON.parse(localStorage.getItem(acno)) }
    balanceEnquiry() {
        let loggeduser = sessionStorage.getItem("user")
        let loggeduserdata = this.getUserDataFromLocalStorage(loggeduser)
        console.log(loggeduserdata.balance);
        let div = document.createElement("div")
        div.innerHTML = `<h1>Your Balance is ${loggeduserdata.balance}</h1>`
        document.querySelector("body").append(div)
    }

    fundTransfer() {
        let payee_acno = sessionStorage.getItem("user")
        let to_acno = bk_acno.value
        let cto_acno = cbk_acno.value
        let Amount = bk_amt.value
        if (to_acno == cto_acno) {
            if (this.valideAccno(to_acno)) {
                if (Amount > this.getUserDataFromLocalStorage(payee_acno).balance) { alert("insufficent Amount"); }
                else {
                    let payee = this.getUserDataFromLocalStorage(payee_acno)
                    let to_acno_details = this.getUserDataFromLocalStorage(to_acno)

                    let bal = this.getUserDataFromLocalStorage(payee_acno).balance - Amount
                    payee.balance = bal
                    localStorage.setItem(payee_acno, JSON.stringify(payee))

                    let cbal = Number(this.getUserDataFromLocalStorage(to_acno).balance) + Number(Amount)
                    to_acno_details.balance = cbal
                    localStorage.setItem(to_acno, JSON.stringify(to_acno_details))

                    //alert("Success")

                }
            }
            else { alert("invalide Account Number"); }
        }
        else { alert("account number mismatch!!!"); }
    }

}

var bank = new Bank();