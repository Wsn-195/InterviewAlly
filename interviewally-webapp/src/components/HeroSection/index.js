import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer,HeroContent,HeroH1,HeroP,VideoBg} from './HeroElements'
import {Button} from '../ButtonElement'
export const HeroSection = () => {
const [hover,setHover]=useState(false);

const onHover=()=>{
    setHover(!hover)
}

  return (
    <HeroContainer>
    <HeroBg>
       <VideoBg/>
    </HeroBg>
       <HeroContent>
        <HeroH1>Mock interviews with professionals from FAANG</HeroH1>
        <HeroP>Sign Up for a new account today and boost your interview preparation</HeroP>
       <HeroBtnWrapper>
        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get Started {hover ? <ArrowForward/>:<ArrowRight/>}
        </Button>

       </HeroBtnWrapper>
      
       </HeroContent>
    

    </HeroContainer>
  )
}


export default HeroSection