/**
 * The Movie DB application
 */

import { MovieFactory } from './lib/index.js';
import { MoviesList } from './components/index.js';

const App = async () => {
  // get the app container
  const appContainer = document.getElementById('app');

  // get the movies from our API & MovieStorage (localStorage)
  const movies = await MovieFactory.getRandomMovies();

  // render out a new movies list, based on our movies
  appContainer.appendChild(new MoviesList(movies).render());
};

App();
