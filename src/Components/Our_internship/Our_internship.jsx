import React from 'react'
import './Our_internship.css'
import Internship from '../Internship/Internship'

const Our_internship = () => {
  return (
    <div className="Our_I_container">
        <div className="OI_title mb-20">
            <h2 className="text-3xl md:text-4xl mb-5 w-100 font-bold text-black p-5 rounded-xl bg-[rgba(0,0,0,0.075)]"> <span className='text-[rgb(254,192,71)]'>OUR</span>  <span className='text-[rgb(104,68,202)]' > INTERNSHIP</span>  </h2>
        </div>
        <div className='Our_internship'>
            <Internship
                title1='Web'
                title2='Development'
                img='f'
                des='The internship provides hands-on experience in web and app development with a dynamic innovation team, offering practical exposure to creating and enhancing web-based systems through challenging projects.'
            />
            <Internship
                title1='Android'
                title2='Development'
                img='f'
                des='Android, an open-source OS for mobile app development, is preferred as people increasingly use mobile devices for internet tasks. Starting your first app with Cyber Sphere is an easy and user-friendly choice.'
            />
            <Internship
                title1='Java'
                title2='Development'
                img='f'
                des='Master Java programming from home, earn certification, and join a 4-week internship to learn web development using Java. Gain real-world experience, build your network, and integrate theory with practical skills.'
            />
            <Internship
                title1='Python'
                title2='Development'
                img='f'
                des={`Join our 4-week Python internship from home to master programming. Acquire essential skills for exciting job prospects, covering web development and deploying Python-driven applications. Get certified to elevate your career. Don't miss this chance to excel in Python programming!`}
            />
            <Internship
                title1='Graphic'
                title2='Design'
                img='f'
                des='Explore diverse projects in a Graphic Design Internship covering visual design aspects for businesses. Tasks include creating graphic and video content, template and web design. We tailor internships across industries to align with your career goals.'
            />
            <Internship
                title1='Data'
                title2='Science'
                img='f'
                des='Remote Data Science Internships offer a distinctive opportunity to gain experience within the virtual workforce while being immersed in a top organization in the field. Data Analysis Internships are highly competitive and popular within the broader Data Science field.'
            />
        </div>

    </div>        
  )
}

export default Our_internship