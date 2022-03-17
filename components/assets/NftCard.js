import Image from 'next/image';
import React from 'react';
// import nft from '../../images/nft.png';
import etherium from '../../images/etheriumicon.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function NftCard() {
  return (
    <div
      style={{ minWidth: '200px' }}
      className='hover:-translate-y-0.5 w-auto h-auto border max-w-px-275 rounded-xl overflow-hidden'
    >
      <Image className='w-2 h-2' alt='' src={etherium} />
      <div className=' px-3 flex flex-row w-full min-w-px-200 justify-between shadow-md pb-4'>
        <div className=' flex flex-col w-2/3'>
          <span className='text-xs font-bold tracking-wide text-gray-600 mb-0.5'>
            Bored Tesla
          </span>
          <span className='text-xs font-semibold tracking-wide text-gray-800'>
            Tesla #4612
          </span>
        </div>
        <div className=' flex flex-col w-2/6 justify-end items-end'>
          <span className='text-xs tracking-wide text-gray-600'>Price</span>
          <span className=' flex flex-row items-center'>
            <span className='h-4 w-2  object-contain'>
              <Image className='w-2 h-2' alt='' src={etherium} />
            </span>
            <span className='pl-2 font-bold h-4 tracking-wide text-sm text-gray-800'>
              0.015
            </span>
          </span>
          <span
            style={{ fontSize: '11px' }}
            className=' tracking-wide text-gray-600 min-w-min pt-1 '
          >
            <AccessTimeFilledIcon
              style={{ fontSize: '11px' }}
              className=' text- pr-0.5 '
            />
            a day left
          </span>
        </div>
      </div>
      <div className=' flex p-3 flex-row justify-between items-center'>
        <span className='text-blue-700 font-semibold text-sm'>
          <a href='#'>Buy now</a>
        </span>
        <span className='flex items-center flex-row text-xs text-gray-500 font-medium'>
          <FavoriteBorderIcon className='text-xl font-extralight mr-1 text-gray-500' />
          9
        </span>
      </div>
    </div>
  );
}
