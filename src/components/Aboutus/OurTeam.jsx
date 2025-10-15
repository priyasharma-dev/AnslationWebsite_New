import React from 'react'
import img1 from "../../assets/our-team1-2.png"
import img2 from '../../assets/our-team1-3.png'
import img3 from "../../assets/our-team1-4.png"
import img4 from '../../assets/our-team1-5.png'
import img5 from '../../assets/our-team1-6.png'
import img6 from '../../assets/our-team1.png'

function OurTeam() {
  return (
    <>
    <div className='mt-12 container max-w-7xl mx-auto px-4 py-12' style={{
           
           background:
             "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
          }}  >
        <div className='text-center' >
            <h2 className=' text-4xl font-bold' >Our Team</h2>
            <p className='mx-auto w-full md:w-2/3 text-justify my-4 text-white '>Our leadership team brings a wealth of experience, innovation, and passion to Anslation. Together, they lead us in transforming technology to drive business success</p>
        </div>
                 <div className='flex justify-between mt-20'>
          {/* 1 */}
          <div className='group relative cursor-pointer'>
            <img src={img1} alt='' className='h-80 object-cover rounded-xl' />
            {/* overlay (uses your existing text block, just styled/positioned) */}
            <div className='pointer-events-none absolute inset-0  rounded-xl 
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0  '/>
            <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='text-white '>
                <p className='text-xs uppercase tracking-wide text-white/80'>CEO</p>
                <p className='text-lg font-semibold'>sahil Khan</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className='py-20 group relative cursor-pointer'>
            <img src={img2} alt='' className='h-80 object-cover rounded-xl' />
            <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
            <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='text-white'>
                <p className='text-xs uppercase tracking-wide text-white/80'>CTO</p>
                <p className='text-lg font-semibold'>Aisha Khan</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className='group relative cursor-pointer'>
            <img src={img3} alt='' className='h-80 object-cover rounded-xl' />
            <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
            <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='text-white'>
                <p className='text-xs uppercase tracking-wide text-white/80'>Marketing Head</p>
                <p className='text-lg font-semibold'>Vikram Singh</p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className='py-20 group relative cursor-pointer'>
            <img src={img4} alt='' className='h-80 object-cover rounded-xl' />
            <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
            <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='text-white'>
                <p className='text-xs uppercase tracking-wide text-white/80'>Product Lead</p>
                <p className='text-lg font-semibold'>Priya</p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className='group relative cursor-pointer'>
            <img src={img5} alt='' className='h-80 object-cover rounded-xl' />
            <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
            <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='text-white'>
                <p className='text-xs uppercase tracking-wide text-white/80'>Design Lead</p>
                <p className='text-lg font-semibold'>Rohit Verma</p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className='py-20 group relative cursor-pointer'>
            <img src={img6} alt='' className='h-80 object-cover rounded-xl' />
            <div className='pointer-events-none absolute inset-0 rounded-xl
                            bg-gradient-to-t from-black/80 via-black/40 to-transparent
                            opacity-0 translate-y-2 transition-all duration-300 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0' />
            <div className='absolute inset-0 flex items-end p-3
                            opacity-0 translate-y-3 transition-all duration-300 ease-out delay-75
                            group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='text-white'>
                <p className='text-xs uppercase tracking-wide text-white/80'>Engineering Manager</p>
                <p className='text-lg font-semibold'>Neha Gupta</p>
              </div>
            </div>
          </div>
          </div>

        {/* Mobile / Small screens: 2 per row, a little smaller */}
        <div className="grid grid-cols-3 gap-1 mt-10 md:hidden">
          {[img1, img2, img3, img4, img5, img6].map((src, i) => (
            <div key={i} className="w-full">
              <img
                src={src}
                alt={`team-${i + 1}`}
                className="w-full h-36 object-contain"
              />
            </div>
          ))}
        </div>

{/* Desktop */}
 <div className="hidden md:flex  md:justify-center md:gap-x-4 lg:gap-x-8 gap-y-12 md:mt-16">
          <div className="w-1/3 sm:w-auto mt-0">
            <img src={img1} alt="team-1" className="h-80 w-full object-contain" />
          </div>
          <div className="w-1/3 sm:w-auto mt-10 md:mt-20">
            <img src={img2} alt="team-2" className="h-80 w-full object-contain" />
          </div>
          <div className="w-1/3 sm:w-auto mt-0">
            <img src={img3} alt="team-3" className="h-80 w-full object-contain" />
          </div>
          <div className="w-1/3 sm:w-auto mt-10 md:mt-20">
            <img src={img4} alt="team-4" className="h-80 w-full object-contain" />
          </div>
          <div className="w-1/3 sm:w-auto mt-0">
            <img src={img5} alt="team-5" className="h-80 w-full object-contain" />
          </div>
          <div className="w-1/3 sm:w-auto mt-10 md:mt-20">
            <img src={img6} alt="team-6" className="h-80 w-full object-contain" />
          </div> 
        </div>

    </div>
    </>
  )
}

export default OurTeam