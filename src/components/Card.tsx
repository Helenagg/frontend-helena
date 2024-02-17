import React from 'react';

interface CardProps {
  title?: string;
  body?: string;
  userId?: number;
}

const Card: React.FC<CardProps> = ({ title, userId, body }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{body}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          Created By: {userId}
        </span>
        <button>Delete</button>
        <button>Modified</button>
      </div>
    </div>
  );
};

export default Card;
