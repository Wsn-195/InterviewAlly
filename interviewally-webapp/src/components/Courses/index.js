import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElement'
import Icon1 from '../../images/SVG1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/SVG3.svg'
const Courses = () => {
  return (
<>
<ServicesContainer id='services'>
<ServicesH1>Our Courses</ServicesH1>
<ServicesWrapper>
    <ServicesCard>
     <ServicesIcon src={Icon1} />
         <ServicesH2>Course 1</ServicesH2>
         <ServicesP>
             We help reduce your fees and increase your overall revenue.
         </ServicesP>
    </ServicesCard>
    
    <ServicesCard>
     <ServicesIcon src={Icon2} />
         <ServicesH2>Course 2</ServicesH2>
         <ServicesP>
             We help reduce your fees and increase your overall revenue.
         </ServicesP>
    </ServicesCard>
    
    <ServicesCard>
     <ServicesIcon src={Icon3} />
         <ServicesH2>Course3 </ServicesH2>
         <ServicesP>
             We help reduce your fees and increase your overall revenue.
         </ServicesP>
    </ServicesCard>

</ServicesWrapper>

</ServicesContainer>


</>
  )
}


export default Courses