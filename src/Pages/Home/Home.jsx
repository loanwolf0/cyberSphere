import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import './Home.css'
import Title from '../../Components/Title/Title'
import Waterdrop from '../../Components/Waterdrop/Waterdrop'
import AboutSection from '../../Components/AboutC/AboutC'
import WaterWave from '../../Components/WaterWave/WaterWave'
import Testimonials from '../../Components/Testimonials/Testimonials'
import AllReviws from '../../Components/AllReviews/AllReviws'
import ContactForm from '../../Components/ContactFORM/ContactForm'
import FAQ from '../../Components/Faq/Faq'
import Footer from '../../Components/Footer/Footer'
import Internship from '../../Components/Internship/Internship'
import Our_internship from '../../Components/Our_internship/Our_internship'
import About from '../About/About'

const Home = () => {
  return (
    <div className='home-main'>
       <Navbar/>
       <Hero/>
      <WaterWave/>
       <Title/>
       <Waterdrop/>
       <Our_internship/>
       <AboutSection/>
        {/* <div className="aboutTesti">
          <Testimonials/>
       </div> */}
      <AllReviws/>
      <ContactForm/> 
      <FAQ/> 
      <Footer/>   
      {/* <About/> */}
    </div>
  )
}

export default Home