import React from 'react'
import logo from '../assets/images/logo1.png'
import phone from '../assets/images/phone.svg'
import {Menu, X} from 'lucide-react';
import { useState } from 'react';


export const Navbar = () => {
  

  const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false);

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footerRef= document.getElementById('footer');
   
    console.log(footerRef);
    if (footerRef) {
      footerRef.scrollIntoView({ behavior: 'smooth' });
    }
   
  };

  const scrollToSection = (e) => {
    e.preventDefault();
   
    const sectionRef = document.getElementById('section')
    console.log(sectionRef);
    
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToService = (e) => {
    e.preventDefault();
    const serviceRef = document.getElementById('service')
    console.log(serviceRef);
    
    if (serviceRef) {
      serviceRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutRef = document.getElementById('about')
    console.log(aboutRef);
    
    if (aboutRef) {
      aboutRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const scrollToHome = (e) => {
    e.preventDefault();
    const homeRef = document.getElementById('home')
    console.log(homeRef);
    
    if (homeRef) {
      homeRef.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className='h-12 w-12 mr-2' src={logo} onClick={scrollToHome} alt=""/>
          {/* <span className='text-xl tracking-tight text-blue-400'>Medical</span> */}
        </div>

        <ul className='hidden lg:flex ml-14 space-x-12 text-cyan-500'>
          <li>
            <a href='#' onClick={scrollToHome}>Home</a>
          </li>
          <li>
            <a href='#' onClick={scrollToAbout}>About</a>
          </li>
          <li>
            <a href='#' onClick={scrollToService}>Services</a>
          </li>
          <li>
            <a href='#' onClick={scrollToSection}>Reviews</a>
          </li>
          <li>
            <a href='#' onClick={scrollToFooter}>Contact</a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center flex-shrink-0">
          <img className='h-5 w-5 mr-5' src={phone} alt="call" />
          <span className='text-cyan-500'>033 4040 8070</span>
          </div>

        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>{mobileDrawerOpen?<X className='text-cyan-400'/> : <Menu className='text-cyan-400'/>}</button>
        </div>    
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
          <li className='py-4'>
            <a href='#' onClick={scrollToHome}>Home</a>
          </li >
          <li className='py-4'>
            <a href='#' onClick={scrollToAbout}>About</a>
          </li>
          <li className='py-4'>
            <a href='#' onClick={scrollToService}>Services</a>
          </li>
          <li className='py-4'>
            <a href='#' onClick={scrollToSection}>Reviews</a>
          </li>
          <li className='py-4'>
            <a href='#' onClick={scrollToFooter}>Contact</a>
          </li>
          </ul>
          <div className="flex items-center flex-shrink-0 py-4">
          <img className='h-5 w-5 mr-5' src={phone} alt="call" />
          <span>033 4040 8070</span>
          </div>
        </div>

      )}
    </div>
   </nav>
  )
}
