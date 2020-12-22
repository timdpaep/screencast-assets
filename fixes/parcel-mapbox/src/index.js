import './sass/main.scss';
import mapboxgl from 'mapbox-gl';

const initMapbox = (parentContainer) => {
  // creating a mapbox container
  const mapboxContainer = document.createElement('div');
  mapboxContainer.classList = "mapbox-container";

  // getting the mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1IjoidGltZHBhZXAiLCJhIjoiY2sxbnJ6bG9jMGRudTNvbzdteDJlZXhxNiJ9.GUk-bARwOyv1hiLPWRggQw';
  new mapboxgl.Map({
    container: mapboxContainer,
    style: 'mapbox://styles/mapbox/streets-v11'
  });

  // return mapbox
  return mapboxContainer;
}

const initApp = () => {
  const appContainer = document.getElementById('appContainer');
  const mapbox = initMapbox(appContainer);
  appContainer.appendChild(mapbox);
};

window.addEventListener('load', initApp);
