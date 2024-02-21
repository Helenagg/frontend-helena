import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarTexts } from '../locale/en';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const location = useLocation();

  if (!isOpen) {
    return null;
  }
  console.log('location', location.pathname)
  return (
    <div
      className={`absolute top-full right-16 z-30 w-full md:hidden ${
        isOpen ? 'flex' : 'hidden'
      }`}
      id='navbar-sticky'
    >
      <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800'>
        <li>
          <Link
            to='/posts'
            className={`block py-2 px-2 ${
              location.pathname === '/posts'
                ? 'text-primary-dark'
                : 'text-primary-light'
            } rounded hover:text-primary-dark`}
          >
            {NavBarTexts.HOME}
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className={`block py-2 px-2 ${
              location.pathname === '/contact'
                ? 'text-primary-dark'
                : 'text-primary-light'
            } rounded hover:text-primary-dark`}
          >
            {NavBarTexts.CONTACT}
          </Link>
        </li>
        <li>
          <Link
            to='/theend'
            className={`block py-2 px-1 ${
              location.pathname === '/theend'
                ? 'text-primary-dark'
                : 'text-primary-light'
            } rounded hover:text-primary-dark`}
          >
            {NavBarTexts.THEEND}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
