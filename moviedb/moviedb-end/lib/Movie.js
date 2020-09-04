/**
 * The Movie Item
 */

export class Movie {
  constructor({
    id, title, overview, posterUrl, like,
  }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.posterUrl = posterUrl;
    this.like = like;
  }

  toggleLike() {
    this.like = !this.like;
  }
}
