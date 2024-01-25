var eInput = document.getElementById('userEmail')
var pInput = document.getElementById('userPass')
var btn_submit = document.getElementById('submit')

var eError = document.getElementById('eResult')
var pError = document.getElementById('pResult')

eInput.addEventListener('blur', function () {
    if (validateEmail(eInput.value)) {
        eError.innerHTML = "Succeded"
        eError.style.color = "green"
    } else {
        eError.innerHTML = "Wrong email format, please check again."
        eError.style.color = "red"

    }
})
pInput.addEventListener('blur', function () {
    if (validatePass(pInput.value)) {
        pError.innerHTML = "Succeded!"
        pError.style.color = "green"
    } else {
        pError.innerHTML = "Wrong password format, please check again."
        pError.style.color = "red"

    }
})

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailResult = emailRegex.test(email)
    return emailResult;
}
function validatePass(pass) {
    var passRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    var passResult = passRegex.test(pass)
    return passResult;
}

btn_submit.addEventListener('click', function (e) {
    if (!(validateEmail(eInput.value) && validatePass(pInput.value))) {
        e.preventDefault()
    }
})