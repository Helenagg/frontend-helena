import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hook/useUser';
import { LoginTexts } from '../locale/en';

const LoginPage = () => {
  const [user, setUser] = useState('');
  const { setUserName } = useUser();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserName(user);
    navigate('/posts');
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900 py-64'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <form
            className='p-6 space-y-4 md:space-y-6 sm:p-8'
            onSubmit={handleSubmit}
          >
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              {LoginTexts.INIT}
            </h1>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                {LoginTexts.NAME}
                <input
                  type='text'
                  value={user}
                  name='user'
                  id='user'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Username'
                  required
                  onChange={(e) => setUser(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                {LoginTexts.EMAIL}
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required
                />
              </label>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                {LoginTexts.PASSWORD}
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </label>
            </div>
            <button
              type='submit'
              className='w-full btn-primary-light bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              {LoginTexts.SIGN_IN}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
