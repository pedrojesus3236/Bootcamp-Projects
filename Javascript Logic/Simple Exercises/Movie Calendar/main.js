

let movies = [];

for (let i = 1; i <= 6; i++) {

    let object = {};
    object.name = prompt("Movie");
    object.date = prompt("Date"); 
    object.actor = prompt("Actor");
    movies.push(object);
}

let name = prompt("Please choose a movie and I will give you the airing date");

let found = false;
for (let i = 0; i < movies.length; i++) {
    if (name === movies[i].name) {
        alert(movies[i].date);
        found = true;
    }
}

if (!found) {
    alert("We don't have that movie");
}

