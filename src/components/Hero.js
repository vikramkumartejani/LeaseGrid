import React from 'react'
import ArrowIcon from '../assets/arrow-icon.svg'
import HeroSection from '../assets/hero-section-img.svg'
import ShapeOne from '../assets/Bottom-Shape-1.svg'
import ShapeTwo from '../assets/Bottom-Shape-2.svg'
import ShapeThree from '../assets/Bottom-Shape-3.svg'
import ShapeFour from '../assets/Bottom-Shape-4.svg'
import ShapeFive from '../assets/Bottom-Shape-5.svg'
import ShapeSix from '../assets/Bottom-Shape-6.svg'
import ShapeSeven from '../assets/Bottom-Shape-7.svg'

const Hero = () => {
  return (
    <>
      <div className='px-4 sm:px-7 md:px-14 xl:px-28 max-w-[1440px] w-full mx-auto mt-14'>
        <h1 className='max-w-[789px] mx-auto text-black_100 text-center text-[40px] sm:text-[60px] leading-[45px] sm:leading-[64px] tracking-[-0.02rem] font-bold'>Your All-in-One <span className='text-blueberry_blue'>Property Management</span> Software</h1>
        <p className='mt-7 text-gray_600 text-base font-medium leading-[24px] max-w-[592px] mx-auto text-center'>LeaseGrid is here to streamline the process and make your property management experience effortless, efficient, and organized.</p>

        <div className='mt-7 flex items-center justify-center'>
          <button className='py-2 pr-2 bg-blueberry_blue rounded-[60px] text-white text-2xl font-bold leading-[30px] w-[250px] flex items-center justify-end gap-2.5'>Get Started
            <img src={ArrowIcon} alt='arrow-icon' />
          </button>
        </div>

        <img src={HeroSection} alt='hero-section' className='max-w-full mx-auto' loading='lazy' />
      </div>

      {/*  */}
      <section className='overflow-hidden mt-5 sm:mt-10 w-full border-b border-black_100 border-opacity-40 opacity-40'>
        <div className='flex items-end w-full justify-center gap-1 sm:gap-2 md:gap-[35.43px]'>
          <img src={ShapeOne} alt='ShapeOne' loading='lazy' />
          <img src={ShapeTwo} alt='ShapeTwo' loading='lazy' className='max-w-[72.52px] md:max-w-full'/>
          <img src={ShapeThree} alt='ShapeThree' loading='lazy' className='max-w-[23.52px] md:max-w-full'/>
          <img src={ShapeFour} alt='ShapeFour'loading='lazy'  className='max-w-[100.52px] md:max-w-full'/>
          <img src={ShapeFive} alt='ShapeFive' loading='lazy' className='max-w-[23.52px] md:max-w-full'/>
          <img src={ShapeSix} alt='ShapeSix' loading='lazy' className='max-w-[54.52px] md:max-w-full'/>
          <img src={ShapeSeven} alt='ShapeSeven'loading='lazy' className='max-w-[72.52px] md:max-w-full' />
          <img src={ShapeTwo} alt='ShapeEight' loading='lazy' className='max-w-[72.52px] md:max-w-full'/>
        </div>
      </section>
    </>
  )
}

export default Hero