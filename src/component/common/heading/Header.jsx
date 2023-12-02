import React, { useState } from 'react';


import { Link } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      
      <header>
        <nav className='flexSB'>
          <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllCourses">All Courses</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
