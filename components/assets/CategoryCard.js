import React from 'react';
import Image from 'next/image';
import art from '../../images/landingPage/art.jpg';
export default function CategoryCard({ title }) {
  return (
    <div className='border-2  border-black-700 relative sm:m-5 hover:shadow-lg   lg:rounded-lg sm:rounded-lg'>
      <Image
        src={art}
        alt=''
        height={450}
        objectFit='cover'
        layout='responsive'
      />

      <span className='flex sm:pt-5 sm:pb-5 font-semibold justify-center items-center lg:text-3xl sm:text-xl bg-white absolute z-444 bottom-0 w-full lg:h-20  '>
        {title}
      </span>
    </div>
  );
}
