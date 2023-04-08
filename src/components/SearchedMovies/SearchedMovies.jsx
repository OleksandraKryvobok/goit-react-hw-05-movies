import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Item } from "./SearchedMovies.styled";

const SearchedMovies = ({ moviesList, location }) => {
    return (
        <ul>
            {moviesList.map(movie => {
                return (
                    <Item key={movie.id}>
                        <Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link>
                    </Item>
                )
            })}            
        </ul>
    );
};

export default SearchedMovies;

SearchedMovies.propTypes = {
    moviesList: PropTypes.array.isRequired,
    locatoin: PropTypes.object,
}