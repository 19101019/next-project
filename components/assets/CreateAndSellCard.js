import React from 'react';

export default function CreateAndSellCard({ cardHeader, desc }) {
  return (
    <div className='sm:basis-full md:basis-1/4 lg:basis:1/4 flex flex-col p-11'>
      <span className='text-blue-700 text-4xl text-center'>
        <i className='fa-solid fa-wallet'></i>
      </span>
      <span className='text-center lg:text-xl whitespace-nowrap  sm:text-sm lg:m-6 sm:m-5'>
        {cardHeader}
      </span>
      <span className='text-center text-slate-500  lg:text-lg sm:text-sm'>
        {desc}
      </span>
    </div>
  );
}
