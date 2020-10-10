/**
 * External API
 */

/**
 * Get the location of this device
 * More information can be found in Web Api's: #3 Geolocation
 */
const getLocation = () => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ lat: coords.latitude, lon: coords.longitude });
      },
      (error) => {
        reject(new Error(getErrorByCode(error.code)));
      },
    );
  } else reject(new Error('No location was found.'));
});

getLocation().then((location) => {
  mapboxgl.accessToken = 'YOUR API KEY';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });

  //The inital geographical centerpoint of the map.
  // If center is not specified in the constructor options,
  // Mapbox GL JS will look for it in the map's style object.
  // If it is not specified in the style, either, it will default to [0, 0]
  // Note: Mapbox GL uses longitude, latitude coordinate order
  // (as opposed to latitude, longitude) to match GeoJSON.

  // fly to my location
  map.flyTo({
    center: [ location.lon, location.lat ],
    zoom: 9
  });
});