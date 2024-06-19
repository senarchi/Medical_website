import React from 'react'
import logo from '../assets/images/logo.svg'
import phone from '../assets/images/phone.svg'
import {Menu, X} from 'lucide-react';
import { useState } from 'react';


export const Navbar = () => {
  

  const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false);

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const scrollToFooter = () => {
    const footerRef= document.getElementById('footer')
    console.log(footerRef);
    if (footerRef) {
      footerRef.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className='h-10 w-10 mr-2' src={logo} alt=""/>
          <span className='text-xl tracking-tight text-blue-400'>Medical</span>
        </div>

        <ul className='hidden lg:flex ml-14 space-x-12'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#' onClick={scrollToFooter}>Contact</a>
          </li>
        </ul>

        <div className="flex items-center flex-shrink-0">
          <img className='h-5 w-5 mr-5' src={phone} alt="call" />
          <span>033 4040 8070</span>
          </div>

        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>{mobileDrawerOpen?<X/> : <Menu/>}</button>
        </div>    
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
          <li className='py-4'>
            <a href='#'>Home</a>
          </li >
          <li className='py-4'>
            <a href='#'>About us</a>
          </li>
          <li className='py-4'>
            <a href='#'>Services</a>
          </li>
          <li className='py-4'>
            <a href='#' onClick={scrollToFooter}>Contact</a>
          </li>
          </ul>
        </div>

      )}
    </div>
   </nav>
  )
}
