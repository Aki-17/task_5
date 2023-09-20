class Person {
    constructor(name, age, address, degree, job) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.degree = degree;
        this.job = job
    }
    getDetails() {
        return (`Name:${this.name}, Age:${this.age}, Address:${this.address}, Degree:${this.degree}, Job:${this.job}`)
    }
    setAge(newAge) {
        if (newAge >= 0) {
            this.age = newAge;
        } else {
            console.log("Age cannot be negative")
        }     
    }
    setAddress(newAddress) {
        this.address = newAddress;
    }
}
let person1 =new Person ("Vignisha", 25, "Coimbatore", "BCA", "IT")
console.log(person1.getDetails())
person1.setAge(28)
console.log(person1.getDetails())
person1.setAddress("Salem")
console.log(person1.getDetails())