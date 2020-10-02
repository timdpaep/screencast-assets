/**
 * The Geolocation API(s)
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 */

// All Error Codes can be found on
// https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError/code
const getErrorByCode = (errorCode) => {
  const errorArray = [
    "User didn't allow the location tracking.",
    "Device can't get data.",
    'Location tracking timed out.',
  ];
  return errorArray[errorCode - 1];
};

/**
 * Get the location of this device
 */
const getLocation = () => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        // console.log(position);
        console.log(coords);
        resolve({ lat: coords.latitude, lon: coords.longitude });
      },
      (error) => {
        reject(new Error(getErrorByCode(error.code)));
      },
    );
  } else reject(new Error('No location was found.'));
});

getLocation().then((location) => {
  console.log(location);
});

/**
 * Watching our position
 */

var watchId = navigator.geolocation.watchPosition(({ coords }) => {
  console.log({ lat: coords.latitude, long: coords.longitude });
});

// clearing the position watcher
// navigator.geolocation.clearWatch(watchId);