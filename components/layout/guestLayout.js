import { Fragment } from 'react';

function GuestLayout(props) {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center dark:bg-gradient-to-r dark:from-[#22262E] dark:to-[#1a1d23]'>
      <main className='main-guest flex-grow flex items-center'>{props.children}</main>
    </div>
  );
}

export default GuestLayout;