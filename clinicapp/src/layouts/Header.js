import React, { useState, useEffect } from 'react';
import { Button } from '../pages/Button';
import { Link } from 'react-router-dom';
import '../css/header.css';

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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dịch vụ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/examination'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Đăng ký lịch khám
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>ĐĂNG NHẬP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
