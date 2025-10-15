import React from 'react'
import who from "../../assets/Group 39566.png"
import verticleLine from "../../assets/Group 39562.png"
import mission from "../../assets/Group 39568.png"
import goal from "../../assets/Group 39571.png"

function WeAre() {
  return (
    <>
      <div className=' relative container  w-7xl  mx-auto z-10 ' >

        <div>
          <svg
            className='absolute inset-0 w-full h-full'
            viewBox='0 0 500 500'
            preserveAspectRatio='xMidYMid slice'
          >
            <defs>
              {/* Simple horizontal and vertical grid pattern */}
              <pattern id='gridPattern' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'>
                {/* Vertical lines */}
                <line x1='50' y1='0' x2='50' y2='50' stroke='#fff' strokeWidth='0.2' opacity='0.15' />
                {/* Horizontal lines */}
                <line x1='0' y1='50' x2='50' y2='50' stroke='#fff' strokeWidth='0.2' opacity='0.15' />
              </pattern>

              {/* Linear gradient from blue to gray to black */}
              <linearGradient id='bgGradient' x1='0%' y1='0%' x2='0%' y2='100%'>

                <stop offset='100%' stopColor='#000000' stopOpacity='1' />
              </linearGradient>
            </defs>

            {/* Apply pattern */}
            <rect width='500' height='500' fill='url(#gridPattern)' />
          </svg>
        </div>
        <div className=''
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
            opacity: 0.7,
            zIndex: 0
          }}

        >

          <div>
            <div className='relative z-40' >

              <div className=' absolute left-1/2 top-10  z-50' >
                <img src={verticleLine} alt="" className='h-[920px]' />
              </div>
              <div className='flex  justify-between my-20   items-center'>
                <div className=''>
                  <img src={who} alt="" srcset="" className='w-lg' />
                </div>
                <div className=' w-lg'>
                  <h2 className='text-3xl font-bold z-50' >Who We Are</h2>
                  <div className='z-50' >
                    <p className='py-2 text-justify'>At Anslation, we are redefining the way businesses interact with technology. As a leading provider of innovative software solutions, we deliver cutting-edge products that help organizations scale and thrive in the digital age.</p>
                    <p className='text-justify' >Founded with a vision to merge the worlds of marketing technology and business automation, our team of passionate technologists and innovators have built a suite of tools designed to optimize business operations and elevate performance.</p>
                  </div>
                </div>
              </div>
              <div className='flex  justify-between  my-20  items-center'>
                <div className=''>
                  <img src={mission} alt="mission" srcset="" className='w-xl z-50 px-20' />
                </div>
                <div className=' w-lg'>
                  <h2 className='text-3xl font-bold' >Our Mission</h2>
                  <div className='' >
                    <p  >To empower businesses by delivering intelligent, scalable software solutions that fuel growth, enhance efficiency, and foster innovation.</p>
                    <div className='py-2 ' >
                      <div className='flex justify-between flex-wrap gap-5 '>
                        <div className='border rounded px-5 py-1' >Intelligent</div>
                        <div className="border rounded px-5 py-1 bg-gradient-to-r from-[#1D73F3A3] to-[#000C27D1]">
                          Foster innovation
                        </div>
                        <div className='border rounded px-5 py-1'  >Fuel growth</div>
                        <div className='border rounded px-5 py-1'  > Enhance efficiency</div>
                        <div className='border rounded px-5 py-1'  >Scalable software solutions</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='flex  justify-between my-20  items-center'>
                <div className=''>
                  <img src={goal} alt="" srcset="" className='w-lg' />
                </div>
                <div className=' w-lg'>
                  <h2 className='text-3xl font-bold' >Our Story</h2>
                  <div className='' >
                    <p>Anslation started as a marketing software company but quickly realized the potential to transform the tech landscape. Our journey from providing marketing automation tools to becoming a tech-first company with enterprise-level solutions has been driven by our commitment to innovation and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default WeAre