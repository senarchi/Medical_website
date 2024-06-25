import React, { useState, useEffect } from 'react';
import baseImg from '../assets/images/image1.jpg';
import { Animate } from 'react-simple-animate';

const SectionOne = ({ onLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      onLoad();
      setTimeout(() => {
        setTextVisible(true);
      }, 500); // Delay to start the fade-in effect
    }
  }, [imageLoaded, onLoad]);

  return (
    <section id='home' className="relative h-screen flex items-center justify-center">
      {!imageLoaded && <div className="loader"></div>}
      <img 
        src={baseImg} 
        alt="Doctor" 
        className={`absolute inset-0 w-full h-full object-cover z-10 ${imageLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded && (
        <>
          <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
          <div className="relative z-30 text-center">
            <h1 className={`text-white text-6xl font-bold ${textVisible ? 'fade-in' : 'hidden'}`}>Dr. Ranjan Kamilya</h1>
            {textVisible && (
              <Animate
                play={textVisible}
                duration={1}
                start={{ opacity: 0, transform: 'translateY(20px)' }}
                end={{ opacity: 1, transform: 'translateY(0)' }}
              >
                <p className="text-white text-2xl mt-4 typing">
                  Pioneering Orthopaedic Surgeon and Eastern India's First Robotic Knee Replacement Specialist.
                </p>
              </Animate>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SectionOne;
