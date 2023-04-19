import React from 'react'
import { images } from '../../../constants';

function Hero() {
  return (
   <section className='container mx-auto flex flex-col lg:flex-row px-5 py-5'>
    <div className='mt-10 lg:w-1/2'>
      <h1  className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">Read the most interesting articles</h1>
      <p  className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <div>
        <input type="text" />
        <button>Serch</button>
      </div>
      <div>
        <span>Popular Tags:</span>
        <ul>
          <li>Design</li>
          <li>User Experience</li>
          <li>User Interfaces</li>
        </ul>
      </div>
    </div>
    <div>
      <img src={images.HeroImage} alt="Users are resding Article" />
    </div>
   </section>
  )
}

export default Hero;