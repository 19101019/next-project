import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/assets/Nav';
import Hero from '../components/LandingPage.js/Hero';
import styles from '../styles/Home.module.css';
import NotableDrops from '../components/LandingPage.js/NotableDrops';
import TopCollections from '../components/LandingPage.js/TopCollections';
import CreateAndSell from '../components/LandingPage.js/CreateAndSell';
import BrowseByCategory from '../components/LandingPage.js/BrowseByCategory';
import Footer from '../components/LandingPage.js/Footer';

export default function Home() {
  return (
    <div className='sm:w-full sm:overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Hero />
      <NotableDrops />

      <TopCollections />
      <div className='flex justify-center items-center m-10'>
        <button
          className={
            'lg:bg-blue-500 lg:w-64 lg:text-lg  sm:bg-blue-500 sm:w-3/5 sm:text-sm sm:h-14 sm:border sm:border-blue-700 sm:font-bold sm:px-5 sm:rounded-xl  sm:text-white  sm:cursor-pointer sm:text-center lg:px-14  '
          }
        >
          Go to Rankings
        </button>
      </div>
      <div className='text-center lg:text-3xl lg:m-20 lg:p-10 subpixel-antialiased'>
        Trending in{' '}
        <strong className='lg:text-3xl text-blue-500'>
          all categories<i className='fa-solid fa-angle-down'></i>
        </strong>
      </div>
      <CreateAndSell />
      <BrowseByCategory />
      <Footer />
    </div>
  );
}
