import React from 'react'
import { Logo, LogoContainer, MenuContainer, MenuItem, MenuLink, NavContainer } from './StyledComponents'

const Navigation = () => {
  return (
    <NavContainer>
        <LogoContainer>
            <Logo src='hirwajeaneric-icon-medium.png' alt='' />
        </LogoContainer>
        <MenuContainer>
            <MenuItem>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='/projects'>Projects</MenuLink>
                <MenuLink to='/design'>Graphic Design</MenuLink>
                <MenuLink to='/article'>Articles</MenuLink>
                <MenuLink to='/contact'>Contact me</MenuLink>
            </MenuItem>
        </MenuContainer>
    </NavContainer>
  )
}

export default Navigation