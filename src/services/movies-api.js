import axios from "axios";
import { abortControllerHome } from "pages/Home";
import { abortControllerMovies } from "pages/Movies";
import { abortControllerSearchedMovies } from "pages/MovieDetails";
import { abortControllerCast } from "components/Cast/Cast";
import { abortControllerReviews } from "components/Reviews/Reviews";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1031ac21012605f271b16d5645868876';

export async function fetchTrendingMovies() {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
        params: {
            api_key: API_KEY,
            page: 1,
            signal: abortControllerHome.signal
        }
    });

    return response.data;
};

export async function fetchMovie(id) {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: {
            api_key: API_KEY,
            signal: abortControllerMovies.signal
        }
    });

    return response.data;
};

export async function fetchSearchedMovies(searchValue) {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query: `${searchValue}`,
            signal: abortControllerSearchedMovies.signal
        }
    });

    return response.data;
};

export async function fetchCast(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
        params: {
            api_key: API_KEY,
            signal: abortControllerCast.signal
        }
    });

    return response.data;
};

export async function fetchReviews(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
        params: {
            api_key: API_KEY,
            signal: abortControllerReviews.signal
        }
    });

    return response.data;
};
