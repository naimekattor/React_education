import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { events } from '../Data';
const Events = () => {
  const [index, setIndex] = useState(0)
  const handleLeft = () => {
    setIndex(prev => {
      if (prev === 0) {
        return 1
      } else {
        return prev - 1
      }
    })
  }
  const handleRight = () => {
    setIndex(prev => {
      if (prev === events.length - 3) {
        return 0
      } else {
        return prev + 1
      }
    })
  }



  return (
    <section className='my-[60px]'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <SectionHeader about="Events" head="Our Upcoming" pHead=" Events" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 relative'>

          <div className='bg-white drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px] group'>
            <h3 className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-1 items-center'><IoLocationSharp className='text-xl text-primary' /> 25/B Milford Road, New York</h3>
            <img className='drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px] group-hover:scale-110' src={events[index].url} alt="" />
            <div className='flex justify-between gap-4'>
              <span className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-2 items-center'><FaCalendarAlt className='text-xl text-primary' />12/12/2024</span>
              <span className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-2 items-center'><MdAccessTime className='text-xl text-primary' />11:00 PM</span>
            </div>
            <h2 className='text-[20px] text-black font-bold font-secondary'>High School Program 2024</h2>
            <p className='text-secondary font-semibold text-[12px] font-secondary my-[16px] tracking-widest	 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reiciendis?</p>
            <Button btnTxt="Join Event" icon={<FaArrowRightLong />} />
          </div>


          <div className='bg-white drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px] group md:block hidden'>
            <h3 className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-1 items-center'><IoLocationSharp className='text-xl text-primary' /> 25/B Milford Road, New York</h3>
            <img className='drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px] group-hover:scale-110' src={events[index + 1].url} alt="" />
            <div className='flex justify-between gap-4'>
              <span className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-2 items-center'><FaCalendarAlt className='text-xl text-primary' />12/12/2024</span>
              <span className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-2 items-center'><MdAccessTime className='text-xl text-primary' />11:00 PM</span>
            </div>
            <h2 className='text-[20px] text-black font-bold font-secondary'>High School Program 2024</h2>
            <p className='text-secondary font-semibold text-[12px] font-secondary my-[16px] tracking-widest	 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reiciendis?</p>
            <Button btnTxt="Join Event" icon={<FaArrowRightLong />} />
          </div>

          <div className='bg-white drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px] group md:block hidden'>
            <h3 className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-1 items-center'><IoLocationSharp className='text-xl text-primary' /> 25/B Milford Road, New York</h3>
            <img className='drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px] group-hover:scale-110' src={events[index + 2].url} alt="" />
            <div className='flex justify-between gap-4'>
              <span className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-2 items-center'><FaCalendarAlt className='text-xl text-primary' />12/12/2024</span>
              <span className='text-[16px] font-secondary text-secondary mb-4 flex gap-x-2 items-center'><MdAccessTime className='text-xl text-primary' />11:00 PM</span>
            </div>
            <h2 className='text-[20px] text-black font-bold font-secondary'>High School Program 2024</h2>
            <p className='text-secondary font-semibold text-[12px] font-secondary my-[16px] tracking-widest	 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reiciendis?</p>
            <Button btnTxt="Join Event" icon={<FaArrowRightLong />} />
          </div>

          <button onClick={handleLeft} className=' absolute top-[50%] -left-8 p-4 bg-primary rounded-full'><FaArrowLeft className=' text-2xl ' /></button>
          <button onClick={handleRight} className=' absolute top-[50%] -right-8 p-4 bg-primary rounded-full'><FaArrowRight className=' text-2xl ' /></button>

        </div>
        <div className='flex items-center justify-center mt-[30px] gap-2'>
          <span onClick={() => setIndex(0)} className='cursor-pointer size-2 bg-primary rounded-full'></span>
          <span onClick={() => setIndex(1)} className='cursor-pointer size-2 bg-primary rounded-full'></span>
        </div>
      </div>
    </section>
  );
};

export default Events;