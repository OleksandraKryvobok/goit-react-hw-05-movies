import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from "react-router-dom";
import { StyledLink, Container, Title, Text, SecTitle, Line, ContainerAddInfo, ListAddInfo, ItemAddInfo } from "./MovieInfo.styled";
import { Suspense, useRef } from "react";

const MovieInfo = ({ movieDetails }) => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movie');

    return (
        <div>
            <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
            
            <Container>
                {movieDetails.poster_path && <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt="Movie poster" width={200} height={450} />}
                <div>
                    <Title>{movieDetails.title}</Title>
                    <Text>User Score: {Math.round(movieDetails.vote_average * 10)}%`</Text>
                    <SecTitle>Overview</SecTitle>
                    <Text>{movieDetails.overview}</Text>
                    <SecTitle>Genres</SecTitle>
                    <Text>
                        {movieDetails.genres && 
                        movieDetails.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </div>
            </Container>

            <Line></Line>

            <div>
                <ContainerAddInfo>
                    <SecTitle>Additional information</SecTitle>
                    <ListAddInfo>
                        <ItemAddInfo>
                            <Link to="cast">Cast</Link>
                        </ItemAddInfo>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ListAddInfo>
                </ContainerAddInfo>

                <Line></Line>

                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div> 
        </div>
    );
};

export default MovieInfo;

MovieInfo.propTypes = {
    movieDetails: PropTypes.object.isRequired,
}