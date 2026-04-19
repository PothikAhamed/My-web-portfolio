import Image from "./Image";
import Container from "../../common/Container";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";

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
        <div className="text-black dark:text-white flex items-center justify-around">
          <div>
            <h1 className="text-5xl" data-aos-delay="100" data-aos="fade-up">Hi, I'm Pothik Ahammed</h1>
            <p className="w-155 text-[18px] py-10" data-aos-delay="200" data-aos="fade-up">
              I am a React developer who builds modern and responsive web
              applications. I enjoy creating clean, user-friendly, and visually
              appealing UI designs. Always learning new technologies to improve
              my skills and grow as a developer.
            </p>
            <div className="flex items-center">
              <button className="bg-orange-600 flex items-center gap-x-2 px-5 py-3 rounded-[25px] font-normal hover:text-orange-600 hover:bg-gray-900 duration-300 transition-all shadow shadow-orange-600" data-aos-delay="300" data-aos="fade-up"> <FaCloudDownloadAlt /> <a href="https://docs.google.com/document/d/1l6URU3AILpON8IdSNIFhZ2PfGM2s2M8f4WUfyFm3vIA/edit?usp=sharing">Download CV</a></button>
              <button className="border border-orange-600 flex items-center gap-x-2 text-orange-600 px-5 py-3 rounded-[25px] font-normal hover:text-white hover:bg-orange-600 duration-300 transition-all shadow shadow-orange-600 ml-10" data-aos-delay="300" data-aos="fade-up"><GrContactInfo /><a href="https://www.linkedin.com/in/pothik-ahamed/"> Contact me</a></button>
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
