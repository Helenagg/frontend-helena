import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white w-full'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023 Helena González González
        </span>
        <ul className='flex flex-wrap items-center mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link to='/' className='hover:underline me-4 md:me-6'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to='/' className='hover:underline me-4 md:me-6'>
              Cookies
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;