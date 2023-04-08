import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "services/movies-api";

const CastList = lazy(() => import("components/CastList"));

export const abortControllerCast = new AbortController();

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        async function fetchMovieCast() {
            try {
                const fetchedCast = await fetchCast(id);

                if(fetchedCast.cast.length === 0) {
                    throw new Error("We don't have any actors for this movie");
                };

                setCast(fetchedCast.cast);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMovieCast();

        return () => {
            abortControllerCast.abort();
        };
    }, [id]);

    return (
        <>
            <CastList cast={cast}/>
            {error && <div>{error}</div>}
        </>
    )
};

export default Cast;