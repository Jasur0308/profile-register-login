import React, { useState } from 'react';
import './Navbar.css'; // Ensure this file is created and imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <a href="/">MyWebsite</a>
        </div>
        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <li className='navbar__item'><a href="/register">Register</a></li>
          <li className='navbar__item'><a href="/Login">Login</a></li>
          <li className='navbar__item'><a href="/Profile">Profile</a></li>
        </ul>
        <div className='navbar__toggle' onClick={toggleMenu}>
          <div className='navbar__toggle-bar'></div>
          <div className='navbar__toggle-bar'></div>
          <div className='navbar__toggle-bar'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
