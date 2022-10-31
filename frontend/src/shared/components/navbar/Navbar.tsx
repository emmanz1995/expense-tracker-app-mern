import React, { FC, useState, useEffect } from 'react';
import './navbar.scss';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';

const Navbar: FC<{ setTheme: any; theme: string, openModal: () => void; }> = ({ setTheme, theme, openModal }) => {
  const [ revealNav, setRevealNav ] = useState(false);
  const navTransition = () => {
    if(window.scrollY > 50) {
      setRevealNav(true);
    } else {
      setRevealNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', navTransition);
    return () => {
      window.removeEventListener('scroll', navTransition);
    }
  },[]);
  return (
    <nav className={ `nav ? ${ revealNav && 'black' }` }>
      <div className="nav__wrapper">
        <h4 className="text">Expense Tracker App</h4>
        <ul className="nav__ul">
          <li><a className="text create-post-link" href="#" onClick={openModal}>Add Expense</a></li>
          <li><a onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text">{theme === 'dark' ? <FaSun style={{ color: 'yellow' }} /> : <FaMoon className="moon-icon" />}</a></li>
          <li><a className="text create-post-link" href="#"><FaUserCircle /></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;