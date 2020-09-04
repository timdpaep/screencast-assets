/**
 * The Movie Item
 */

import { Movie } from '../lib/Movie.js';
import MovieStorage from '../lib/MovieStorage.js';
import { Component } from './Component.js';

export class MovieComponent extends Component {
  constructor(movie) {
    // call the super
    super();

    // validate if the incoming variable is an instance of a Movie
    if (!(movie instanceof Movie)) throw new Error('Incoming movie is not an instance of a Movie');

    // set the movie in our class
    this.movie = movie;
  }

  // NOTE: we have binded a Movie object on this one
  // this represents the movie object given via the constructor
  toggleLike(e) {
    // prevent default behaviour
    e.preventDefault();

    // toggle the like state
    this.toggleLike();

    // get the movie container
    const movieContainer = document.getElementById(this.id);
    const moviePoster = movieContainer.querySelector('.moviePoster');

    // remove existing classes
    moviePoster.classList.remove('like');
    moviePoster.classList.remove('dislike');

    // add new class (based on the lik/dislike status)
    moviePoster.classList.add(this.like ? 'like' : 'dislike');

    // save in the moviestorage
    if (this.like) MovieStorage.likeMovieId(this.id);
    else MovieStorage.dislikeMovieId(this.id);
  }

  render() {
    // create the movie container
    const movieContainer = document.createElement('div');
    movieContainer.id = this.movie.id;
    movieContainer.className = 'movie';

    // create a new movie link
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'movieLink';
    anchor.id = this.movie.id;
    anchor.addEventListener('click', this.toggleLike.bind(this.movie));

    // add the movie poster container
    const moviePoster = document.createElement('img');
    moviePoster.className = 'moviePoster';
    moviePoster.className += this.movie.like ? ' like' : ' dislike';

    moviePoster.alt = this.movie.title;
    moviePoster.title = this.movie.title;
    moviePoster.src = this.movie.posterUrl;

    // append movie poster to anchor
    anchor.appendChild(moviePoster);

    // append anchor to movie container
    movieContainer.appendChild(anchor);

    // return the moviecontainer
    return movieContainer;
  }
}
