import React, { useEffect, useState } from 'react';
import counter1 from "../assets/images/counter1.svg"
import counter2 from "../assets/images/counter2.svg"
import counter3 from "../assets/images/counter3.svg"
import counter4 from "../assets/images/counter4.svg"
import bgImg from "../assets/images/counter/bg.jpg"
import CountUp from 'react-countup';
const CounterArea = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImg})`, }} className=' bg-cover bg-center relative'>
      <div className='bg-[#4f918a]/50 w-full h-full'>
        <div className='grid md:grid-cols-4 grid-cols-1  h-full py-8 container place-items-center'>
          <div className='group mb-4'>
            <img className=' bg-secondary p-4 size-[100px] rounded-r-[50px] rounded-t-[50px] border-white group-hover:border-4' src={counter1} alt="" />
            <span className='text-[50px] font-bold font-secondary text-white my-[20px]'>
              <CountUp start={0} end={30} delay={0} duration={5.75} />+</span>
            <h4 className='text-[20px] font-bold font-secondary text-white '>Total Cources</h4>
          </div>
          <div className='group mb-4'>
            <img className=' bg-secondary p-4 size-[100px] rounded-r-[50px] rounded-t-[50px] border-white group-hover:border-4' src={counter2} alt="" />
            <span className='text-[50px] font-bold font-secondary text-white my-[20px]'>
              <CountUp start={0} end={2000} delay={0} duration={5.75} />+</span>
            <h4 className='text-[20px] font-bold font-secondary text-white '>Our Students</h4>
          </div>
          <div className='group mb-4'>
            <img className=' bg-secondary p-4 size-[100px] rounded-r-[50px] rounded-t-[50px] border-white group-hover:border-4' src={counter3} alt="" />
            <span className='text-[50px] font-bold font-secondary text-white my-[20px]'><CountUp start={0} end={20} delay={0} duration={5.75} />+</span>
            <h4 className='text-[20px] font-bold font-secondary text-white '>Skilled Lecturers</h4>
          </div>
          <div className='group mb-4'>
            <img className=' bg-secondary p-4 size-[100px] rounded-r-[50px] rounded-t-[50px] border-white group-hover:border-4' src={counter4} alt="" />
            <span className='text-[50px] font-bold font-secondary text-white my-[20px]'><CountUp start={0} end={30} delay={0} duration={5.75} />+</span>
            <h4 className='text-[20px] font-bold font-secondary text-white '>+ Win Awards</h4>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CounterArea;