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
        this.isManager = true;

    }
    setSalary(value) {
        this.salary = value
        if (value < 1000) {
            this.salary = 1000;
        }
    }
    getSalary() {
        return this.salary;
    }
    work(hours) {
        if (hours == 8) {
            this.workMood = 'Happy';
        }
        else if (hours > 8) {
            this.workMood = 'Tired';
        }
        else if (hours < 8) {
            this.workMood = 'Lazy';
        }
        else {
            console.log("Invalid Work Hours");
        }
        return this.workMood;
    }
};

class Office {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    getAllEmoloyees() {
        if (this.employees.length == 0) {
            console.log('There Is No Employee In The Company!');
        }
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
        const index = this.employees.findIndex(emp => emp.id === empId);
        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log(`Employee with ID ${empId} has been fired.`);
        } else {
            console.log(`Employee with ID ${empId} not found.`);
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
const obj1 = new Employee();
var flag = true;

function Add() {
    var Name = prompt('Enter Employee Full Name: ')
    var Email = prompt('Enter Employee Email: ')
    var Id = prompt('Enter Employee ID: ')
    var Mood = Number(prompt('Enter Employee Work Hours: '));

    var Salary = Number(prompt('Enter Employee Salary: '))
    obj1.setSalary(Salary)
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
        id: Id.toString(),
        Work_mood: obj1.work(Mood),
        salary: obj1.getSalary(),
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