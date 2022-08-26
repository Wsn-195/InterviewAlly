import React from 'react'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'

const Footer = () => {

   /* const toggleHome=()=>{
        scroll.scrollToTop();
       }
       */
  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinksItems>
              <FooterLinkTitle> About Us  </FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Testimonials</FooterLink>
                  <FooterLink to="/signin">Carrers</FooterLink>
                  <FooterLink to="/signin">T&C</FooterLink>
                
           
          </FooterLinksItems>
           
        {/*  <FooterLinksItems>
              <FooterLinkTitle> About Us  </FooterLinkTitle>
                  <FooterLink to="/signin">How it works</FooterLink>
                  <FooterLink to="/signin">Testimonials</FooterLink>
                  <FooterLink to="/signin">Carrers</FooterLink>
                  <FooterLink to="/signin">T&C</FooterLink>
                
           
          </FooterLinksItems>
        */}
          </FooterLinksWrapper>
        
          </FooterLinksContainer>
        {/* <SocialMedia>
         <SocialMediaWrap>
             <SocialLogo to='/'>
                 InterviewAlly
             </SocialLogo>
          <WebsiteRights>IA {new Date().getFullYear()} All rights reserved.</WebsiteRights>
         <SocialIcons>
         <SocialIconLink href="/" traget="_blank"><FaFacebook /></SocialIconLink>
         <SocialIconLink href="/" traget="_blank"><FaFacebook /></SocialIconLink>


         </SocialIcons>

         </SocialMediaWrap>

        </SocialMedia>
       */}

      </FooterWrap>

    </FooterContainer>
  )
}

export default Footer