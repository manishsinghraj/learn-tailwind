import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons/index'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <>
      <section id='home'
        className='border-2 border-red-500 p-2 w-full 
      flex flex-col justify-center gap-10 min-h-screen max-container
      xl:flex-row'
      >
        <div>
          <p className='text-xl text-coral-red font-montserrat'>Our Summer Collection</p>
          <h1 className='mt-10 font-palanquin font-bold text-8xl
          max-sm:text-[72px]
          max-sm:leading-[82px]'>
            <span className='xl:bg-red-400 xl:whitespace-nowrap relative z-10 pr-10' >The New Arrival</span>
            <br></br>
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          <p className='text-slate-gray text-lg mt-6 mb-14 font-montserrat leading-8
          sm:max-w-sm'>Discover the stylish shoes, new arrival, comfort, innovate your active life</p>
          <Button label="shop now" iconURL={arrowRight} />

          <div className='flex justify-start gap-16 mt-20 items-start w-full flex-wrap'>
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className='font-montserrat font-bold text-4xl'>{stat.value}</p>
                <p className='font-montserrat text-slate-gray leading-7'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero