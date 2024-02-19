import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Post App
          </span>
        </Link>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login Name
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                to='/'
                className={`block py-2 px-3 ${location.pathname === '/' ? 'text-primary-dark' : 'text-primary-light'} rounded md:p-0 hover:text-primary-dark`}
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/post'
                className={`block py-2 px-3 ${location.pathname === '/post' ? 'text-primary-dark' : 'text-primary-light'} rounded md:p-0 hover:text-primary-dark`}              >
                Post
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className={`block py-2 px-3 ${location.pathname === '/contact' ? 'text-primary-dark' : 'text-primary-light'} rounded md:p-0 hover:text-primary-dark`}              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
