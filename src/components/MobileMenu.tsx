import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarTexts } from '../locale/en';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    if (!isOpen) {
        return null;
      }
  return (
    <div className={`items-center justify-between w-full md:hidden ${isOpen ? 'flex' : 'hidden'}`} id='navbar-sticky'>
      <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800'>
        <li>
          <Link to='/posts' className='block py-2 px-3 text-primary-light rounded hover:text-primary-dark'>
            {NavBarTexts.HOME}
          </Link>
        </li>
        <li>
          <Link to='/contact' className='block py-2 px-3 text-primary-light rounded hover:text-primary-dark'>
            {NavBarTexts.CONTACT}
          </Link>
        </li>
        <li>
          <Link to='/theend' className='block py-2 px-3 text-primary-light rounded hover:text-primary-dark'>
            {NavBarTexts.THEEND}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;