import React from 'react'
import { images } from '../constants'

const ArcticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>

      <img 
      src={images.Post1Image}
      className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
       alt="title" />

       <div className='p-5'>

          <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Future of Work
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        
       </div>

    </div>
  )
}

export default ArcticleCard