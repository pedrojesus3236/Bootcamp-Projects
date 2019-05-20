

function greet (age, gender, name) {
    
    let greeting = gender; 
    
    if (gender === "male") {

        greeting = "Mr. ";
    } else {

        greeting = "Ms. ";
    }

    if (age < 40 && gender === "male") {

        return "Hey " + name + " my boy";

    } else if (age < 40 && gender === "female") {

        return "Hey " + name + " my girl"

    } else {
        
        return "Hello " + greeting + name;
    } 
}

  
let greetAnAdultMale = greet.bind (null, 40, "male");

let greetAYoungster = greet.bind (null, 10);
  