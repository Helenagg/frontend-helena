import React, { FC } from 'react';
import { TheEndTexts } from '../locale/en';

const TheEnd: FC = () => {
  return (
    <div>
      <div className='container flex flex-col justify-center font-moirai mt-48'>
        <p className='flex justify-center font-bold text-primary text-5xl'>
          {TheEndTexts.THE_END}
        </p>
        <div className='mt-20'>
          <p className='flex justify-center font-bold text-secondary text-5xl'>
            {TheEndTexts.HOPE}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheEnd;
