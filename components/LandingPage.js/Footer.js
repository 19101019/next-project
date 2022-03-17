import React from 'react';
import Image from 'next/image';
import coinbase from '../../images/landingPage/coinbase.png';
import styles from '../../styles/footer.module.css';
import openSea from '../../images/opensea.svg';
export default function Footer() {
  return (
    <>
      <div
        className={
          'flex flex-wrap lg:p-10 sm:p-5 sm:w-full items-between  justify-between lg:p-10   ' +
          styles.bg
        }
      >
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
        <div className='sm:w-20 lg:w-32  sm:m-2'>
          <Image src={coinbase} alt='' objectFit='cover' layout='responsive' />
        </div>
      </div>
      <div className={' ' + styles.bg_dark}>
        <div className='flex text-white flex-wrap '>
          <div className='flex flex-col lg:w-1/2  lg:p-20 sm:p-10'>
            <span className='lg:text-2xl lg:m-5 sm:text-xl lg:text-left sm:text-center sm:m-2'>
              Stay in the loop
            </span>
            <span className='lg:text-xl lg:m-5 sm:m-2 lg:text-left sm:text-center'>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </span>
            <div className='flex '>
              <input
                type='text'
                autoComplete='off'
                placeholder='Your email address'
                className=' 
          sm:px-2  lg:m-5 w-9/12  sm:m-2  sm:rounded-xl sm:text-base sm:text-gray-700 sm:font-poppinfont sm:border lg:w-80 xl:w-128 sm:h-12 focus:outline-none  focus:shadow-lg
        '
              />
              <button className='sm:h-12 lg:text-lg sm:border sm:w-1/4 lg:m-5 sm:border-blue-700 sm:font-bold sm:rounded-xl sm:bg-blue-500 sm:text-white sm:text-sm sm:cursor-pointer sm:mr-6 sm:p-2 sm:m-2'>
                Sign&nbsp;up
              </button>
            </div>
          </div>
          <div
            className=' flex flex-col lg:pl-20 lg:pr-20 sm:px-2 flex-wrap
        '
          >
            <span className='lg:text-3xl sm:text-xl lg:mt-10 lg:text-left sm:text-center'>
              Join&nbsp;the&nbsp;community
            </span>
            <span className='lg:text-4xl flex sm:flex-wrap sm:justify-center  lg:text-left sm:text-center lg:mt-5'>
              <span className={'p-4 rounded-lg lg:m-2 sm:m-2 ' + styles.bg}>
                <i className='fa-brands fa-twitter'></i>
              </span>
              <span className={'p-4 rounded-lg lg:m-2 sm:m-2   ' + styles.bg}>
                <i className='fa-brands fa-instagram'></i>
              </span>
              <span className={'p-4 rounded-lg lg:m-2 sm:m-2   ' + styles.bg}>
                <i className='fa-brands fa-discord'></i>
              </span>
              <span className={'p-4 rounded-lg lg:m-2 sm:m-2   ' + styles.bg}>
                <i className='fa-brands fa-reddit'></i>
              </span>
              <span className={'p-4 rounded-lg lg:m-2 sm:m-2  ' + styles.bg}>
                <i className='fa-solid fa-envelope'></i>
              </span>
            </span>
          </div>
        </div>
        <div className='flex justify-center lg:m-10 sm:mx-0 w-full'>
          <hr className='w-2/3 text-slate-500' />
        </div>
        <div
          className={'text-white flex-wrap  lg:pt-28 lg:px-10  ' + styles.grid}
        >
          <div className='flex  flex-col lg:pl-10 lg:px-20 md:text-center lg:text-left md:mt-10 lg:mt-0 sm:col-span-full   lg:col-span-3'>
            <div className='sm:justify-center  flex sm:mt-5 lg:block'>
              <Image
                src={openSea}
                alt=''
                objectFit='cover'
                width={70}
                height={70}
              />
            </div>
            <span className='lg:text-2xl md:text-xl sm:text-center lg:text-left sm:text-lg mt-4 mb-4'>
              OpenSea
            </span>
            <span className='lg:text-xl md:text-lg sm:text-center lg:text-left sm:text-sm'>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </span>
          </div>
          <div className='flex flex-col  sm:m-5 '>
            <span className='hover:cursor-pointer m-2 font-bold text-xl'>
              Marketplace
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              All NFTs
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Art
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Collectibles
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Domain Names
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Music
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Photography
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Sports
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Trading Cards
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Utility
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm                                       '>
              Virtual Worlds
            </span>
          </div>
          <div className='flex flex-col sm:m-5 '>
            <span
              className='hover:cursor-pointer m-2
             font-bold text-xl'
            >
              My Account
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Profile
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Favorites
            </span>
            <span className='hover:cursor-pointer m-2  lg:text-xl md:text-lg  sm:text-sm'>
              Watchlist
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              My Collections
            </span>
            <span className='hover:cursor-pointer m-2 font-bold  text-xl'>
              Stats
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Rankings
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Activity
            </span>
          </div>
          <div className='flex sm:m-5 flex-col '>
            <span className='hover:cursor-pointer m-2 font-bold  text-xl'>
              Resources
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Help Center
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Platform Status
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Partners
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Gas-Free Marketplace
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Taxes
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Blog
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Docs
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm '>
              Newsletter
            </span>
          </div>
          <div className='flex sm:m-5 flex-col '>
            <span className='hover:cursor-pointer m-2 font-bold text-xl'>
              Company
            </span>
            <span className='hover:cursor-pointer m-2  lg:text-xl md:text-lg  sm:text-sm'>
              About
            </span>
            <span className='hover:cursor-pointer m-2  lg:text-xl md:text-lg  sm:text-sm'>
              Careers
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Ventures
            </span>
            <span className='hover:cursor-pointer m-2 lg:text-xl md:text-lg  sm:text-sm'>
              Grants
            </span>
          </div>
        </div>
        <div className='flex justify-center lg:m-10 sm:mx-0 w-full'>
          <hr className='w-2/3 text-slate-500' />
        </div>
        <div className='flex justify-between text-slate-50 lg:px-28 py-10 sm:p-5'>
          <span>© 2018 - 2022 Ozone Networks, Inc</span>
          <span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </span>
        </div>
      </div>
    </>
  );
}
