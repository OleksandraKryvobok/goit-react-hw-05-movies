import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/movies-api";

const ReviewsList = lazy(() => import('../ReviewsList/ReviewsList'));

export const abortControllerReviews = new AbortController();

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchMovieReviews() {
            try {
                const fetchedReviews = await fetchReviews(id);

                if(fetchedReviews.results.length === 0) {
                    throw new Error("We don't have any reviews for this movie");
                };

                setReviews(fetchedReviews.results);
            } catch (error) {
                setError(error.message);
            };
        };
        
        fetchMovieReviews();

        return () => {
            abortControllerReviews.abort();
        };
    }, []);

    return (
        <>
            <ReviewsList reviews={reviews}/>
            {error && <div>{error}</div>}
        </>
    );
};
export default Reviews;