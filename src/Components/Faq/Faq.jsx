import React, { useState } from 'react';
import './FAQ.css'; // Your custom CSS file for styling
import Faq from '../../assets/Faq2.jpg'

const FAQ = () => {
  const faqData = [
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { question: 'Where can I get some?', answer: 'There are many variations of passages of Lorem Ipsum available.' },
    { question: 'Is it safe to use?', answer: 'Yes, Lorem Ipsum is safe to use. It has been the industry\'s standard dummy text ever since the 1500s.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contact-main-container flex flex-col justify-between align-middle w-full mt-15">

      <div className="title flex justify-center items-center w-full h-20 text-white mt-20">
        <h2 className="text-4xl mb-5 w-100 font-bold text-black p-5 rounded-xl bg-[rgba(0,0,0,0.075)]"> <span className='text-[rgb(254,192,71)]'>FREQUENTLY</span>  ASKED <span className='text-[rgb(104,68,202)]' > QUESTIONS !</span>  </h2>
      </div>

      <div className="Faq-main-container p-10 mt-10">
        <div className="faq-img  w-100 md:w-[48%] flex justify-between align-middle">
          <img src={Faq} alt="faq-img" className=" object-contain" />
        </div>
      
        <div className="Faq-container w-100 md:w-[48%] flex justify-between align-middle ">
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question outline-none border-none" onClick={() => handleToggle(index)}>
                  <span className="faq-question-text outline-none">{item.question}</span>
                  <span className={`faq-icon  outline-none ${activeIndex === index ? 'open' : ''}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>

    </div>
  );
};

export default FAQ;
