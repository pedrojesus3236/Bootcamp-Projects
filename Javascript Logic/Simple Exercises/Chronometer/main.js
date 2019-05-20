

class Chronometer {

    constructor () {

        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.time = "";
    }

    addTime(add) {

        let adding = this.milliseconds += add;

        return adding;
    }

    startTime() {
        
        setInterval(() => {

            this.definingTime();
            console.log(this.time);
        }, 1);
    }

    getTime(timeToPrint) {

       setTimeout(() => {

        console.log(this.time);
       }, timeToPrint);    
    }

    definingTime() {

        this.milliseconds++;

        if(this.milliseconds >= 1000) {

            this.milliseconds = 0;
            this.seconds++;

            if(this.seconds >= 60) {

                this.seconds = 0;
                this.minutes++;

                if(this.minutes >= 60) {

                    this.minutes = 0;
                }
            }
        }

        this.time = this.minutes + ":" + this.seconds + ":" + this.milliseconds;
    }
}

let chronometer = new Chronometer;
chronometer.startTime();
