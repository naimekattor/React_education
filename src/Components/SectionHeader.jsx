import React from 'react';

const SectionHeader = ({ about, head, pHead, lHead, des }) => {
  return (
    <div>
      <div className='mt-[60px]'>
        <h2 className=' lg:text-[35px] md:text-[30px] text-[25px] text-primary font-semibold font-primary tracking-widest  relative '><span className=' absolute bottom-0 bg-primary h-1 md:w-[100px] w-[150px]' /> {about}</h2>
        <h1 className=' font-primary mb-[10px] lg:text-[72px] md:text-[60px] text-[50px] font-bold'>{head}<span className='text-primary'>{pHead}</span>  {lHead}</h1>
        <p className=' lg:text-[18px] md:text-[16px] text-[14px] font-secondary my-4'>{des}</p>
      </div>
    </div>
  );
};

export default SectionHeader;