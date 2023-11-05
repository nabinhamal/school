import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"
import {Logo} from "../assets"
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"



const NavBar = () => {
  const [click,setClick]=useState(false)
  const handleClick = () => setClick(!click)




  const content = <>
  <div className=' top-16 absolute rounded-md -right-[300px] xs:left-[190px] xs:items-center  bottom-2  w-full transition  animate-pulse'>
<ul className='text-right shadow-sm cursor-pointer bg-white w-4/12   text-xl  uppercase'>
  <Link spy="true" smooth="true" id='home' to="Home">
  <li className='my-4 py-4 hover:bg-cyan-400 hover:rounded '>Home</li>
  </Link>
  <Link spy="true" smooth="true" to="About">
  <li className='my-4 py-4 hover:bg-cyan-400 hover:rounded '>About</li>
  </Link>
  <Link spy="true" smooth="true" to="Gallery">
  <li className='my-4 py-4 hover:bg-cyan-400 hover:rounded '>Gallery</li>
  </Link>
  <Link spy="true" smooth="true" to="Notice">
  <li className='my-4 py-4 hover:bg-cyan-400 hover:rounded '>Notice</li>
  </Link>
  <Link spy="true" smooth="true" to="Contact">
  <li className='my-4 py-4 hover:bg-cyan-400 hover:rounded '>Contact</li>
  </Link>
  <Link spy="true" smooth="true" to="Contact">
  <li className='my-4 py-4 hover:bg-cyan-400 hover:rounded '>login</li>
  </Link>
</ul>
  </div>
  
  </>
  return (
  <nav>
    
    <div className=' h-10vh fixed flex  z-50  text-black lg:py-5 px-12 py-4 ml-[100px] flex-1 justify-end '>
      <div className=' flex items-center gap-2 xs:-ml-32 flex-1 mr-80  px-4 sm:px-1  '>
        <img src={Logo} className='h-12 w-12 sm:w-10  object-contain'/>
      <span className=' text-3xl  font-bold xs:flex-none xs:text-2xl  '>श्री सिता मा.वि.</span>
    </div>
    <div className='  lg:flex md:flex md:flex-1 lg:flex-1  lg:rounded-full md:rounded-full border-2 border-red-900 ml-2 pl-4 pr-4 items-center justify-end font-normal hidden'>
    <div className='flex-10 '>
    <ul className='flex gap-10 text-[18px] uppercase'>
  <a href="#home" >
  <li className='hover:text-blue-900 hover:border-red-300 rounded-full   transition   cursor-pointer'>Home</li>
  </a>
  <a href="#about">
  <li className='scroll hover:text-blue-900 rounded-full transition  cursor-pointer'>About</li>
  </a>
  <Link spy="true" smooth="true" to="Gallery">
  <li className='hover:text-blue-900  rounded-full transition  cursor-pointer'>Gallery</li>
  </Link>
  <Link spy="true" smooth="true" to="Notice">
  <li className='hover:text-blue-900 transition  cursor-pointer'>Notice</li>
  </Link>
  <Link spy="true" smooth="true" to="Contact">
  <li className='hover:text-blue-900 hover:border rounded-full transition  cursor-pointer'>Contact</li>
  </Link>
  <Link spy="true" smooth="true" to="Contact">
  <li className='hover:text-blue-900 hover:border rounded-full transition  cursor-pointer'>login</li>
  </Link>
 
</ul>
    </div>
    </div>
    <div>
{click && content}
    </div>
    <button className='lg:hidden  xs:-ml-[250px] sm:ml-[20px]  transition' onClick={handleClick}>
      {click ? <FaTimes/> : <CiMenuFries/>}
    </button>
    </div>
  </nav>
  )
}

export default NavBar