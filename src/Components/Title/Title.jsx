import React from 'react'
import './Title.css'

const Title = () => {
  return (
    <div className="title w-100 mt-[-20px] flex justify-center ">
      <div className="content w-[600px] text-center align-middle m-1 md:ml-10 flex justify-center flex-col">
        <h3 className="text-2xl md:text-4xl mb-10 opacity-0 font-bold animate-fade-in">
        Startup Your Career And Take It To The <span className='text-[rgb(254,192,71)]'> Next Level ! </span> 
        </h3> 
        <p className=" text-[18px] font-bold w-100 text-center text-[rgb(104,68,202)] opacity-0 animate-fade-in">
          Join The Internship And Show What You Have. We Will Provide You The Best Way To Utilize Your Skills.
        </p> 
      </div>
    </div>
  );
};

export default Title