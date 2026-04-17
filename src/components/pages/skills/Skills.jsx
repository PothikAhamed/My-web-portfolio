import React from "react";
import Container from "../../common/Container";
import SkilsItem from "./SkilsItem";

const Skills = () => {
  return (
    <div className="py-40">
      <Container className={"mx-auto"}>
        <div data-aos-delay="100" data-aos="fade-up" className="mx-auto justify-center flex items-center text-7xl gap-x-3 text-center font-semibold">
          <h3 className="text-white">My</h3>
          <h3 className="text-orange-600">Skills</h3>
        </div>
        <div data-aos-delay="150" data-aos="fade-up"  className="text-white py-5 mx-auto justify-center items-center text-center">
          <p>I solve problems by creating clean and optimized solutions.</p>
        </div>
        <div>
          <SkilsItem/>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
