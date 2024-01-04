// 1- Using Constructor Function:

function Person(fName, money, sleepMood, healthRate) {
    this.fName = fName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    // methods
    this.Sleep = function (hours) {
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
    this.Eat = function (meals) {
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
    this.Buy = function (items) {
        items *= 10;
        this.money -= items;
    }
}

// Test OutPut
const person1 = new Person('Ahmed Kamal', 100, '', 0);
person1.Eat(2);
person1.Sleep(9);
person1.Buy(3);
console.log(person1);
// -------------------------------------------------------------------------------------------------------------
// 2- Using Class:

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
}

// Test OutPut
const person2 = new Person('Ahmed Kamal', 100, '', 0);
person2.Eat(2);
person2.Sleep(9);
person2.Buy(3);
console.log(person2);
// -------------------------------------------------------------------------------------------------------------
// 3- Using OLOO:

const Person = {
    init: function (fName, money, sleepMood, healthRate) {
        this.fName = fName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },
    Sleep: function (hours) {
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
        return this;
    },
    Eat: function (meals) {
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
        return this;
    },
    Buy: function (items) {
        items *= 10;
        this.money -= items;
        return this;
    }
};

// Test OutPut
const person3 = Object.create(Person).init('Ahmed Kamal', 100, '', 0);
person3.Eat(2);
person3.Sleep(6);
person3.Buy(2);
console.log(person3);
// -------------------------------------------------------------------------------------------------------------
// 4- Using Factory Function:

function Person(fName, money, sleepMood, healthRate) {
    return {
        fName,
        money,
        sleepMood,
        healthRate,
        Sleep: function (hours) {
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
        },
        Eat: function (meals) {
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
        },
        Buy: function (items) {
            items *= 10;
            this.money -= items;
        }

    }
}

// Test OutPut
const person4 = Person('Ahmed Kamal', 100, '', 0);
person4.Eat(2);
person4.Sleep(10);
person4.Buy(6);
console.log(person4);
// ---------------------------------------------------- End Of Lab4 -----------------------------------------------------------------