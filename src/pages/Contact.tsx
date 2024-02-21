import React, { FC } from 'react'
import { ContactTexts } from '../locale/en';

export const Contact: FC = () => {
  return (
    <div>
      <div className='container flex flex-col justify-center font-moirai mt-48'>
        <p className='flex justify-center font-bold text-primary text-5xl'>
          {ContactTexts.NAME}
        </p>
        <div className='mt-20'>
        <p className='flex justify-center font-bold text-primary text-5xl'>
        {ContactTexts.EMPLOY}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Contact
