import PropTypes from 'prop-types';
import { Item, Photo, Name, Character} from './CastList.styled';

const CastList = ({ cast }) => {
    return (
        <ul>
            {cast.map(actor => {
                return(
                    <Item key={actor.cast_id}>
                        {actor.profile_path && <Photo src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="Photo of the actor" width={100} height={150} />}
                        <Name>{actor.name}</Name>
                        <Character>Character: {actor.character}</Character>
                    </Item>
                );
            })}
        </ul>        
    );
};

export default CastList;

CastList.propTypes = {
    cast: PropTypes.array
};