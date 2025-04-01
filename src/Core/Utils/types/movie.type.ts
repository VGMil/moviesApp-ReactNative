export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
  }
  
export interface MovieResponse {
    results: Movie[];
}