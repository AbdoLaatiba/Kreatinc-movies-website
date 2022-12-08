export default class MovieDB {
  constructor() {
    this.apiKey = 'e7b90abfa720a23bce81e77acf64731d';
  }

  async getMovies(page = 1) {
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${this.apiKey}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      movies: data.results,
      currentPage: data.page,
      totalPages: data.total_pages
    };
  }

  async editorChoiceMovies() {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_networks=213`;

    const response = await fetch(URL);
    const data = await response.json();
    const movies = data.results;
    // Get the first 4 movies
    const editorChoiceMovies = movies.slice(0, 4);
    return editorChoiceMovies;

  }

  async searchMovies(query, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      movies: data.results,
      currentPage: data.page,
      totalPages: data.total_pages
    };
  }

  async filterMovies({ genre, language, rating }, page = 1) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&&page=${page}${language != null ? '&with_original_language=' + language : ''}${rating != null ? '&vote_average.gte=' + rating : ''}${genre != null ? '&with_genres=' + genre : ''}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      movies: data.results,
      currentPage: data.page,
      totalPages: data.total_pages
    };
  }

  async getGenres(query, page = 1) {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }


  async getCastCrew(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    return {
      cast: data.cast,
      crew: data.crew
    };
  }


  async getMovieReviews(movieId, page = 1) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.apiKey}&page=${page}`;

    const response = await fetch(url);
    const data = await response.json();
    return {
      reviews: data.results,
      currentPage: data.page,
      totalPages: data.total_pages,
    };
  }

  async getWatchListMovies(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
    return data;
  }

}
