export default function Operational({ variable, status }) {
  return (
    <div className='flex justify-between p-5 sm:text-md m-1 lg:text-xl border'>
      {<span>{variable}</span>}
      <span className='text-green-400'>{status} </span>
    </div>
  );
}
