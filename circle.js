class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
            }
}
let myCircle = new Circle(5, "red");
console.log("New Radius:", myCircle.radius)
console.log("Color:", myCircle.color)
console.log("Area:", myCircle.calculateArea())
console.log("Circumference:", myCircle.calculateCircumference())