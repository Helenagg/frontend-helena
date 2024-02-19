import React from 'react';
import { useSelector } from 'react-redux';

interface NotificationState {
  msg: string;
  type: 'success' | 'error';
}

const Notification: React.FC = () => {
  const notification = useSelector(
    ({ notification }: { notification: NotificationState }) => notification
  );
  if (!notification.msg) return null;

  const { msg, type } = notification;
  console.log('type', type)
  return (
    <div
      id="toast-default" className={`flex items-center w-full max-w-xs p-4 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
      role='alert'
    >
      <div className='ms-3 text-sm font-normal'>{msg}</div>
      <button
        type='button'
        className='ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
        data-dismiss-target='#toast-default'
        aria-label='Close'
      >
        <span className='sr-only'>Close</span>
        <svg
          className='w-3 h-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 14'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
          />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
