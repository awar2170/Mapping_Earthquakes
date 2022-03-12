// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // What the above code is doing: 
    //     1. We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
    //     2. The mapid will reference the id tag in our <div> element on the index.html file.
    //     3. The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.


// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
//     });

// Above is an alternate method to create the map object
    // Benefits of this method are that you can use this to add multipe tile layers or a background image of our maps. 

console.log(map)

// // First Approach: We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // The above code is doing: 
//     1. The above code is from the leaflet uick start guide 
//     2.We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
//     3. The following URLs appear in the parentheses of our tileLayer() method:
//         The API URL with a reference to the accessToken
//         The OpenStreetMap URL inside the curly braces of our tileLayer() method
//     4. We add the maxZoom attribute and assign it a value of 18.
//     5. We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
//     6. We add the accessToken attribute and assign it the value of our API_KEY.
//     7. Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.

// To change a map's style: 
    // Use one of the lists of Mapbox IDs below: 
        // mapbox/streets-v11
        // mapbox/outdoors-v11
        // mapbox/light-v10
        // mapbox/dark-v10
        // mapbox/satellite-v9
        // mapbox/satellite-streets-v11
    // See the readme in the notes section for more information

// We create the tile layer that will be the background of our map.

console.log(map)

// Updated approach to the tile layer of the map 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);