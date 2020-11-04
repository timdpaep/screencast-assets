import './sass/main.scss';
import App from './App';
import { HomeComponent, ProductsComponent, ProductComponent } from './Components';

const initApp = () => {
  const appContainer = document.getElementById('appContainer');
  const app = new App(appContainer);

  // add components to app
  app.addComponent(new HomeComponent());
  app.addComponent(new ProductsComponent());
  app.addComponent(new ProductComponent());

  // init service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};

window.addEventListener('load', initApp);
