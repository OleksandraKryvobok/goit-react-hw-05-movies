import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    margin-bottom: 20px;
    padding: 24px 48px;
    border-bottom: 1px solid #000;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 24px;
`;

export const StyledLink = styled(NavLink)`
    font-size: 26px;
    text-decoration: none;
    color: #000;

    &.active {
        color: red;
    }

    &:hover, 
    :focus {
        text-decoration: underline;
    }
`;