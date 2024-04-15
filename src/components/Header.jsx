import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    padding: 0 50px;
    color: #5a6f07;
    border-bottom-style: solid;
    margin-bottom: 50px;
`

const HeaderTitle = styled.h1`
    font-weight: 400;
    font-size: 40px;
`

const HeaderNav = styled.nav`
    display: flex;
    gap: 20px;
`

const NavbarLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 300;
    &.active{
        text-decoration: underline;
        font-weight: 500;
        color: #5a6f07;
    }
`

function Header() {
    return (
        <HeaderDiv>
            <img src="./img/logo.png" alt="HRnet Logo"/>
            <HeaderTitle>HRnet</HeaderTitle>
            <HeaderNav>
                <NavbarLink to="/"  activeclassname="active" >Create Employee</NavbarLink>
                <NavbarLink to="/employee-list"  activeclassname="active" >View Current Employees</NavbarLink>
            </HeaderNav>
            
        </HeaderDiv>
    )
}

export default Header;