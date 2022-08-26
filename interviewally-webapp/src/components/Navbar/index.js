import React, { useEffect, useState } from 'react'
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItems,NavLinks,NavBtn,NavBtnLink} from './NavbarElement'

import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {
 const [scrollNav,setscrollNav]=useState(false);

 const changeNav=()=>{
if(window.scrollY>=100)
{
  setscrollNav(true);
}
else
{
  setscrollNav(false);
}
 }

 useEffect(()=>{
   window.addEventListener('scroll',changeNav)
 },[]);

const toggleHome=()=>{
 scroll.scrollToTop();
}


  return (
    <>
    
    <Nav scrollNav={scrollNav} onClick={toggleHome}>
      <NavBarContainer>
        <NavLogo to="/">InterviewAlly</NavLogo>
        <MobileIcon onClick={toggle}><FaBars onClick={toggle}/></MobileIcon>
        <NavMenu>
         <NavItems><NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Home</NavLinks></NavItems>
         <NavItems><NavLinks to="courses" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Courses</NavLinks></NavItems>
         <NavItems><NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</NavLinks></NavItems>
         <NavItems><NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Sign Up</NavLinks></NavItems>

        </NavMenu>
        <NavBtn><NavBtnLink to="/signin">Sign In</NavBtnLink></NavBtn>
      </NavBarContainer>
    </Nav>
    </>
  )
}

export default Navbar

