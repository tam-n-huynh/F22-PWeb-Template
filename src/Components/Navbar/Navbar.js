import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo2 from '../../images/logo2.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div to='/' className='logo'>
                    <img src={logo2} alt=''/>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <CloseIcon style={{ color: "white" }}/> : <MenuIcon style={{ color: "white" }}/>}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                            Education
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/involvement' className='nav-links' onClick={closeMobileMenu}>
                            Involvement
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/experiences' className='nav-links' onClick={closeMobileMenu}>
                            Experiences
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;