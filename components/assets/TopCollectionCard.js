import React from 'react';
import Image from 'next/image';
import nft from '../../images/landingPage/logo_nft.png';
import ethereum from '../../images/etheriumicon.svg';

export default function TopCollectionCard({ id }) {
  return (
    <div className='flex flex-row bg-transparent lg:h-32 sm:pl-4 sm:w-full sm:h-20 items-center lg:p-10   border-b-2 h-36 lg:h-35 hover:shadow-lg hover:bg-slate-50 hover:rounded-lg sm:text-sm lg:text-lg sm:p-2'>
      <div className='text-centre mr-2.5 text-xl font-medium sm:font-sm'>
        {id}
      </div>
      <div className='w-12 h-12 m-2  p-0'>
        <Image
          src={nft}
          alt=''
          className='w-full rounded-full h-full object-cover m-0 '
        />
      </div>
      <div className='flex flex-col ml-1 '>
        <span className='text-black lg:text-lg text-xl sm:text-sm whitespace-nowrap'>
          Invisible Friends
        </span>
        <span>
          <span className='text-stone-500 text-sm whitespace-nowrap'>
            Floor price:
          </span>
          <i className='fa-brands fa-ethereum m-1 text-lg'></i>
          <span className='text-stone-500 lg:text-lg sm:text-sm'>7.75</span>
        </span>
      </div>
      <div className='flex flex-col ml-10'>
        <span className='text-black lg:font-medium text-red-400 sm:text-sm'>
          -69.77%
        </span>
        <span>
          <i className='fa-brands fa-ethereum m-1 text-lg'></i>

          <span className='text-stone-500 text-lg sm:text-sm'>7000</span>
        </span>
      </div>
    </div>
  );
}
