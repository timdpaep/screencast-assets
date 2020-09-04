/**
 * The Movie Storage
 */

import { Storage } from './Storage.js';

class MovieStorage extends Storage {
  constructor(localstorage) {
    super(localstorage);
    this.initMovieStorage();
  }

  initMovieStorage() {
    if (!this.exists('likes')) this.initEmptyArray('likes');
  }

  getMovieLikes() {
    return this.getArray('likes');
  }

  dislikeMovieId(id) {
    let likes = this.getArray('likes');
    if (likes.includes(id)) {
      likes = likes.filter((likeId) => likeId !== id);
    }
    this.setArray('likes', likes);
  }

  likeMovieId(id) {
    const likes = this.getArray('likes');
    if (!likes.includes(id)) likes.push(id);
    this.setArray('likes', likes);
  }
}

// create an instance of a movieStorage
export default new MovieStorage(localStorage);