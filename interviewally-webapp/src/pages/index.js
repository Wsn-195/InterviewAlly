import React, { useState } from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services/index';
import Footer from '../components/Footer/index';


const Home = () => {
const [isOpen,setIsOpen]=useState(false);

const toggle=()=>{
    setIsOpen(!isOpen);

}
  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    {/* <InfoSection {...homeObjTwo}/> */}
    <Services/>
    <InfoSection {...homeObjThree}/>
    <Footer/>
    </>
  )
}

export default Home