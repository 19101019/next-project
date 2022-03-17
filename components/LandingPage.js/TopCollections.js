import React, { useState } from 'react';
import NftCard from '../assets/NftCard';
import TopCollectionCard from '../assets/TopCollectionCard';

export default function TopCollections() {
  const [showDaysOptions, setShowDaysOptions] = useState(false);

  return (
    <>
      <div className='text-center sm:m-10 lg:m-20'>
        <span className='text-center relative sm:text-xl lg:text-3xl lg:m-10 lg:p-10 subpixel-antialiased sm:mt-10 sm:mb-10'>
          Top collections over last
          <strong
            className='lg:text-3xl text-blue-500'
            onClick={() => setShowDaysOptions(!showDaysOptions)}
          >
            &nbsp; 7&nbsp;days&nbsp;<i className='fa-solid fa-angle-down'></i>
          </strong>
          {showDaysOptions && (
            <span className='flex flex-col absolute lg:rounded-lg z-30  sm:bottom-10 lg:bottom-20 lg:right-0 sm:rounded-sm bg-white shadow-lg lg:text-lg sm:w-40 lg:w-60 sm:text-sm'>
              <span className='lg:border-b-2 lg:pt-5 lg:pb-5 lg:pr-10 sm:border-b sm:pt-2 sm:pr-4 sm:pb-2'>
                last 24 hours
              </span>
              <span className='lg:border-b-2 sm:border-b lg:pt-5 lg:pb-5 lg:pr-10 sm:border-b sm:pt-2 sm:pr-4 sm:pb-2'>
                last 7 days
              </span>
              <span className='lg:border-b-2 sm:border-b lg:pt-5 lg:pb-5 lg:pr-10 sm:border-b sm:pt-2 sm:pr-4 sm:pb-2'>
                last 30 days
              </span>
            </span>
          )}
        </span>
      </div>

      <div className='grid lg:grid-cols-3  sm:grid-cols-1 lg:p-10 md:grid-cols-2 gap-x-10'>
        <TopCollectionCard id='1' />
        <TopCollectionCard id='2' />
        <TopCollectionCard id='3' />
        <TopCollectionCard id='4' />
        <TopCollectionCard id='5' />
        <TopCollectionCard id='6' />
        <TopCollectionCard id='7' />
        <TopCollectionCard id='8' />
        <TopCollectionCard id='9' />
        <TopCollectionCard id='10' />
        <TopCollectionCard id='11' />
        <TopCollectionCard id='12' />
      </div>
    </>
  );
}
