import React, { useState } from 'react';
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
    
  return (
    <div
    id='toast-default'
    className={`fixed inset-0 flex items-center justify-center p-4`}
    role='alert'
  >
    <div
      className={`flex items-center w-full max-w-xs p-4 text-gray-900 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${
        type === 'success' ? 'bg-green-500' : 'bg-secondary'
      }`}
    >
      <div className='ms-3 text-sm font-normal'>{msg}</div>
    </div>
  </div>
  );
};

export default Notification;
