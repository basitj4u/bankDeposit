
let depositInput = document.getElementsByName("deposit")[0]
let errorText = document.getElementById("error")
let balanceText = document.getElementById("balance")

let accountBalance = 0

function deposit() {
    let depositNumber = parseInt(depositInput.value)
    if(depositNumber > 0) {
        // console.log(typeof depositNumber)
        accountBalance += depositNumber
        errorText.innerHTML = ""
        balanceText.innerHTML = accountBalance
    } else if(depositNumber == 0) {
        errorText.innerHTML = "The input value should be greater than 0"
    } else {
        errorText.innerHTML = "The input value can not be negative!"
    }
    
}