import { lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "services/movies-api";
import { fetchSearchedMovies } from "services/movies-api";

const TrendingMoviesList = lazy(() => import("components/TrendingMoviesList"));

export const abortControllerHome = new AbortController();

const Home = () => {
   const [trendingMovies, setTrendingMovies] = useState([]);
   const [error, setError] = useState(null);
   const location = useLocation();

   useEffect(() => {
      async function fetchMovies() {
         try {
            const movies = await fetchTrendingMovies();
            if(movies.length === 0) {
               throw new Error('There are no trending movies today');
            };
            setTrendingMovies(movies.results);
         } catch (error) {
         setError(error.message);
         };
      };

      fetchMovies();

      return () => {
         abortControllerHome.abort();
      };
   }, []);

   fetchSearchedMovies();

   return (
      <>
         <h1>Trending today!</h1>
         <TrendingMoviesList trendingMovies={trendingMovies} location={location} />
         {error && <div error={error.message}></div>}
      </>      
   );
};

export default Home;
