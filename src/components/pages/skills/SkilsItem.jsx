import React, { useEffect } from "react";
import Container from "../../common/Container";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import Aos from "aos";
import Next from "../../../assets/nextjs.png";
import Vite from "../../../assets/Vitejs.png";
import Proficiency from "./Proficiency";
import Parsent from "./Parsent";

const SkilsItem = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  },[]);
  return (
    <div className="py-10">
      <Container>
        <div className="flex justify-between">
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-80% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="100"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <FaReact className="bg-[#f5f6fa] text-7xl text-[#61DBFB] p-2 rounded-2xl" />
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                React
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-80% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="100"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <SiTailwindcss className="bg-[#f5f6fa] text-7xl text-[#61DBFB] p-2 rounded-2xl" />
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                Tailwind Css
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-80% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="100"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <h2 className="bg-[#fbc531] text-5xl text-black p-2.5 font-bold rounded-2xl">
                Js
              </h2>
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                JavaScript
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-80% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="100"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <SiNextdotjs className="bg-[#f5f6fa] text-7xl text-[#000000] p-2.5 rounded-2xl" />
              <img
                src={Next}
                alt="image"
                className="bg-[url(/assets/next.png)] w-30 ml-5"
              />
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 justify-between mt-10">
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-75% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="300"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <IoLogoNodejs className="bg-[#f5f6fa] text-7xl text-[#61fb7b] p-2 rounded-2xl" />
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                NodeJs
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-75% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="300"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <img
                src={Vite}
                alt="img"
                className="w-18 bg-[#f5f6fa] p-2 rounded-2xl"
              />
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                React Vite
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-75% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="300"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <FaDocker className="bg-[#f5f6fa] text-7xl text-[hsl(239,100%,56%)] p-2 rounded-2xl" />
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                Docker
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
          <div
            className="bg-radial-[at_25%_25%] from-blue-950 to-gray-800 to-75% w-90 h-65 rounded-2xl p-5"
            data-aos-delay="300"
            data-aos="fade-up"
          >
            <div className="flex items-center">
              <FaReact className="bg-[#f5f6fa] text-7xl text-[#61DBFB] p-2 rounded-2xl" />
              <h1 className="text-3xl ml-5 font-semibold text-[#dcdde1]">
                React
              </h1>
            </div>
            <div className="mt-5">
              <Proficiency />
            </div>
            <div className="mt-5">
              <Parsent />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkilsItem;
