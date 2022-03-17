export default function Incident({ date, content }) {
  return (
    <div className='lg:mt-10 sm:mt-5'>
      <span className='lg:text-2xl sm:text-lg '>Mar 10, 2022</span>
      <hr />
      <div className='lg:mt-5 sm:mt-2'>
        <span className='text-gray-500 sm:text-md lg:text-xl '>
          {/* {content ? content : 'No incidents reported today.'} */}
          <span className='text-2xl text-red-300'>Site Outage</span>
          <div>
            <div className='sm:mt-2 lg:mt-5'>
              <span className='lg:text-2xl sm:text-xl text-bold text-black '>
                Resolved
              </span>
              <span className='lg:text-xl sm:text-md text-slate-600'>
                - This incident has been resolved.
              </span>
            </div>
            <div>
              <span className='text-lg'>Mar 9, 13:21 UTC</span>
            </div>
          </div>
          <div>
            <div className='sm:mt-2 lg:mt-5'>
              <span className='lg:text-2xl sm:text-xl text-bold text-black '>
                Monitoring
              </span>
              <span className='lg:text-xl sm:text-md text-slate-600'>
                - A fix has been implemented and we are monitoring the results.
              </span>
            </div>
            <div>
              <span className='text-lg'>Mar 9, 11:57 UTC</span>
            </div>
          </div>
          <div>
            <div className='sm:mt-2 lg:mt-5'>
              <span className='lg:text-2xl sm:text-xl text-bold text-black '>
                Identified
              </span>
              <span className='lg:text-xl sm:text-md text-slate-600'>
                - The issue has been identified and a fix is being implemented.
              </span>
            </div>
            <div>
              <span className='text-lg'>Mar 9, 13:21 UTC</span>
            </div>
          </div>
          <div>
            <div className='sm:mt-2 lg:mt-5'>
              <span className='lg:text-2xl sm:text-xl text-bold text-black '>
                Update
              </span>
              <span className='lg:text-xl sm:text-md text-slate-600'>
                - We are continuing to investigate this issue.
              </span>
            </div>
            <div>
              <span className='text-lg'>Mar 9, 13:21 UTC</span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
