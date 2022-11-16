import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from 'react-icons/fa'

export const NavContainer = styled.div`
    background: white;
    box-shadow: 0 4px 70px 0 rgba(0, 0, 0, 0.2), 0 6px 70px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
`

export const LogoContainer = styled.div`
    width: 10%;
`

export const MenuContainer = styled.ul`
    display: block;    
    list-style-type: none;
    width: 90%;
    text-align: right;
    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const Logo = styled.img`
    width: 50px;
`

export const MenuItem = styled.li`
    
`

export const MenuLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    padding: 30px 12px;
    font-weight: 600;
    &:hover {
        color: #006699;
        border-bottom: 2px solid #006699;
    }
    &.active {
        color: #0088cc;
        border-bottom: 2px solid #0088cc;
    }
`

export const BurgerIcon = styled(FaBars)`
    
`
