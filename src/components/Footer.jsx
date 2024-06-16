import React  from 'react';
import instagramIcon from '../assets/images/instagram.svg';
import facebookIcon from '../assets/images/facebook.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import emailIcon from '../assets/images/email.svg';



const Footer = () => {
  
  return (
    <footer id='footer' className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex items-center justify-center space-x-6">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
        </a>
        <a href="mailto:your@email.com">
          <img src={emailIcon} alt="Email" className="w-9 h-9" />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 XYZ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

