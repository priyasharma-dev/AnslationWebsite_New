import React from 'react'
import Bento from "../../assets/Bento1.png"
import Bento2 from "../../assets/Bento2.png"
import seo from "../../assets/SEO.png"
import Ring from "../../assets/Smart Generator.png"
import vishal from "../../assets/Visual.png"


function PowerAi() {
  return (
    <div className='container mx-auto my-20'>
        <div className=' w-xl mx-auto relative' >
            <h3 className='text-4xl   text-white  text-center' >Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h3>
        </div>
        <div className='mt-10' >
            <div className='my-10'>
                <img src={Bento} alt="bento" />
            </div>
            <div>
                <img src={Bento2} alt="bento" />
            </div>
        </div>
        
    </div>
  )
}

export default PowerAi