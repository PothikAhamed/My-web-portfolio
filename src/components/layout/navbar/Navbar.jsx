import { useEffect } from "react";
import Container from "../../common/Container";
import Button from "./Button";
import Logo from "./Logo";
import Aos from "aos";
import "aos/dist/aos.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(()=> {
    Aos.init({
      duration:500,
      once:true
    })
  }, [])
  return (
    <div className="mt-2">
      <Container>
        <div className="bg-linear-to-t from-gray-900 to-gray-800 w-190 m-auto flex justify-between py-3 rounded-2xl items-center shadow shadow-gray-600" data-aos="fade-down">
            <div>
                <Logo />
            </div>
            <div>
                <ul className="flex items-center text-center text-white gap-x-4 font-semibold">
                    <li className="hover:text-orange-500 duration-300 cursor-pointer"><NavLink className={({isActive})=>isActive? ` bg-orange-600 rounded-2xl px-3 py-1`:``} to={"/"}>Home</NavLink></li>
                    <li className="hover:text-orange-500 duration-300 cursor-pointer"><NavLink className={({isActive})=>isActive? ` bg-orange-600 rounded-2xl px-3 py-1`:``} to={"/about"}>About</NavLink></li>
                    <li className="hover:text-orange-500 duration-300 cursor-pointer"><NavLink className={({isActive})=>isActive? ` bg-orange-600 rounded-2xl px-3 py-1`:``} to={"/skills"}>Skills</NavLink></li>
                    <li className="hover:text-orange-500 duration-300 cursor-pointer"><NavLink className={({isActive})=>isActive? ` bg-orange-600 rounded-2xl px-3 py-1`:``} to={"/project"}>Project</NavLink></li>
                    <li className="hover:text-orange-500 duration-300 cursor-pointer"><NavLink className={({isActive})=>isActive? ` bg-orange-600 rounded-2xl px-3 py-1`:``} to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="px-5 items-center text-center">
                <Button/>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
