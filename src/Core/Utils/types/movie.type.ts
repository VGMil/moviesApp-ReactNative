export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
  }
  
export interface MovieResponse {
    results: Movie[];
}

export interface detailsMovies {
    id: number;
    title: string;
    vote_average: number;
    overview: string;
}