import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { useUser } from '../hook/useUser';
import { NavBarTexts } from '../locale/en';
import MobileMenu from './MobileMenu';

interface NavProps {
  isLoginPage?: boolean;
}

const NavBar: FC<NavProps> = ({ isLoginPage }) => {
  const location = useLocation();
  const { userName } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isLoginPage ? (
        <nav className='bg-white w-full z-20 top-0 start-0 border-b border-gray-200 '>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link
              to='/posts'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <span className='self-center text-4xl font-semibold whitespace-nowrap  font-moirai'>
                {NavBarTexts.LOGO}
              </span>
            </Link>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative'>
              <div
                className={`flex items-center ${
                  !isMenuOpen
                    ? 'bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg text-sm px-4 py-2 text-center text-white mr-3'
                    : 'bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none hidden focus:ring-primary-dark font-medium rounded-lg text-sm px-4 py-2 text-center text-white mr-3'
                }`}
              >
                <div className='mr-2'>
                  {userName ? userName : NavBarTexts.USER}
                </div>
                <Link to='/'>
                  <MdLogout size={20} />
                </Link>
              </div>
              <button
                data-collapse-toggle='navbar-sticky'
                type='button'
                className='inline-flex items-center p-2 w-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='navbar-sticky'
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>
              <MobileMenu isOpen={isMenuOpen} />
            </div>
            <div
              className='items-center hidden justify-between w-full md:flex md:w-auto md:order-1'
              id='navbar-sticky'
            >
              <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <Link
                    to='/posts'
                    className={`block py-2 px-3 ${
                      location.pathname === '/posts'
                        ? 'text-primary-dark'
                        : 'text-primary-light'
                    } rounded md:p-0 hover:text-primary-dark`}
                    aria-current='page'
                  >
                    {NavBarTexts.HOME}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className={`block py-2 px-3 ${
                      location.pathname === '/contact'
                        ? 'text-primary-dark'
                        : 'text-primary-light'
                    } rounded md:p-0 hover:text-primary-dark`}
                  >
                    {NavBarTexts.CONTACT}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/theend'
                    className={`block py-2 px-3 ${
                      location.pathname === '/theend'
                        ? 'text-primary-dark'
                        : 'text-primary-light'
                    } rounded md:p-0 hover:text-primary-dark`}
                  >
                    {NavBarTexts.THEEND}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 text-center'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 font-moirai'>
            <span className='self-center text-4xl font-semibold whitespace-nowrap dark:text-white'>
              {NavBarTexts.LOGO}
            </span>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
