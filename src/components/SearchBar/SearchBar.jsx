import PropTypes from 'prop-types';
import { useState } from "react";
import { Form, Input, Button } from "./SearchBar.styled";

const SearchBar = ({ onFormSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(inputValue.trim());
        setInputValue('');
        e.currentTarget.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" onChange={handleChange} />
            <Button type="submit">Search</Button>
        </Form>
        
    );
};

export default SearchBar;

SearchBar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};