class Uber {
    constructor(distance, rate, waitingtime, GST) {
        this.distance = distance;
        this.rate = rate;
        this.waitingtime = waitingtime;
        this.GST = GST;
    }
    getRideDetails() {
        return (`The distance of the ride is ${this.distance}km with the rate of ${this.rate}rs and the  waitin period of ${this.waitingtime}hours with GST ${this.GST}rs`)
    }
    setDistance(newDistance) {
        if (newDistance >= 50) {
            this.distance = newDistance
                    }
    }
    getPrice() {
        let newPrice = (this.distance * this.rate) + (5 * this.waitingtime) + (this.GST)
        return newPrice;
    }

   }
let price = new Uber(25, 20, 2, 20)
console.log(price.getRideDetails())
console.log(price.getPrice())
price.setDistance(60)
console.log(price.getRideDetails())
console.log(price.getPrice())
