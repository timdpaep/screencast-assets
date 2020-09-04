/**
 * The Movie Database Api
 * See online documentation: https://www.themoviedb.org/documentation/api
 */

import { MOVIE_DB_API_KEY } from '../consts.js';

class MovieDbApi {
  async discover() {
    try {
      // fetch the data from our movie db API
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);

      // convert the movies to a readable json object
      const movies = await res.json();

      // the results
      return movies.results;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

// export instance of our movie DB Api (singleton)
export default new MovieDbApi();
