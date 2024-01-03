// Part One
// 1) Login:

userName = prompt('Enter Your User Name: ')
password = prompt('Enter Your Password: ')

if (userName == 'admin' && password == '421$$') {
    alert("Welcome Login Success");
}
if (password != '421$$' && userName != 'admin') {
    alert('Your Name And Password Are Wrong!')
}
else if (userName != 'admin') {
    alert('Your User Name Is Wrong!')
}
else if (password != '421$$') {
    alert('Your Password Is Wrong!');
}

//--------------------------------------------------------------------------------------------------------------
// 2) Calc:

function Calculator(num1, sign, num2) {
    num1 = prompt('Enter Number1: ');
    sign = prompt('Enter The Operation: ');
    num2 = prompt('Enter Number2: ');
    var result;
    switch (sign) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            result = parseInt(num1) - parseFloat(num2);
            break;
        case '/':
            if (parseInt(num2) == 0) {
                alert("Error! Division by zero is not allowed.");
                return false;
            }
            else {
                result = parseFloat(num1) / parseInt(num2);
            }
            break;
        case '*':
            result = parseInt(num1) * parseInt(num2);
            break;
        case '%':
            if (parseInt(num1) == 0) {
                alert("Error! Cannot divide by zero.")
                return false;
            } else {
                result = parseInt(num1) % parseInt(num2);
            }
            break;
        default:
            alert('Error! Invalid operator.');


    }
    alert(result)
}

while (true) {
    Calculator()
}

//--------------------------------------------------------------------------------------------------------------
// Part Two
// Lap1:

var size = Number(prompt('How Many Number You Want To Enter: '))
var arr = [];
var sum = 0;
var avg = 0;
var i;
for (i = 0; i < size; i++) {
    x = Number(prompt(`Ènter Number ${i + 1}: `))
    arr.push(x)
}

for (i = 0; i < size; i++) {
    sum += arr[i];
}
avg = sum / size;
alert(`The Summation Is: ${sum}  ||  And The Average Is: ${avg}`);
// -------------------------------------------------------------------------------------------------------------

