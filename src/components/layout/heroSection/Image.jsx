import React, { useEffect } from 'react'
import Hero from '../../../assets/hero.png'
import Aos from 'aos'

const Image = () => {
    useEffect(()=>{
        Aos.init({
            duration:500,
            once:false
        })
    },[])
  return (
    <div>
        <img src={Hero} alt="hero" className='w-150 object-cover' data-aos={"fade-left"} />
    </div>
  )
}

export default Image