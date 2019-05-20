
let map 
let marker
// Initialize and add the map

function initMap() {

    // The location of Uluru

    let uluru = {

        lat: -25.344,
        lng: 131.036
    };

    // The map, centered at Uluru

    map = new google.maps.Map(

        document.getElementById('map'), {

            zoom: 7,
            center: uluru
        });

    // The marker, positioned at Uluru
    
    marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}





// My code

const form = document.getElementById("form");
const input = document.getElementById("search");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let url = new URL("http://localhost:3000/test");
    let params = {city: input.value};

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    console.log(url)

    fetch(url)
      .then(res => res.json())
      .then(json => {
          map.setCenter(new google.maps.LatLng(json.center[0], json.center[1]))
          marker.setPosition(new google.maps.LatLng(json.center[0], json.center[1]))
        })
      .catch(error => console.error('Error:', error));
});