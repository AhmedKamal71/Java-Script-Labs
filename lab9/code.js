var eInput = document.getElementById('userEmail')  // get email input
var pInput = document.getElementById('userPass')   // get password input
var btn_submit = document.getElementById('submit') // get submit button
var eError = document.getElementById('eResult')    
var pError = document.getElementById('pResult')

eInput.addEventListener('blur', function () {      // Function to print email result to user
    if (validateEmail(eInput.value)) {
        eError.innerHTML = "Succeded"
        eError.style.color = "green"
    } else {
        eError.innerHTML = "Wrong email format, please check again."
        eError.style.color = "red"

    }
})
pInput.addEventListener('blur', function () {       // Function to print password result to user
    if (validatePass(pInput.value)) {
        pError.innerHTML = "Succeded!"
        pError.style.color = "green"
    } else {
        pError.innerHTML = "Wrong password format, please check again."
        pError.style.color = "red"

    }
})

function validateEmail(email) {                     // Function to validate email input
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailResult = emailRegex.test(email)
    return emailResult;
}
function validatePass(pass) {                        // Function to validate password input
    var passRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    var passResult = passRegex.test(pass)
    return passResult;
}

btn_submit.addEventListener('click', function (e) {  // function to prevent sending form if there is an wrong format
    if (!(validateEmail(eInput.value) && validatePass(pInput.value))) {
        e.preventDefault()
    }
})