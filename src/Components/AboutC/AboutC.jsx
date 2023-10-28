import React from 'react';
import './AboutC.css'; // CSS file for custom styles

const AboutSection = () => {
  return (
    <div className="about-section flex justify-center items-center w-100  mt-20 md:mt-10">
      <div className="about-content p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-700">🌟 About Us 🌟</h1>
        <p className="text-lg mb-4 text-gray-700">
          Welcome to our world of innovation and creativity! We're on a mission to make a difference in the digital landscape by providing cutting-edge solutions and educational resources. Our passion is to empower individuals and businesses through the latest technologies, helping them thrive in the digital realm. From innovative web applications to educational content, we're here to elevate your digital experience. Join us on this exciting journey of learning and growth!
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
