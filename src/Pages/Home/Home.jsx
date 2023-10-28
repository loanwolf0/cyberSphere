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

const Home = () => {
  return (
    <div className='home-main'>
       <Navbar/>
       <Hero/>
      <WaterWave/>
       <Title/>
       <Waterdrop/>
       <AboutSection/>
       <div className="aboutTesti">
          <Testimonials/>
       </div>
      <AllReviws/>
      {/* <ContactForm/>  */}
      <FAQ/> 
      {/* <Footer/>   */}
    </div>
  )
}

export default Home