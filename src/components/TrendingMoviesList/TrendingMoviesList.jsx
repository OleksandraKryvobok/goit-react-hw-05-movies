import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Item } from "./TrendingMoviesListstyled";

const MoviesList = ({ trendingMovies, location }) => {
    return (
        <ul>
            {trendingMovies.map(movie => {
                return (
                    <Item key={movie.id}>
                        <Link to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                    </Item>
                )
            })}
        </ul>
        
        
    );
};

export default MoviesList;

MoviesList.propTypes = {
    trendingMovies: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
}