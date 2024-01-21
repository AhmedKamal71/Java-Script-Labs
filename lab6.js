// Part 1
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides
        this.sideLength = sideLength
    }
    calcPerimeter() {
        var perimeter = this.sides * this.sideLength;
        console.log(`The perimeter is:${perimeter}`);
    }
}
const square = new Shape('square', 4, 5)
square.calcPerimeter()
const triangle = new Shape('triangle', 3, 3)
triangle.calcPerimeter()
// ----------------------------------------------------------------------
// Part 2
class Square extends Shape {
    constructor(sideLength) {
        super('square', 4)
        this.sideLength = sideLength;
    }
    calcArea() {
        var Area = this.sideLength * this.sideLength
        console.log(`The Area Is: ${Area}`);
    }
}
const obj = new Square(6)
obj.calcPerimeter()
obj.calcArea()
// ------------------------------------------------------------------------
// Part 3
class Triple {
    static customName = 'Tripler'
    static description = 'I triple any number you provide'
    static calculate(n = 1) {
        return n * 3
    }
}

class SquaredTriple extends Triple {
    static longDescription;
    static description = 'square the triple of any number you provide'
    static calculate(n) {
        // var result = Triple.calculate(n)
        return Triple.calculate(n) * Triple.calculate(n)
    }
}
console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));

console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);
// ------------------------------------------------------ End Of Lab ---------------------------------------------



