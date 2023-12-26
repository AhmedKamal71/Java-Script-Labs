// Q1
var fName = prompt("Enter Your First Name: ")
if (fName.length > 0 && fName != null) {
    var lName = prompt("Enter Your Last Name: ")
    if (lName.length > 0 && lName != null) {
        var birth = prompt("Enter Your Birth Year: ")
        if (birth != null) {
            var age = 2023 - birth
            document.write(`Welcome ${fName} ${lName}, Your Age Is ${age} Years`)
        }
        else {
            alert("You Must Enter Your Age!")
        }
    }
    else {
        alert("You Must Enter Your Last Name!")
    }
}
else {
    alert("You Must Enter Your First Name!")
}

//------------------------------------------------------------------------------------------------------------
// Q1

alert("Welcome, It is the first release of a calculator that only has a summation feature")
num1 = prompt("Enter The First Number: ")
if (num1 != null) {
    num2 = prompt("Enter The Second Number: ")
    if (num2 != null) {
        sum = Number(num1) + Number(num2)
        document.write("<br>")
        document.write(`The Summation Is: ${sum}`)
    }
    else {
        alert("Please enter the second number to get the result.")
    }
}
else {
    alert("Please enter the first number to get the result.")
}



