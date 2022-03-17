import Incident from '../assets/Incident';

export default function PastIncidents() {
  return (
    <div className='sm:mt-5 lg:mt-10'>
      <span className='lg:text-4xl lg:font-semi-bold sm:text-xl sm:font-semi-bold '>
        Past Incidents
      </span>
      <Incident date={'Mar 10,2022'} content={''} />
      <Incident date={'Mar 10,2022'} />
      <Incident />
      <Incident />
      <Incident />
    </div>
  );
}
