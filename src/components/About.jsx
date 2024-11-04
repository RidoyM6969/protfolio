import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import aboutpic from "../assets/about.jpg";

const About = () => {
  return (
    <div id="about">
    <div className="lg:py-14 py-8 bg-[#050709]">
      <Container>
        <Flex className="items-center justify-center uppercase font-bold">
          <h2 className="lg:text-[48px] font-serif text-[28px]">about</h2>
        </Flex>
        <div className="lg:flex justify-between  lg:pt-[80px] pt-[30px] px-4">
          <div className=" lg:w-[35%] flex justify-center lg:justify-start md:justify-end md:pr-[40px]">
            <img
              className="xl:w-[500px] xl:h-[600px] lg:w-[500px] lg:h-[400px] md:w-[400px] w-[280px] border rounded-[40px] "
              src={aboutpic}
              alt=""
            />
          </div>
          <div className="lg:w-[60%] lg:px-0 lg:pt-0 px-4 pt-6 ">
            <div>
              <h4 className="capitalize">hello there,</h4>
              <h2 className="lg:text-[22px] text-[16px]">
                {" "}
                Are you looking for a skilled frontend developer to bring your
                website to life? I’m <span className="font-bold font-serif text-[#8953F8]">Ridoy,</span> a professional frontend web
                developer with over <span className="font-bold font-serif text-[#8953F8]">3 years</span> of experience, dedicated to
                delivering high-quality, responsive, and interactive websites
                that look great on any device.
              </h2><br />
              <h6 className="text-[#8953F8] text-[20px] font-serif capitalize">What I offer :</h6>
              <p className="text-[18px]">* Clean, modern, and user-friendly</p>
              <p className="text-[18px]">* designs Fully responsive layouts for mobile, tablet, and desktop</p>
              <p className="text-[18px]">* Pixel-perfect HTML, CSS, and JavaScript coding </p>
              <p className="text-[18px]">* Integration of animations and effects using modern JavaScript frameworks (React, next js, etc.)</p>
              <p className="text-[18px]">* Cross-browser compatibility</p>
              <p className="text-[18px]">* Fast loading pages
                optimized for performance</p>
              <p className="text-[18px]">* Bug fixes and website optimization</p><br />
              <h6 className="text-[#8953F8] text-[20px] font-serif capitalize">Why choose me?</h6>
              <p className="text-[18px]">* 3+ years of professional experience</p>
              <p className="text-[18px]">* Always time support after completed after the project</p>
              <p className="text-[18px]">* Timely delivery and 100% satisfaction guarantee</p>
              <br />
              <p className="text-[#8953F8]">Let’s work together to create a website that not only looks great but delivers an excellent user experience. Feel free to
              contact me before placing an order!</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default About;
