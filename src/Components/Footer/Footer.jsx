import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 w-100 text-white rounded-lg">
            <div className="w-100 m-3 md:m-5 flex align-middle justify-between p-5 py-10">
                
                <ul className="flex flex-col ml-2  md:ml-10 w-[48%]">
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">Home</a></li>
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">About Us</a></li>
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">Services</a></li>
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">Contact</a></li>
                </ul>
                <div className=" w-[48%] ">
                    <div className="flex items-center mb-2 ">
                        <InstagramIcon className='mr-2'/>
                        <a href="https://www.instagram.com/" target="_blank" className="transition duration-300 ease-in-out hover:text-gray-400">Instagram</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <LinkedInIcon className='mr-2'/>
                        <a href="https://www.linkedin.com/" target="_blank" className="transition duration-300 ease-in-out hover:text-gray-400">LinkedIn</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <EmailIcon className='mr-2'/>
                        <a href="mailto:your.email@example.com" class="transition duration-300 ease-in-out hover:text-gray-400">Mail Us</a>
                    </div>
                    <div className="flex items-center">
                        <LocationOnIcon className='mr-2'/>
                        <a href="https://www.google.com/maps?q=Your+Business+Address" target="_blank" className="transition duration-300 ease-in-out hover:text-gray-400">Address</a>
                    </div>
                </div>
            </div>
            <div class="w-full flex align-middle justify-center mt-15 pb-5 items-center  transition duration-300 ease-in-out"> 
                <h1> &copy; 2023 Your Company. All rights reserved. </h1>
            </div>

        </footer>
  
    </div>
  )
}

export default Footer