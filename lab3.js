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
// Part Two-Lab1:

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
// Part Two-Lab2:

var flag = true;
var contact = [];
while (flag) {
    var i;
    var operation = prompt('Enter Your Choice (add/search) ');
    if (operation == 'add') {
        var name = prompt('Enter Your Name: ');
        var phone = prompt('Enter Your Phone: ');
        var obj = {
            Name: `${name}`,
            Phone: `${phone}`
        }
        contact.push(obj)
    }
    else if (operation == 'search') {
        if (contact.length == 0) {
            alert("The Contact List Is Empty!")
        }
        else {
            var n = prompt("Enter the person's name you want to search : ");
            for (i = 0; i < contact.length; i++) {
                if (contact[i].Name == n) {
                    alert(`The Contact Name Is: ${contact[i].Name} || The Phone Number is: ${contact[i].Phone}`);
                }
            }
        }
    }
    else {
        alert("Invalid Option");
    }
    ch = prompt('Do You Want To Continue? Y/N')
    if (ch == 'Y' || ch == 'y') {
        continue;
    }
    else {
        flag = false;
    }
}
console.log(contact);

// -------------------------------------------------------------------------------------------------------------
// Part Two-Bonus:

var flag = true;
while (flag) {
    var area = 0;
    ch = prompt('Enter The Shape Name: ');
    shape = ch.toLowerCase();
    switch (true) {
        case (shape === 'circle'):
            var radius = prompt('Enter The Radius: ');
            area += Math.PI * Math.pow(radius, 2);
            break;
        case (shape === 'triangle'):
            var base = prompt('Enter The Base: ');
            var height = prompt('Enter The Height:');
            area += 1 / 2 * base * height;
            break;
        case (shape === 'square'):
            var side = prompt('Enter The Side Length: ');
            area += side * side;
            break;
        case (shape === 'rectangle'):
            var l = prompt('Enter Length: ');
            var w = prompt('Enter Width: ');
            area += l * w;
            break;
        case (shape === 'parallelogram'):
            var b = prompt('Enter Base: ');
            var h = prompt('Enter Height: ');
            area += b * h;
            break;
        case (shape === 'Trapezium'):
            var c = prompt("Enter the length of the parallel sides and the upper part : ");
            var d = prompt("Enter the length of the lower part");
            var e = prompt("Enter the height");
            area += (c + d) / 2 * e;
            break;
        case (shape === 'Ellipse'):
            var minor = prompt('Enter the minor axis: ');
            var k = minor / 2;
            var major = prompt('Enter the major axis: ');
            var l = major / 2;
            area += Math.PI * k * l;
            break;
        default:
            alert('Invalid!');
    }
    alert(`The ${shape} Area Is: ${area}`);
}
// -------------------------------------------------------------------------------------------------------------
// Part3
// EX1:

/* 
1- Object.keys(obj):
Description: Returns an array of a given object's own enumerable property names.
Example:
let object = { 
    a: 1, 
    b: 2, 
    c: 3 
};
console.log(Object.keys(object)); // Output: ['a', 'b', 'c']
*/

/*
2- Object.values(obj):
Description: Returns an array of a given object's own enumerable property values.
Example:
const myObject = { a: 1, b: 2, c: 3 };
console.log(Object.values(myObject)); // Output: [1, 2, 3]
*/

/*
3- Object.assign(target, ...sources):
Description: Copies the values of all enumerable properties from one or more source objects to a target object.
Example:
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }
*/

/*
4- Object.entries(obj):
Description: Returns an array of a given object's own enumerable property [key, value] pairs.
Example:
const myObject = { a: 1, b: 2, c: 3 };
console.log(Object.entries(myObject)); // Output: [['a', 1], ['b', 2], ['c', 3]]
*/

/*
5- Object.freeze(obj):
Description: Freezes an object, preventing new properties from being added and existing properties from being modified or removed.
Example:
const myObject = { a: 1, b: 2 };
Object.freeze(myObject);
myObject.c = 3; // Error in strict mode
*/

/*
6- Object.seal(obj):
Description: Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
Example:
const myObject = { a: 1, b: 2 };
Object.seal(myObject);
myObject.c = 3; // Error in strict mode
*/

/*
7- Object.hasOwnProperty(prop):
Description: Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
Example:
const myObject = { a: 1, b: 2 };
console.log(myObject.hasOwnProperty('a')); // Output: true
console.log(myObject.hasOwnProperty('c')); // Output: false
*/

/*
8- Object.is(obj1, obj2):
Description: Determines whether two values are the same value. Equivalent to the === operator.
Example:
console.log(Object.is(1, 1)); // Output: true
console.log(Object.is('foo', 'bar')); // Output: false
*/

/*
9- Object.getOwnPropertyNames(obj):
Description: Returns an array of all properties (enumerable or not) found directly upon a given object.
Example:
const myObject = { a: 1, b: 2 };
console.log(Object.getOwnPropertyNames(myObject)); // Output: ['a', 'b']
*/

/*
10- Object.isPrototypeOf(obj):
Description: Returns a boolean indicating whether the object is in the prototype chain of another object.
Example:
const protoObj = { x: 10, y: 20 };
const myObject = Object.create(protoObj);
console.log(protoObj.isPrototypeOf(myObject)); // Output: true
*/
//-------------------------------------------------------------------------------------------------------------
// EX2:

/*
1- Array.push(element1, ..., elementN):
Description: Adds one or more elements to the end of an array and returns the new length of the array.
Example:
const myArray = [1, 2, 3];
const newLength = myArray.push(4, 5);
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
*/

/* 
2- Array.pop():
Description: Removes the last element from an array and returns that element.
Example:
const myArray = [1, 2, 3, 4, 5];
const lastElement = myArray.pop();
console.log(myArray); // Output: [1, 2, 3, 4]
console.log(lastElement); // Output: 5
*/

/*
3- Array.unshift(element1, ..., elementN):
Description: Adds one or more elements to the beginning of an array and returns the new length of the array.
Example:
const myArray = [3, 4, 5];
const newLength = myArray.unshift(1, 2);
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
*/

/*
4- Array.shift():
Description: Removes the first element from an array and returns that element.
Example:
const myArray = [1, 2, 3, 4, 5];
const firstElement = myArray.shift();
console.log(myArray); // Output: [2, 3, 4, 5]
console.log(firstElement); // Output: 1
*/

/*
5- Array.join(separator):
Description: Joins all elements of an array into a string, separated by the specified separator (default is a comma).
Example:
const myArray = [1, 2, 3];
const result = myArray.join('-');
console.log(result); // Output: '1-2-3'
*/

/*
6- Array.slice(startIndex, endIndex):
Description: Returns a shallow copy of a portion of an array as a new array. The original array is not modified.
Example:
const myArray = [1, 2, 3, 4, 5];
const slicedArray = myArray.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]
*/

/*
7- Array.concat(array2, array3, ..., arrayN):
Description: Returns a new array by concatenating one or more arrays or values to the original array.
Example:
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2, 5, [6, 7]);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7]
*/

/*
8- Array.indexOf(element, fromIndex):
Description: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
Example:
const myArray = [1, 2, 3, 4, 5];
const index = myArray.indexOf(3);
console.log(index); // Output: 2
*/

/*
9-Array.reverse():
Description: Reverses the elements of an array in place.
Example:
const myArray = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray); // Output: [5, 4, 3, 2, 1]
*/

/*
10- Array.filter(callback(element, index, array), thisArg):
Description: Creates a new array with all elements that pass the test implemented by the provided function.
Example:
const myArray = [1, 2, 3, 4, 5];
const filteredArray = myArray.filter((element) => element > 2);
console.log(filteredArray); // Output: [3, 4, 5]
*/
//------------------------------------------------------------------------------------------------------
// EX3:

function outerFunction(p1) {
    console.log("Outer parameter:", p1);
    function innerFunction(p2) {
        console.log("Inner parameter:", p2);
        console.log("Outer parameter inside inner function:", p1);
    }
    innerFunction("Inner value");
}
outerFunction("Outer value");

/*
Lexical Environment:
The lexical environment refers to the context in which a function is declared.
It includes the variables and their values that are in scope at the time of the function's definition.
*/


/*
Closure:
A closure is created when a function is defined inside another function (nested function).
The inner function has access to the outer function's variables, including its parameters and variables.
*/
//-------------------------------------- End Of Lab3 --------------------------------------------------------------//