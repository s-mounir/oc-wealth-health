import { Link } from "react-router-dom"
import styled from 'styled-components';

const MainDiv = styled.main`
display: flex;
flex-direction: column;
font-family: "Montserrat", sans-serif;
align-items: center;
justify-content: center;
color: #5a6f07;
`

const ErrorP = styled.p`
color: black;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: #5a6f07;
    text-decoration: underline;
    font-weight: 500;
`

function Error() {
    return (
    <MainDiv>
        <h1>404</h1>
        <ErrorP>This page doesn't exist.</ErrorP>
        <NavLink to="/">Return to the home page.</NavLink>
    </MainDiv>);
}
export default Error