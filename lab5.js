class Person {
    constructor(fName, money, sleepMood, healthRate) {
        this.fName = fName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }
    // methods
    Sleep(hours) {
        if (hours == 7) {
            this.sleepMood = 'Happy';
        }
        else if (hours < 7) {
            this.sleepMood = 'Tired';
        }
        else if (hours > 7) {
            this.sleepMood = 'Lazy';
        }
        else {
            console.log("Invalid Sleep Hours");
        }
    }
    Eat(meals) {
        if (meals == 3) {
            this.healthRate = 100;
        }
        else if (meals == 2) {
            this.healthRate = 75;
        }
        else if (meals == 1) {
            this.healthRate = 50;
        }
        else {
            console.log('Invalid Meal Amount');
        }
    }
    Buy(items) {
        items *= 10;
        this.money -= items;
    }
};

class Employee extends Person {
    constructor(fName, id, email, workMood, salary, isManager) {
        super(fName);
        this.id = id;
        this.email = email;
        this.workMood = workMood;
        this.salary = salary;
        this.isManager = true;

    }
    set salary(value) {
        this.salary = value
        if (value < 1000) {
            this.salary = 1000;
        }
    }
    get salary() {
        return this.salary;
    }
};

class Office {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    getAllEmoloyees() {
        return this.employees;
    }
    getEmployee(empId) {
        for (let employee of this.employees) {
            if (employee.id == empId) {
                if (employee.isManager == true) {
                    const { salary, ...managerInfo } = employee;
                    return managerInfo;
                }
                return employee;
            }
        }
    }

    Hire(emp) {
        this.employees.push(emp);
    }

    Fire(empId) {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id === empId) {
                delete this.employees[i];
            }
        }
    }
};

function Menu() {
    var choice = prompt('1) Add New Employee\n2) Display Employees\n3) Display Employee Info\n4) Fire Employee\n5) Quit');
    switch (choice) {
        case '1':
            Add();
            break;
        case '2':
            displayAll();
            break;
        case '3':
            displayInfo();
            break;
        case '4':
            fire();
            break;
        case '5':
            Quit();
            break;
        default:
            console.log('Invalid Option!');
    }
}

const obj = new Office('Ahmed Company')
var flag = true;

function Add() {
    var Name = prompt('Enter Employee Full Name: ')
    var Email = prompt('Enter Employee Email: ')
    var Id = prompt('Enter Employee ID: ')
    var Mood = prompt('Enter Employee workMood: ')
    var Salary = prompt('Enter Employee Salary: ')
    var IsManager = prompt('Is This Employee A Manager? (T/F) ')
    if (IsManager === "T") {
        IsManager = true;
    }
    else if (IsManager === "F") {
        IsManager = false;
    }
    const addedEmp = {
        name: Name,
        email: Email,
        id: parseInt(Id),
        mood: Mood,
        salary: parseFloat(Salary),
        isManager: IsManager
    };
    obj.Hire(addedEmp);
}

function displayAll() {
    console.log(obj.getAllEmoloyees());
}

function displayInfo() {
    var index = prompt("Please enter the employee's ID number to view their information");
    console.log(obj.getEmployee(index));
}

function fire() {
    var empID = prompt("please enter the employee's ID number to Fire him");
    obj.Fire(empID);

}

function Quit() {
    flag = false;
}

while (flag) {
    Menu()
}
