import React from 'react';
import './ContactForm';
import ContactImg from '..//..//assets/contact-img.jpg'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (

    <div className="contact-main-container flex flex-col justify-between align-middle w-full">
      <div className="title flex justify-center items-center w-full h-20 text-white mt-20">
        <h2 className="text-4xl mb-5 w-100 font-bold text-black p-5 rounded-xl bg-[rgba(0,0,0,0.075)]"> <span className='text-[rgb(254,192,71)]'>CONTACT</span>  <span className='text-[rgb(104,68,202)]' > US  !</span>  </h2>
      </div>
    
      <div className="ContactForm-container flex justify-between align-middle w-full mt-5 p-6">
        <div className="contact-img w-[48%] flex justify-between align-middle">
          <img src={ContactImg} alt="contact" className=" object-contain" />
        </div>

        <div className="container w-[48%]  flex flex-col justify-center align-middle">
        <form onSubmit={handleSubmit} className=" w-full flex flex-col align-middle justify-center gap-15">
          <div className='mb-5 w-full '>
            <label htmlFor="title" className="block text-gray-700 ">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="p-2 outline-none border-none"
              placeholder="Enter your title"
            />
          </div>
          <div className='mb-5 w-[40%]'>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-style p-2 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className='mb-5 w-[40%]'>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-style p-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className='mb-5 w-[40%]'>
            <label htmlFor="mobile" className="block text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="input-style p-2 outline-none"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className='mb-5 w-[40%]'>
            <label htmlFor="file" className="block text-gray-700">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="input-style p-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white pt-2 pb-2 w-[40%] rounded hover:bg-blue-600 transition-all duration-300 "
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
    
  );
};

export default ContactForm;
