import Image from 'next/image';
import logo from '../../images/opensea.svg';
import textlogo from '../../images/logo.svg';
export default function statusNavbar() {
  return (
    <div
      className=' sm:flex mb-5
    lg:flex lg:flex-row  lg:shadow-lg 
    xl:w-full lg:font-poppinfont sm:h-20 sm:px-5'
    >
      <div className='flex flex-row items-center px-2 cursor-pointer '>
        <span className='w-11 h-11 '>
          <Image src={logo} alt='logo' className='w-10 h-10' />
        </span>
        <span className='w-28 mx-3 h-6 mt-1 '>
          <Image src={textlogo} alt='logo' />
        </span>
        <div className='h-1/2 m-5 border-l-2'></div>
        <span className='sm:text-xl  lg:text-3xl'>Status</span>
      </div>

      <div className='hidden lg:flex w-1/2 ml-auto items-center justify-around'>
        <div className='text-xl h-full flex justify-center items-center text-black border-solid border-b-4 border-blue-500'>
          <span> Status</span>
        </div>
        <div className='text-xl  text-slate-600'>
          <span>Subscribed to updates</span>
        </div>
        <div className='text-xl text-slate-600'>
          <span>Help center</span>
        </div>
        <div className='text-xl text-slate-600'>
          <span>Discord</span>
        </div>
      </div>
    </div>
  );
}
