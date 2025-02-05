import React, { useState } from 'react';
import { Link } from "react-router-dom";
import applogo from "./applogo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {/* Mobile Navbar */}
      <nav className="lg:hidden relative z-40" style={{ backgroundColor: 'black' }}>
        <div className="flex py-6 justify-between items-center px-4">
          <div className="w-1/6 flex items-center ">
           
            <div className="titlename" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '1px', color: '#ffffff', fontFamily: 'sans-serif' }}>
              URBAN EYE
            </div>
          </div>
          <div className="flex items-center">
            {/* Hamburger Icon */}
            <div onClick={() => setMenu(!menu)} className="cursor-pointer xl:hidden">
              {!menu ? (
                // Hamburger Menu Icon
                <svg width="30" height="30" viewBox="0 0 100 80" fill="white">
                  <rect width="100" height="15"></rect>
                  <rect y="30" width="100" height="15"></rect>
                  <rect y="60" width="100" height="15"></rect>
                </svg>
              ) : (
                // Close Icon
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                </svg>
              )}
            </div>
            {/* Dropdown Menu */}
            <ul className={`${menu ? '' : 'hidden'} p-2 border-r bg-gray-800 absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
              <li className="flex cursor-pointer text-white text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none">
                <Link to="/" onClick={() => setMenu(false)}>
                  <span className="ml-2 font-bold">Home</span>
                </Link>
              </li>
              <li className="flex cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none">
                <a href="http://localhost:8501/" onClick={() => setMenu(false)}>
                  <span className="ml-2 font-bold">Surveillance Area</span>
                </a>
              </li>
              <li className="flex cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none">
                <Link to="/Formmissing" onClick={() => setMenu(false)}>
                  <span className="ml-2 font-bold">Report case</span>
                </Link>
              </li>
              <li className="flex cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none">
                <Link to="/Missingpeople" onClick={() => setMenu(false)}>
                  <span className="ml-2 font-bold">Missing List</span>
                </Link>
              </li>
              <li className="flex cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none">
                <Link to="/locations" onClick={() => setMenu(false)}>
                  <span className="ml-2 font-bold">Tracked locations</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav role="navigation" aria-label="Main" tabIndex="0" className="hidden relative z-10 w-full lg:flex justify-between items-center p-8
backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
" style={{backgroundImage: 'linear-gradient(-390deg, #8D0B93 0%, #321575 100%)' }}>
        <div className="w-1/6 flex items-center ">
        
          <div className="titlename" style={{ fontSize: '25px', fontWeight: 700, letterSpacing: '1px', color: '#ffffff', fontFamily: 'sans-serif' }}>
           URBAN EYE
          </div>
        </div>
        <div className="w-5/6">
          <div className="flex items-center justify-end">  
            <ul className="text-white lg:space-x-8 flex items-center leading-none">
              <li>
                <Link className="hover:text-indigo-500 text-lg focus:text-indigo-500" to="/">Home</Link>
              </li>
              <li className="ml-4 hover:text-indigo-500 ">
                <a className="focus:text-indigo-500 text-lg" href="http://localhost:8501/">Surveillance Area</a>
              </li>
              <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                <Link className="focus:text-indigo-500 text-lg" to="/Formmissing">Report case</Link>
              </li>
              <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                <Link className="focus:text-indigo-500 text-lg" to="/Missingpeople">Missing List</Link>
              </li>
              <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                <Link className="focus:text-indigo-500 text-lg" to="/locations">Tracked locations</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;