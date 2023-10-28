import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div>
        <footer class="bg-gray-900 w-100 text-white py-10 rounded-lg">
            <div class="w-100 m-5 flex align-middle justify-between">
                
                <ul class="flex flex-col ml-10 w-[48%]">
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">Home</a></li>
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">About Us</a></li>
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">Services</a></li>
                    <li className='mb-2'><a href="#" class="transition duration-300 ease-in-out hover:text-gray-400">Contact</a></li>
                </ul>
                <div class=" w-[48%]">
                    <div class="flex items-center mb-2 ">
                        <InstagramIcon className='mr-2'/>
                        <a href="https://www.instagram.com/" target="_blank" class="transition duration-300 ease-in-out hover:text-gray-400">Instagram</a>
                    </div>
                    <div class="flex items-center mb-2">
                        <LinkedInIcon className='mr-2'/>
                        <a href="https://www.linkedin.com/" target="_blank" class="transition duration-300 ease-in-out hover:text-gray-400">LinkedIn</a>
                    </div>
                    <div class="flex items-center mb-2">
                        <EmailIcon className='mr-2'/>
                        <a href="mailto:your.email@example.com" class="transition duration-300 ease-in-out hover:text-gray-400">your.email@example.com</a>
                    </div>
                    <div class="flex items-center">
                        <LocationOnIcon className='mr-2'/>
                        <a href="https://www.google.com/maps?q=Your+Business+Address" target="_blank" class="transition duration-300 ease-in-out hover:text-gray-400">Your Business Address</a>
                    </div>
                </div>
            </div>
            <div class="w-full flex align-middle justify-center mt-20 items-center  transition duration-300 ease-in-out"> 
                <h1> &copy; 2023 Your Company. All rights reserved. </h1>
            </div>

        </footer>
  
    </div>
  )
}

export default Footer