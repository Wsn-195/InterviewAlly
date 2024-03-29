import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav=styled.nav`
background:#000;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
margin-top:-80px;
@media screen and (max-width:960px)
{
    transition:0.8s all ease;
}
`

export const NavBarContainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;ß
max-width:1100px;
`

export const NavLogo=styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
fonr-weight:bold;
text-decoration:none;
margin-left:5%;
`

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const MobileIcon=styled.div`
display:none;
color:#fff;
size:20px;
@media screen and (max-width:768px)
{
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
}
`

export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;


@media screen and (max-width:768px)
{
    display:none;
}

`

export const NavItems=styled.li`
height:80px;
`

export const NavLinks=styled(LinkS)`
color:#fff;
display:flex;
align-center:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
align-items:center;

font-weight:bold;

&.active{
border-bottom:3px solid #01bf71;

}
`

export const NavBtn=styled.nav`
display:flex;
align-items:center;
 @media screen and (max-width:786px)
 {
     display:none;
 }
`

export const NavBtnLink=styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 02.s ease-in-out;
text-decoration:none;

&:hover
{
    transition:all 02.s ease-in-out; 
    background:#fff;
    color:#010606
}
@media screen and(max-width:786px)
 {
     display:none;
 }
`