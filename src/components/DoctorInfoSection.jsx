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
    <section ref={ref} className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 3 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-500">
            About Dr. XYZ
          </h2>
          <p className="text-lg mb-4 text-blue-400">
            Dr. XYZ is a renowned physician dedicated to building a
            healthy community. With years of experience and a compassionate
            approach, Dr. Sen has made significant contributions to public
            health and wellness.
          </p>
          <p className="text-lg text-blue-400">
            Dr. Sen believes in a holistic approach to healthcare, emphasizing
            preventive care and healthy lifestyle choices. His expertise and
            dedication have earned him the trust and respect of patients and
            peers alike.
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
            alt="Dr. XYZ "
            className="rounded-lg shadow-lg"
            style={{ boxShadow: '10px 10px 18px rgba(0, 0, 0, 0.5)' }}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
};
