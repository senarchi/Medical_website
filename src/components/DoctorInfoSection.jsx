import React, { useState, useEffect } from "react";
import doctorImage from "../assets/images/doctor.jpg"; // Ensure you have an image file at this path
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const DoctorInfoSection = ({ onLoad }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      onLoad();
    }
  }, [imageLoaded, onLoad]);

  return (
    <section id="about" ref={ref} className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 3 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-500">
          Dr. Ranjan Kamilya
          </h2>
          <p className="text-lg mb-4 text-cyan-600">
          Dr. Ranjan Kamilya, born in Chandrakona, West Bengal, is a Senior Consultant Orthopaedic Surgeon at Apollo Gleneagles Hospital, Kolkata. He completed his medical education at JIPMER, Pondicherry, and PGIMER, Chandigarh. With extensive training in the UK, he specialized in hip and knee replacement, trauma surgery, and minimally invasive procedures. Known for his dedication and compassionate patient care, Dr. Kamilya excels in complex surgeries such as pelvic and acetabular fracture fixation. He continues to stay updated with advancements in orthopaedics to provide the best care for his patients.
          </p>
         
        </motion.div>
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 3 }}
        >
          <img
            src={doctorImage}
            alt="Dr. Ranjan Kamilya "
            className="rounded-lg shadow-lg"
            style={{ boxShadow: '10px 15px 15px rgba(0, 0, 0, 0.2)' }}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
};
