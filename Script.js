const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const phonenum = document.getElementById("phonenum")
const selectevent = document.getElementById("selectevent")

const warnfullname = document.getElementById("warn-fullname")
const warnemail = document.getElementById("warn-email")
const warnphonenum1 = document.getElementById("warn-phonenum1")
const warnphonenum2 = document.getElementById("warn-phonenum2")
const warnselectevent = document.getElementById("warn-selectevent")

fullname.addEventListener('keyup', () =>{
    const fullnameinput = document.getElementById("fullname").value
    if (fullnameinput == "" || fullnameinput == null) {
        warnfullname.classList.remove('hidden')
    } else if (fullnameinput.length > 2) {
        warnfullname.classList.add('hidden')
    } console.log (fullnameinput.length)
})

function IsEmail(emailinput) {
    return /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(emailinput)
}

email.addEventListener('keyup', () =>{
    const emailinput = document.getElementById("email").value
    if (emailinput == "" || emailinput == null) {
        warnemail.classList.remove('hidden')
    } else if (emailinput.includes("@") == false) {
        warnemail.classList.remove('hidden')
    } else {
        warnemail.classList.add('hidden')
    }
})

phonenum.addEventListener('keyup', () =>{
    const phonenuminput = document.getElementById("phonenum").value
    if (phonenuminput == "" || phonenuminput == null) {
        warnphonenum1.classList.remove('hidden')
    } else if (phonenuminput.startsWith("08") == false) {
        warnphonenum1.classList.remove('hidden')
    } else if (phonenuminput.length > 14) {
        warnphonenum2.classList.remove('hidden') 
    } else {
        warnphonenum1.classList.add('hidden')
        warnphonenum2.classList.add('hidden')
    }
})

