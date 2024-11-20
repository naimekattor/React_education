import React from 'react';
import Button from './Button';
import SectionHeader from './SectionHeader';
import bg from "../assets/images/event/02.jpg"
import { FaArrowRight } from 'react-icons/fa6';
const EnrollMent = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center'>
      <div className='bg-[#253d62]/80 pb-[30px]'>
        <div className='flex md:flex-row flex-col container mx-auto gap-4'>
          <div className='flex-1 text-white bg-white rounded-t-[50px] rounded-r-[50px] my-[60px]'>
            <div className='bg-primary p-4 rounded-t-[50px] rounded-r-[50px]'>
              <h1 className='text-[28px] font-bold font-secondary'>Start Your Enrollment</h1>
              <h3 className='text-[16px] font-semibold '>We are variations of passages the have suffered.</h3>
            </div>
            <form className='p-4 ' action="">
              <input className='w-full mb-3 h-[50px] rounded focus:outline-none text-black bg-[#f2f3f5]' placeholder='Enter Your Name' type="text" name="" id="" />
              <input className='w-full mb-3 h-[50px] rounded focus:outline-none text-black bg-[#f2f3f5]' placeholder='Enter Your Email' type="email" />
              <select className='w-full mb-3 h-[50px] rounded focus:outline-none text-black/80 bg-[#f2f3f5]' placeholder='Enter Your Name' type="text" >
                <option value="Choose Course" selected>Choose Course</option>
                <option value="Art & Design">Art & Design</option>
                <option value="Biology & Conservation">Biology & Conservation</option>
                <option value="Political Science">Political Science</option>
              </select>
              <textarea className='w-full mb-3 h-[100px] rounded focus:outline-none text-black bg-[#f2f3f5]' placeholder='Type Messege' name="" id=""></textarea>
              <Button btnTxt="Enroll Now" />
            </form>
          </div>
          <div className='flex-1 text-white'>
            <div >
              <SectionHeader about="Our Skills" head="Explore Your" pHead=" Creativity And Talent" lHead="With Us" />
            </div>
            <p className='text-[16px] font-semibold font-secondary my-[14px] tracking-widest'>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable. If you are going to use passage you need sure there anything embarrassing first true generator on the Internet.</p>
            <div className='flex justify-between text-[16px] font-semibold font-secondary tracking-widest my-[10px]'>
              <h2>Our Students</h2>
              <span>85%</span>
            </div>

            <div className='bg-white h-2 w-full rounded-full'><div className='bg-primary h-2 w-[85%] rounded-full' /></div>
            <div className='flex justify-between text-[16px] font-semibold font-secondary tracking-widest my-[10px]'>
              <h2>Our Teachers</h2>
              <span>55%</span>
            </div>

            <div className='bg-white h-2 w-full rounded-full'><div className='bg-primary h-2 w-[55%] rounded-full' /></div>
            <div className='flex justify-between text-[16px] font-semibold font-secondary tracking-widest my-[10px]'>
              <h2>Our Courses </h2>
              <span>65%</span>
            </div>

            <div className='bg-white h-2 w-full rounded-full mb-[20px]'><div className='bg-primary h-2 w-[65%] rounded-full' /></div>
            <Button btnTxt="Learn More" icon={<FaArrowRight />} />
          </div>

        </div>
      </div>

    </section>
  );
};

export default EnrollMent;