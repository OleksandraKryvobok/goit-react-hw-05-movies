import PropTypes from 'prop-types';
import { List, Item, Author, Text } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
    return (
        <List>
            {reviews.map(review => {
                return(
                    <Item key={review.id}>
                        <Author>{review.author}</Author>
                        <Text>{review.content}</Text>
                    </Item>
                );
            })}
        </List>
    );
};

export default ReviewsList;

ReviewsList.propTypes = {
    reviews: PropTypes.array,
};