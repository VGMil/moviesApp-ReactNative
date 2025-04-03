//@ts-ignore
import { TMDB_KEY } from '@env';
//@ts-ignore

export const API_CONSTANTS = {
    TMDB_KEY,
    TMDB_URL: {
        BASE_URL: "https://api.themoviedb.org/3/",
        NOW_PLAYING: "movie/now_playing",
        POPULAR: "movie/popular",
        UPCOMING: "movie/upcoming",
    },
    TMDB_QUERY: {
        DETAILS: "movie/",
        SEARCH: "search/movie",
        IMAGE: "https://image.tmdb.org/t/p/"
    }
}

export const basicApiUrl = (url: string): string => {
    const apiUrl = `${API_CONSTANTS.TMDB_URL.BASE_URL}${url}?api_key=${API_CONSTANTS.TMDB_KEY}`;
    return apiUrl;
}

export const detailsApiUrl = (id: number): string => {
    const apiUrl = `${basicApiUrl(`${API_CONSTANTS.TMDB_QUERY.DETAILS}${id}`)}`;
    console.log(apiUrl);
    return apiUrl;
}

export const searchApiUrl = (query: string): string => {
    const apiUrl = `${basicApiUrl(API_CONSTANTS.TMDB_QUERY.SEARCH)}&query=${query}`;
    return apiUrl;
}

export const getImageUrl = (path: string, size:string = "original"): string => {
    return `${API_CONSTANTS.TMDB_QUERY.IMAGE}${size}${path}`;
}