import React from 'react'
import objectpng from "../../../public/OBJECTS.png"

function AboutSection() {
    return (
     <section aria-labelledby="about-heading" className="py-16 md:py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-base sm:text-lg text-white/80">About us</p>
            <h2
              id="about-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-white "
            >
              Empowering with
            </h2>

            <h1 className="mt-3 md:mt-4 font-extrabold leading-tight">
              <span className="inline-block bg-[#1454E5] rounded px- py-2 text-2xl sm:text-4xl md:text-5xl xl:text-6xl lg:mr-2 lg:align-middle ">
                Innovative Software
              </span>
              <span className="block lg:inline-block bg-[#1454E5] rounded px-2 py-2 mt-2 lg:mt-0 w-fit text-2xl sm:text-4xl md:text-5xl xl:text-6xl lg:align-middle lg:whitespace-nowrap">
                Solutions
              </span>
            </h1>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={objectpng}
              alt="Illustration representing innovative software solutions"
              loading="lazy"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-xl  lg:translate-x-6 xl:translate-x-10"
            />
          </div>
         </div>
       </div>
    </section>

    )
}

export default AboutSection