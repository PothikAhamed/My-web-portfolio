import Image from "./Image";
import Container from "../../common/Container";
import { useEffect } from "react";
import Aos from "aos";


const Hero = () => {
  useEffect(()=>{
    Aos.init({
      duration:500,
      once:true
    })
    Aos.refresh
  },[])
  return (
    <div className="py-40">
      <Container>
        <div className="text-white flex items-center justify-around">
          <div>
            <h1 className="text-5xl" data-aos-delay="100" data-aos="fade-up">Hi, I'm Pothik Ahammed</h1>
            <p className="w-155 text-[18px] py-10" data-aos-delay="200" data-aos="fade-up">
              I am a React developer who builds modern and responsive web
              applications. I enjoy creating clean, user-friendly, and visually
              appealing UI designs. Always learning new technologies to improve
              my skills and grow as a developer.
            </p>
            <div>
              <button className="bg-orange-600 px-5 py-3 rounded-[25px] font-normal hover:text-orange-600 hover:bg-gray-900 duration-300 shadow shadow-orange-600" data-aos-delay="300" data-aos="fade-up"> Download CV</button>
              <button className="border border-orange-600 text-orange-600 px-5 py-3 rounded-[25px] font-normal hover:text-white hover:bg-orange-600 duration-300 shadow shadow-orange-600 ml-10" data-aos-delay="300" data-aos="fade-up">Contact me</button>
            </div>
          </div>
          <div>
            <Image/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
