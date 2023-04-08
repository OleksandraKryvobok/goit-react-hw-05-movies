import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: inline-block;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #c3c2c2;
    border-radius: 5px;
    padding: 4px 20px;
    margin-bottom: 10px;
`;
// export const LinkText = styled.p`
//     color: black;
//     margin: 0;

    /* &::before {
        content: "";
        width: 24px;
        height: 24px;
        background-size: contain;
        margin-right: 8px;
        background-image: url("https://cdn-icons-png.flaticon.com/512/599/599516.png");
    } */
// `;

export const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    font-size: 22px;
    margin: 0 0 24px 0;
`;

export const SecTitle = styled.h2`
    font-size: 16px;
    margin: 0 0 10px 0;
`;

export const Text = styled.p`
    font-size: 14px;
    margin: 0 0 16px 0;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #000;
    margin-bottom: 10px;
`;

export const ContainerAddInfo = styled.div`
    margin-bottom: 10px;
`;

export const ListAddInfo = styled.div`
    margin: 0;
`;

export const ItemAddInfo = styled.li`
    margin-bottom: 6px;
`;