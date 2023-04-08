import { lazy, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchedMovies } from "services/movies-api";

const SearchBar = lazy(() => import("../components/SearchBar"));
const SearchedMovies = lazy(() => import("../components/SearchedMovies"));

export const abortControllerMovies = new AbortController();

const Movies = () => {
    const [fetchedMovies, setFetchedMovies] = useState([]);
    const [queryMovie, setQueryMovie] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    useEffect(() => {
        setQueryMovie(searchParams.get('query'));
    }, [searchParams]);

    useEffect(() => {
        if(!queryMovie) {
            setFetchedMovies([]);
            return;
        };

        setLoading(true);

        async function fetchMovies() {
            try {
                const searchedMoviesList = await fetchSearchedMovies(queryMovie);
                if(searchedMoviesList.results.length === 0) {
                    throw new Error("We don't have any movies for your request");
                };
                 
                setFetchedMovies(searchedMoviesList.results);
                setError(null);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            };
        }

        fetchMovies();

        return () => {
            abortControllerMovies.abort();
        };
    }, [queryMovie]);

    const handleSubmit = (inputValue) => {
        const query = inputValue !== '' ? {query: inputValue} : {};
        setSearchParams(query);
    };

    return (
        <>
            <SearchBar onFormSubmit={handleSubmit} />
            {!error && <SearchedMovies moviesList={fetchedMovies} location={location} />}
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
        </>
    );
};

export default Movies;