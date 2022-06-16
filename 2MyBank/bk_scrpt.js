class Bank {

    regis() {
        let accno_details = {
            acno: racno.value,
            pname: rname.value,
            email: rmail.value,
            pass: rpass.value,
            balance: 2000,
            history: []
        }

        return this.validate(racno.value) ? (alert("Cann't Process Already Exist!!!")) : (localStorage.setItem(racno.value, JSON.stringify(accno_details)),
            alert("Added to data base"))

    }
    tran() {
        let ac = this.userData(sessionStorage.getItem("user"))
        ac.balance -= Number(tamt.value)
        ac.history.push({ to: (tacno.value), de_amt: (tamt.value), crt_balance: (ac.balance) })
        localStorage.setItem(sessionStorage.getItem("user"), JSON.stringify(ac))

        let tc = this.userData(tacno.value)
        tc.balance += Number(tamt.value)
        tc.history.push({ from: sessionStorage.getItem("user"), ce_amt: tamt.value, crt_balance: tc.balance })
        localStorage.setItem(tacno.value, JSON.stringify(tc))

        alert("Success")
    }

    validate = (acno) => acno in localStorage ? true : false;
    userData = (acno) => JSON.parse(localStorage.getItem(acno));

    login = () => this.validate(lacno.value) ? JSON.parse(localStorage.getItem(lacno.value)).pass == lpass.value ?
        (sessionStorage.setItem("user", lacno.value), alert("Access Granted"), window.location.href = "./home.html") :
        alert("Incorrect Password") : alert("invalide Account Number")

    logout = () => "user" in sessionStorage ? (sessionStorage.removeItem("user"), window.location.href = "./login.html") : alert("You Must Login First")

    getUser() {
        let b = sessionStorage.getItem("user")
        let a = document.createElement("div")
        a.innerHTML = `<h1 style="text-align: center;">Welcome User ${b}</h1>`
        document.querySelector("body").append(a)
    }


    // getUser = () => welcome.innerHTML = `<h1>Welcome User ${sessionStorage.getItem("user")}</h1>`

    balanceEnq = () => balEq.innerHTML = `<h1 style="text-align: center;">Your Balance : ${this.userData(sessionStorage.getItem("user")).balance}</h1>`

    fundTrans = () => tacno.value == ctacno.value ? this.validate(tacno.value) ? tamt.value > this.userData(sessionStorage.getItem("user")).balance ?
        alert("insufficent Amount") : this.tran() : alert("invalide acno") : alert("mismatch")

    paymentHis() {
        let uhis = this.userData(sessionStorage.getItem("user"))
        let html_data = ""
        uhis.history.forEach(data => {
            if (data.to) { html_data += `<tr>   <td> to : ${data.to}</td><td> D_amt : ${data.de_amt}</td><td> C_bal : ${data.crt_balance}</td> </tr>` }
            else if (data.from) { html_data += `<tr> <td>From : ${data.from}</td> <td>C_amt : ${data.ce_amt}</td> <td>C_bal : ${data.crt_balance}</td> </tr>` }
        })
        document.querySelector("#result").innerHTML = html_data
    }

}

var bank = new Bank()