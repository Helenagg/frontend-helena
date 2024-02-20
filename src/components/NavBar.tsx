import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { useUser } from '../hook/useUser';

interface NavProps {
  isLoginPage?: boolean;
}

const NavBar: FC<NavProps> = ({ isLoginPage }) => {
  const location = useLocation();
  const { userName } = useUser()

  return (
    <>
      {!isLoginPage ? (
        <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link
              to='/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <span className='self-center text-4xl font-semibold whitespace-nowrap  font-moirai'>
                Post App
              </span>
            </Link>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
              <div
                className='bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg text-sm px-4 py-2 text-center text-white mr-3'
              >
               {userName ? userName : 'Login Name'} 
              </div>
              <Link to='/login'>
                <MdLogout size={30}/>
              </Link>              
            </div>
            <div
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
              id='navbar-sticky'
            >
              <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <Link
                    to='/'
                    className={`block py-2 px-3 ${
                      location.pathname === '/'
                        ? 'text-primary-dark'
                        : 'text-primary-light'
                    } rounded md:p-0 hover:text-primary-dark`}
                    aria-current='page'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/post'
                    className={`block py-2 px-3 ${
                      location.pathname === '/post'
                        ? 'text-primary-dark'
                        : 'text-primary-light'
                    } rounded md:p-0 hover:text-primary-dark`}
                  >
                    Post
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
                    Contact
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
              Post App
            </span>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
