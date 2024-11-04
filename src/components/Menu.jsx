import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Menu = () => {
  let [menu, setMenu] = useState(false)
  let handelMEnuButton = () => {
    setMenu(!menu)
    
  }

  
  return (
    <div className='lg:py-2 bg-black fixed w-full z-[999]'>
      <Container>
        <div className="items-center justify-between flex lg:px-4 xl:px-0">
            <div className="">
                <img className='lg:w-[80px] w-[65px] ' src={logo} alt="" />
            </div>
            <div className="">
            <ul className={`lg:flex gap-x-24 lg:static lg:bg-black ${menu==true? " absolute top-[71px] left-0 w-full text-center bg-[#8953F8] ease-in-out duration-150 " :" absolute top-[71px] left-[-999px] w-full text-center bg-[#8953F8] ease-in-out duration-150 "}`}>
                    <li className='text-[20px] font-semibold font-mono capitalize lg:py-0 py-[6px] '> <a href="#home">Home</a> </li>
                    <li className='text-[20px] font-semibold font-mono capitalize lg:py-0 py-[6px] '> <a href="#about">About</a></li>
                    <li className='text-[20px] font-semibold font-mono capitalize lg:py-0 py-[6px] '> <a href="#skill">Skill</a></li>
                    <li className='text-[20px] font-semibold font-mono capitalize lg:py-0 py-[6px] '> <a href="#portfolio">Portfolio</a></li>
                    <li className='text-[20px] font-semibold font-mono capitalize lg:py-0 py-[6px] '><a href="#contact">Contact</a></li>
                </ul>
          </div>
          <div onClick={handelMEnuButton} className="absolute top-[20px] right-[26px] z-[999] lg:hidden text-[25px] font-bold">
            {menu == true? <RxCross2/> :<RiMenu3Fill/>}
          </div>
            
        </div>
      </Container>
    </div>
  )
}

export default Menu
