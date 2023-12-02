
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png'
import './Navbar.css';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isMobile, setIsMobile] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
 
  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      setIsSearchActive(false);
      setSearchValue('');
    }
  };

  const handleMobile = (e) => {
    setIsMobile(!isMobile);
    setIsClicked(!isClicked);
  }

  return (
    <nav className={`flex flex-row justify-between items-center  gap-5 p-10`}>
      
      <div className="mobile_cont flex flex-row justify-center items-center ">

        <div className="mobileNav">
          <button onClick={handleMobile} className={`w-auto h-auto items-center justify-center flex p-3 `}>
            {isClicked ?  <CloseIcon/> : <MenuIcon/> }
          </button>
        </div>

        <div className={`flex items-center mobileContainer ${isSearchActive ? 'hidden' : ''}`}>
          <div className="logo text-pink-500 text-3xl mr-2 transition-transform transform logo_nav hover:rotate-90 cursor-pointer">
              <img src={logo} alt="logo" className="mobileLogo" />
          </div>
          <div className="name mobileName text-lg font-bold text-dark-blue">Cyber-sphere</div>
        </div>

      </div>

      <div className={`${isSearchActive ? 'hidden' : ''}  `}>

        <ul className={`${isClicked ? 'navlinks active' : 'navlinks'}`}>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#home"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Home
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#about"
              className="text-black text-lg cursor-pointer custom-a"
            >
              About
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#courses"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Courses
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#services"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Services
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#contact"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Contact
              <div className="line"></div>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className={`flex items-center mt-4 md:mt-0 ${isSearchActive ? 'hidden' : ''}`}>
        <div className="search-icon mr-2 text-blue-500 hover:scale-125 cursor-pointer" onClick={handleSearchClick}>
          <SearchIcon />
        </div>
        <div className="login-register text-lg font-semibold hover:text-rgb-blue cursor-pointer" onClick={handleSearchClick}>Login / Register</div>
      </div>
      {isSearchActive && (
        <div className="search-container flex flex-col items-center mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchInputChange}
            onKeyPress={handleSearchSubmit}
            autoFocus
            className="w-full md:w-3/4 py-2 px-4 mb-2 md:mb-0 md:mr-2 rounded-md border border-blue-500 text-base"
          />
          <button onClick={handleSearchSubmit} className="py-2 px-4 bg-blue-500 text-white rounded-md text-base hover:bg-blue-600 cursor-pointer">Search</button>
        </div>
      )} */}
    </nav>
  );
}

export default Navbar;
