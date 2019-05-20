
// Using classes


class SpaceObjects {

    constructor (weight, kmTravelled, timeElapsed) {
        this.weight = weight;
        this.kmTravelled = kmTravelled;
        this.timeElapsed = timeElapsed;
    }

    getVelocity() {
        let result = this.kmTravelled / this.timeElapsed;
        return result;
    }

}


class Meteorite extends SpaceObjects {

    constructor (weight, kmTravelled, timeElapsed) {
        super(weight, kmTravelled, timeElapsed);
    }   
}

class Planet extends SpaceObjects {

    constructor (weight, kmTravelled, timeElapsed) {
        super(weight, kmTravelled, timeElapsed);
    }
}


// Using constructor function


// function SpaceObjects (weight, kmTravelled, timeElapsed) {

//     this.weight = weight;
//     this.kmTravelled = kmTravelled;
//     this.timeElapsed = timeElapsed;
//     this.velocity = function() {

//         let result = this.kmTravelled / this.timeElapsed;
//         return result;
//     }
// }


// function Meteorite (weight, kmTravelled, timeElapsed) {

//     SpaceObjects.call(this, weight, kmTravelled, timeElapsed);
// }

// function Planet (weight, kmTravelled, timeElapsed) {

//     SpaceObjects.call(this, weight, kmTravelled, timeElapsed);
// }

