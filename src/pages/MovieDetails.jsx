import { useParams } from "react-router-dom";
import { fetchMovie } from "services/movies-api";
import { useEffect, useState, lazy } from "react";

const MovieInfo = lazy(() => import("../components/MovieInfo"));

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true);
        async function fetchMovieById() {
            try {
                const movie = await fetchMovie(id);

                if(!movie) {
                    throw new Error("We don't have information about this film");
                }
                setMovie(movie);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            };
        };

        fetchMovieById();
    }, [id]);

    return (
        <>
            <MovieInfo movieDetails={movie} />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
        </>
    );
};

export default MovieDetails;