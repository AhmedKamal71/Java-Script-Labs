function getValues() {
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('pass').value;
    if (userName && password) {
        const info = {
            user_name: userName,
            user_password: password
        }

        if (info.user_name === 'admin' && info.user_password === '123') {
            Message('Welcome');
        } else {
            Message("Not Registered!");
        }
    }
}

function Message(mess) {
    var message = document.getElementById('result');
    message.textContent = mess;
    if (mess === 'Welcome') {
        message.style.color = 'green'
    }
    else {
        message.style.color = 'red'
    }
}



