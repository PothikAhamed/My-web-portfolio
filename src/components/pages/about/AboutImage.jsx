import React, { useEffect } from 'react'
import Hero from '../../../assets/aboutIm.png'
import Aos from 'aos'

const AboutImage = () => {
  useEffect(()=>{
    Aos.init({
      duration:500,
      once:true
    })
  },[])
  return (
    <div className='drop-shadow-[1px_1px_10px_rgba(249,115,22,0.2)]'>
      <img
        src={Hero}
        alt="hero"
        className="w-150 object-cover"
        data-aos={"fade-up"}
      />
    </div>
  );
};

export default AboutImage;
