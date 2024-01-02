// Q1:

var flag = true
while (flag) {
    var age;
    var prop;
    var ageString = prompt("Please enter your age or type 'cancel' to exit:");
    if (ageString === "cancel") {
        alert("Exiting!");
        break;
    }

    age = Number(ageString);
    if (age < 0) {
        alert("Please enter a positive number!!");
        continue;
    }
    switch (true) {
        case age >= 1 && age <= 10:
            prop = "You are a child.";
            break;
        case age >= 11 && age <= 18:
            prop = "You are a teenager.";
            break;
        case age >= 19 && age <= 50:
            prop = "You are a grown-up.";
            break;
        default:
            prop = "You are old.";
            break;
    }

    alert(prop);
}
//----------------------------------------------------------------------------------------------------------------
// Q2:

string = prompt("Please Enter A String: ")
var arr = string.split('')
var i;
var counter = 0;
for (i of arr) {
    if (i === 'a' || i === 'A') {
        counter++;
    }
    if (i === 'o' || i === 'O') {
        counter++;
    }
    if (i === 'i' || i === 'I') {
        counter++;
    }
    if (i === 'e' || i === 'E') {
        counter++;
    }
    if (i === 'u' || i === 'U') {
        counter++;
    }
}
alert(`Number Of Vowls Is: ${counter}`)

//----------------------------------------------------------------------------------------------------------------
// Q3:

var clock = Number(prompt('Enter The Clock To Convert: '));
switch (true) {
    case clock < 12 && clock > 0:
        alert(`The Clock Is: ${clock} AM`);
        break;
    case clock > 12 && clock < 24:
        var newClock = clock - 12;
        alert(`The Clock Is: ${newClock} PM`)
        break;
    case clock == 12:
        alert(`The Clock Is: 12 PM`);
        break;
    case clock == 0:
        alert(`The Clock Is: 12 AM`);
        break;
    default:
        alert(`Invalid Input, Please Try Again.`);
}