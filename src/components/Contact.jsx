import React from 'react'
import Container from './Container'
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact' className='lg:py-[100px] lg:border-[#8B56F7] lg:border-2 py-[60px]'>
      <Container>
      <h2 className=' lg:text-[48px] text-[28px] capitalize font-bold font-serif text-black lg:pb-[100px] pb-[10px] px-4 lg:px-0'>contact</h2>
        <div className="lg:flex lg:px-0 px-4">
          <div className="lg:w-[48%]">
          <iframe className='lg:w-[600px] lg:h-[450px] md:w-[500px] ' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d560.5776840135932!2d89.0174180317667!3d24.00831870057669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1729869975942!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="lg:w-[48%] lg:flex text-black">
            <div className="lg:w-[50%]">
            <h3 className='text-[#8B56F7] lg:text-[34px] text-[28px] capitalize font-bold pt-[20px] lg:pt-0'>contact information</h3>
              <div className="flex gap-x-1 font-medium text-[18px] py-[20px]">
                <h3>Email :</h3>
                <h3>mdridoymahmud6969@gmail.com</h3>
              </div>
              <div className=" font-medium text-[18px] py-[20px]">
                <div className="flex gap-x-1">
                <h3>Phone :</h3>
                <h3>+880 1830639708</h3>
                </div>
                <div className="flex gap-x-1">
                <h3>Phone :</h3>
                <h3>+880 1789244517</h3>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="border inline-block p-3 rounded-[50%]">
                <a href="#">
                <FaLinkedinIn/>
                </a>
                </div>
                <div className="border inline-block p-3 rounded-[50%]">
                <a href="#">
                <FaLinkedinIn/>
                </a>
                </div>
              </div>
          </div>
            <div className="lg:w-[50%] lg:text-center">
              <h3 className='text-[#8B56F7] lg;text-[34px] text-[28px] capitalize font-bold'>menu</h3>
            <ul className='text-black lg:text-center'>
              <li className='text-[20px] font-normal py-[5px] capitalize'> <a href="#home">Home</a> </li>
              <li className='text-[20px] font-normal py-[5px] capitalize'> <a href="#about">About</a></li>
              <li className='text-[20px] font-normal py-[5px] capitalize'> <a href="#skill">Skill</a></li>
              <li className='text-[20px] font-normal py-[5px] capitalize'> <a href="#portfolio">Portfolio</a></li>
              <li className='text-[20px] font-normal py-[5px] capitalize'><a href="">Contact</a></li>
          </ul>
            </div>
          </div>
        </div>
      </Container>
      
    </div>
  )
}

export default Contact
