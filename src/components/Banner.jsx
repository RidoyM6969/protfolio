import React from 'react'
import Container from './Container'
import Flex from './Flex'
import imges from "../assets/Ridoy.jpg"
import { LuDownload } from "react-icons/lu";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import rusume from "../assets/CV.pdf"

const Banner = () => {
  
  return (
    <div id='home' className='lg:pt-[200px] lg:pb-[20px] bg-[#1A0D2A] pt-[110px] pb-[25px]'>
      <Container>
        <div className="lg:justify-between lg:flex px-3 xl:px-0 lg:px-5">
            <div className="lg:w-[45%]">
              <h4 className='uppercase xl:text-[20px] font-savilina text-[18px] '>hi ,</h4>
              <h3 className='xl:text-[35px] font-bold font-robot text-[30px]'>I am <span className='capitalize text-[#8953F8]'>Ridoy</span></h3>
              <h1 className='xl:text-[75px] capitalize font-bold font-robot text-[48px]'>web developer</h1>
              <p className='text-[16px] lg:text-[20px] font-robot'>I am a professional web developer with expertise in building responsive and user-friendly websites. I specialize in front-end development, using modern tools and frameworks to create seamless user experiences, ensuring functionality, performance, and optimized design.</p>
            </div>
            <div className="lg:w-[45%] lg:py-0 py-[30px]">
              <div className="lg:pl-[150px] ">
                <img className='lg:w-[400px] md:w-[400px] w-[200px] sm:w-[300px] rounded-[30px]' src={imges} alt="" />
              </div>
            </div>
        </div>
        <div className="items-center lg:gap-x-7 gap-x-2 flex lg:static px-3 absolute top-[518px] right-[-55px] lg:transform-none transform rotate-[90deg] xl:px-0 lg:px-5">
          <div className="flex gap-x-1 lg:text-[18px] md:text-[16px] items-center border lg:py-3 lg:px-8 md:py-2 md:px-7  rounded-[40px] border-[#8B56F7] py-2 px-4 text-[12px] cursor-pointer ">
          <a  href={rusume} download='rusume'>Download CV</a>
            <span><LuDownload/></span>
            </div>
            <a className='border border-[#8B56F7] lg:text-[18px] md:text-[16px] lg:p-3 rounded-[50%] p-1 text-[12px] rotate-[-90deg] lg:rotate-0' href="#"><FaLinkedinIn/></a>
            <a className='border border-[#8B56F7] lg:text-[18px] md:text-[16px] lg:p-3 rounded-[50%] p-1 text-[12px] rotate-[-90deg] lg:rotate-0' href="#"><FaLinkedinIn/></a>
            <a className='border border-[#8B56F7] lg:text-[18px] md:text-[16px] lg:p-3 rounded-[50%] p-1 text-[12px] rotate-[-90deg] lg:rotate-0' href="#"><FaLinkedinIn/></a>
          </div>

          <div className="lg:pt-[60px] items-center lg:justify-evenly flex justify-between pt-[40px] px-3  ">
              <div className="flex items-center lg:gap-x-4 gap-x-3">
                  <h2 className='lg:text-[70px] md:text-[60px] text-[30px] font-bold '>3</h2>
                  <div className="lg:text-[20px] md:text-[20px]  text-[12px] font-semibold font-sans">
                    <h5>Years of</h5>
                    <h5>Experience</h5>
                  </div>
              </div>
              <div className="flex items-center lg:gap-x-4 gap-x-3">
                  <h2 className='lg:text-[70px] md:text-[60px] text-[30px] font-bold '>70+</h2>
                  <div className=" lg:text-[20px] md:text-[20px] text-[12px]  font-semibold font-sans">
                    <h5>Project</h5>
                    <h5>Completed</h5>
                  </div>
              </div>
              <div className="flex items-center lg:gap-x-4 gap-x-3">
                  <h2 className='lg:text-[70px] md:text-[60px] text-[30px] font-bold '>1k</h2>
                  <div className=" lg:text-[20px] md:text-[20px] text-[12px]  font-semibold font-sans">
                    <h5>Happy</h5>
                    <h5>Clients</h5>
                  </div>
              </div>
          </div>
      </Container>
    </div>
  )
}

export default Banner
