// Check that code is working 
console.log("working");

// Tile Layer background 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Tile Layer Background 
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Base Map 
let baseMaps = {
    "Streets": streets, 
    "Satellite Streets": satelliteStreets
};

// Create the map obj with default center and zoom 
let map = L.map('mapid', {
    center: [43.7,-79.3], 
    zoom: 11,
    layers: [satelliteStreets]
});

// Pass our map layers into our layer control and add the layer control to the map 
L.control.layers(baseMaps).addTo(map);


let torontoData = "https://raw.githubusercontent.com/awar2170/Mapping_Earthquakes/main/static/js/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle, 
    onEachFeature: function(feature, layer){
        layer.bindPopup("<h3> Airline: " + feature.properties.airline + "<h/3> <hr><h3> Destination: " + feature.properties.dst + "</h3>" )
    }
  }).addTo(map);
});
