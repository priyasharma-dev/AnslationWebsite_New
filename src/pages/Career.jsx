import React from 'react'
import CareerPage from '../components/Career/CareerPage'
import CareerGrowth from '../components/Career/CareerGrowth'  
import pic from "../assets/colleagues-working-project-discussing-details 1.png"

function Career() {
  return (
    <div>
        <div className='relative'>
          <div className='absolute top-[-130px] ' style={{ background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        opacity: 0.2,
        filter: "blur(1px)"}}>
            <img src={pic} alt="" className='' />
           
          </div>
        <CareerPage/>
        <CareerGrowth/>
        </div>
     
    </div>
  )
}

export default Career