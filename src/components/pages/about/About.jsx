import { useEffect } from 'react'
import Container from '../../common/Container'
import AboutImage from './AboutImage'
import Counting from './Counting'
import Aos from 'aos'

const About = () => {
  useEffect(()=>{
    Aos.init({
      duration:500,
      once:true
    })
  }, [])
  return (
    <>
    <div className='py-40'>
      <Container>
        <div className='flex items-center justify-between'>
          <div>
            <AboutImage/>
            </div>
          <div data-aos= "fade-up-left">
            <h2 className='font-semibold text-orange-600 text-[70px]' data-aos="fade-down-left">About Me</h2>
            
            <p className='bg-radial-[at_5%_5%] from-white/10 to-gray-900 to-55% w-145 text-white font-normal p-5 rounded-2xl shadow shadow-white/10' data-aos="fade-up-left">I am a passionate Web Developer focused on building modern, responsive, and user-friendly websites using React, JavaScript, and Tailwind CSS. I enjoy creating clean, efficient code and continuously learning new technologies to improve my skills. My goal is to build fast, scalable, and visually appealing web applications.
            </p>
            <Counting/>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default About