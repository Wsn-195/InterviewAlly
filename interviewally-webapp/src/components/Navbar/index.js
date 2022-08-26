import React from 'react'
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItems,NavLinks,NavBtn,NavBtnLink} from './NavbarElement'
import styled from "styled-components";
import {FaHamburger,FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {
  return (
    <>
    
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">InterviewAlly</NavLogo>
        <MobileIcon onClick={toggle}><FaBars onClick={toggle}/></MobileIcon>
        <NavMenu>
         <NavItems><NavLinks to="/home">Home</NavLinks></NavItems>
         <NavItems><NavLinks to="/courses">Courses</NavLinks></NavItems>
         <NavItems><NavLinks to="services">Services</NavLinks></NavItems>
         <NavItems><NavLinks to="signup">Sign Up</NavLinks></NavItems>

        </NavMenu>
        <NavBtn><NavBtnLink to="sign-up">Sign In</NavBtnLink></NavBtn>
      </NavBarContainer>
    </Nav>
    </>
  )
}

export default Navbar

