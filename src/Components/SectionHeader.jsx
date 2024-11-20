import React from 'react';

const SectionHeader = ({ about, head, pHead, lHead, des }) => {
  return (
    <div>
      <div className='mt-[60px]'>
        <h2 className=' text-[28px] text-primary font-semibold font-primary tracking-widest  relative '><span className=' absolute bottom-0 bg-primary h-1 md:w-[100px] w-[150px]' /> {about}</h2>
        <h1 className=' font-primary mb-[10px] text-[58px] font-bold'>{head}<span className='text-primary'>{pHead}</span>  {lHead}</h1>
        <p className=' text-[16px] font-secondary my-4'>{des}</p>
      </div>
    </div>
  );
};

export default SectionHeader;