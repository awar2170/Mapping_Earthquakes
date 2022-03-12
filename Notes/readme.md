## Index.html Notes 
The Leaflet CSS and JavaScript files we added to the index.html file are referred to as content delivery networks (CDNs). Using CDNs has a security risk. To avoid the security risk, it's a best practice to include an integrity value with the CDN. Each file we added has its own integrity value, which is a Base64-encoded cryptographic hash of a resource that prevents the CDN from being hacked.

## Use the mapbox styles API steps 
To use the Mapbox Styles API, edit the URL in the Leaflet tilelayer()method, as detailed on the Leaflet website:

1. First, navigate to the [Mapbox Glossary] (https://docs.mapbox.com/help/glossary/).
2. Search the [Static Tiles API] (https://docs.mapbox.com/help/glossary/static-tiles-api/).
3. Copy this part of the URL: https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/.
4. In your tileLayer() code, replace this part of the URL, https://api.tiles.mapbox.com/v4/{id}/, with the Mapbox Styles API URL you copied.
5. Remove the .png from the URL.
6. Remove the id attribute and the map style reference.
7. The code for the tileLayer() should look like the following:

## Additional Useful Leaflet Functions
- [marker() function](https://leafletjs.com/index.html#marker) 
- [circle() function](https://leafletjs.com/index.html#circle) 
- [circleMaker() function](https://leafletjs.com/index.html#circlemarker)