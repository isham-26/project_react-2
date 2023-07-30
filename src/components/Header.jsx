import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { HashLink } from 'react-router-hash-link';
function Header() {
  return (
     <nav>
        <h1>TECHSTAR</h1>
        <div className='main'>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/#about">About</HashLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Details">Details</NavLink>
        </div>
     </nav>
  );
}

export default Header;
