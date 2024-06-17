import React, { useState, useEffect } from 'react';
import baseImg from '../assets/images/image1.jpg';

const SectionOne = ({ onLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      onLoad();
    }
  }, [imageLoaded, onLoad]);

  return (
    <section className="relative h-screen flex items-center justify-center">
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
            <h1 className="text-white text-5xl font-bold">Dr. Ranjan Kamilya</h1>
            <p className="text-white text-2xl mt-4"> Pioneering Orthopaedic Surgeon and Eastern India's First Robotic Knee Replacement Specialist.</p>
          </div>
        </>
      )}
    </section>
  );
};

export default SectionOne;
