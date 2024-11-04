import React from 'react'
import Container from './Container'
import Flex from './Flex'
import reacrimg from "../assets/react.svg"
import htmlimg from "../assets/html.png"
import cssimg from "../assets/css.png"
import jsimg from "../assets/js.png"
import nextimg from "../assets/next.png"
import bootsimg from "../assets/bootstrap.png"
import tailwsimg from "../assets/tailw.png"
import firebase from "../assets/firebasae.png"

const Skill = () => {
  return (
    <div id='skill' className='py-[100px] bg-[#0F0715]'>
          <Container>
              <div className="flex items-center justify-center px-4 lg:px-0">
              <div className="">
                  <h2 className='text-center lg:text-[48px] capitalize font-bold font-serif text-[28px]'>my skills</h2>
                  <p className='md:w-[400px] lg:w-[500px] font-sans py-1 lg:text-[20px] text-[16px] '>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
              </div>
              </div>
              <div className="flex flex-wrap items-center justify-evenly xl:justify-between lg:justify-evenly px-4">
                  <div className="text-center pt-20 ">
                    <div className=" py-7 px-14 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='lg:w-[70px] md:w-[40px] w-[45px] ' src={htmlimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>89%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>hTML</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[70px]  ' src={cssimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>93%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>CSS</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[65px]  ' src={jsimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>80%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>Java Script</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[70px]  ' src={reacrimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>89%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>react</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[70px]  ' src={nextimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>75%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>Next js</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[70px]  ' src={tailwsimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>93%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>Tailwind css</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[80px]  ' src={bootsimg} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>92%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>Bootstrap</span>
                  </div>
                  <div className="text-center pt-20 ">
                    <div className=" lg:py-7 lg:px-14 py-4 px-11 rounded-[20px] mb-4 bg-[#140C1C]">
                        <img className='w-[70px]  ' src={firebase} alt="" />
                        <h5 className='lg:text-[30px] text-[20px] font-bold font-serif pt-5'>98%</h5>
                      </div>
                      <span className='capitalize text-[18px]'>firebase</span>
                  </div>
              </div>
      </Container>
    </div>
  )
}

export default Skill
