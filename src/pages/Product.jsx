import React from 'react'
import ProductHeader from '../components/Product/ProductHeader'
import SiteOverview from '../components/Product/SiteOverview'
import Team from '../components/Product/Team'
import PowerAi from '../components/Product/PowerAi'
import Elevate from '../components/Product/Elevate'
import OurClient from '../components/Product/OurClient'
import PricingSection from '../components/Product/PriceSection'
import AiDrive from '../components/Product/AiDrive'


function Product() {
  return (
    <div>
        <ProductHeader/>
        <SiteOverview/>
        <div style={{ position: "relative",
        background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
        opacity: 0.5,}}
         >
            <Team/>
            <PowerAi/>
        </div>
         
        <Elevate/>
        <OurClient/>
        <PricingSection/>
        <AiDrive/>
    </div>
  )
}

export default Product