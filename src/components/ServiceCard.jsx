import React, { useEffect } from 'react';
import doctorImage from '../assets/images/bones.JPG'; // Ensure you have an image file at this path

const ServiceCard = () => {

  useEffect(() => {
    const listItems = document.querySelectorAll('.service-list li');
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 1000); // 200ms delay between each item
    });
  }, []);

  return (
    <section className="py-12 bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="containercard mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        
        <div className="w-full md:w-1/2 lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden h-90">
          <img src={doctorImage} alt="Doctor" className="w-full h-full object-cover" />
        </div>

        <div className="md:w-1/3 w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-8 lg:min-h-[25rem] md:min-h-[20rem] flex flex-col">
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-4">Services</h2>
          </div>
          <div className="flex-grow">
            <ul className="service-list list-disc list-inside text-blue-700 h-full flex flex-col justify-evenly">
              <li className="opacity-0 py-2.5">Total Knee Replacement</li>
              <li className="opacity-0 py-2.5 whitespace-nowrap">Unicompartmental (Partial) Knee Replacement</li>
              <li className="opacity-0 py-2.5">Total Hip Replacement</li>
              <li className="opacity-0 py-2.5">Revision Hip and Knee Replacement</li>
              <li className="opacity-0 py-2.5">Pelvic and Acetabular Fracture Fixation</li>
              <li className="opacity-0 py-2.5">Minimally Invasive Fracture Fixation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
