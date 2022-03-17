import StatusNavbar from '../components/statusPage.js/StatusNavbar';
import Image from 'next/image';
import os from '../images/statusPage/OS-System-Status.png';
import Operational from '../components/statusPage.js/Operational';
import PastIncidents from '../components/statusPage.js/PastIncidents';
import Footer from '../components/LandingPage.js/Footer';
export default function Status() {
  return (
    <>
      <div>
        <StatusNavbar />
        <Image src={os} alt='' objectFit='cover' layout='responsive' />
        <div className='sm:px-5 lg:px-60'>
          <div className='flex bg-green-500 flex items-center sm:px- px-10  sm:h-10 lg:h-20 lg:rounded-lg sm:rounded-sm'>
            <span className='text-white lg:text-2xl sm:text-lg '>
              All Systems Operational
            </span>
          </div>
          <div className='mt-10'>
            <Operational variable='API' status='Operational' />
            <Operational variable='Alchemy API' status='Operational' />
            <Operational variable='Website' status='Operational' />
            <Operational variable='Mobile Application' status='Operational' />
            <Operational variable='Support Services ' status='Operational' />
            <Operational variable='Emails' status='Operational' />
            <Operational variable=' Developer Testnets' status='Operational' />
          </div>
          <PastIncidents />
          <div className='flex justify-between'></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
