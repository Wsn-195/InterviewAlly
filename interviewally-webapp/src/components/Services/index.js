import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElement'
import Icon1 from '../../images/SVG1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-2.svg'
 const Services = () => {
  return (
<>
<ServicesContainer id='services'>
<ServicesH1>Our Services</ServicesH1>
<ServicesWrapper>
    <ServicesCard>
     <ServicesIcon src={Icon1} />
         <ServicesH2>1:1 Mentorship</ServicesH2>
         <ServicesP>
             We help you to provide personal custom feedback so that you are able to fill gaps in your preparation.
         </ServicesP>
    </ServicesCard>
    
    <ServicesCard>
     <ServicesIcon src={Icon2} />
         <ServicesH2>Personalised Meetings</ServicesH2>
         <ServicesP>
             You can get deep insighs about interview process of big Tech Giants from their Employees. 
         </ServicesP>
    </ServicesCard>
    
    <ServicesCard>
     <ServicesIcon src={Icon3} />
         <ServicesH2>Complete Preparation Track </ServicesH2>
         <ServicesP>
             We will help you throughtout the interview journey starting from the begining. 
         </ServicesP>
    </ServicesCard>

</ServicesWrapper>

</ServicesContainer>


</>
  )
}


export default Services