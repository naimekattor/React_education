import React from 'react';
import SectionHeader from './SectionHeader';
import whychoose from "../assets/images/whychoose.jpg"
import shape from "../assets/images/shape/01.png"
import icon1 from "../assets/images/icon/course-material.svg"
import icon2 from "../assets/images/icon/money.svg"
import icon3 from "../assets/images/icon/online-course.svg"
import icon4 from "../assets/images/icon/teacher-2.svg"
const WhyChooseUs = () => {
  return (
    <section className='bg-[#042756]'>
      <div className='container mx-auto bg-cover bg-center' style={{ backgroundImage: `url(${shape})` }} >
        <div className='flex xl:flex-row flex-col py-[60px] gap-4'>
          <div className='flex-1'>
            <div className='text-white'>
              <SectionHeader about="Why Choose Us" head="We Are Expert &" pHead="Do Our Best" lHead="For Your Goal" des="It is a long established fact that a reader will be distracted by the readable content of a page when many desktop and web page editors looking at its layout." />
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div className='bg-white rounded-r-[50px] rounded-tl-[50px] flex items-center gap-4'>
                <img className='w-[65px] h-[65px] pr-4 bg-secondary rounded-r-[50px] rounded-tl-[50px]' src={icon1} alt="" />
                <div className=''>
                  <h2 className='text-[22px] text-black font-bold font-primary my-[14px]'>Expert Teachers</h2>
                  <p className='text-[16px] text-secondary font-semibold font-primary my-[14px]'>There are many variation of the suffered.</p>
                </div>
              </div>
              <div className='bg-white rounded-r-[50px] rounded-tl-[50px] flex items-center gap-4'>
                <img className='w-[65px] h-[65px] pr-4 bg-secondary rounded-r-[50px] rounded-tl-[50px]' src={icon2} alt="" />
                <div className=''>
                  <h2 className='text-[22px] text-black font-bold font-primary my-[14px]'>Courses Material</h2>
                  <p className='text-[16px] text-secondary font-semibold font-primary my-[14px]'>There are many variation of the suffered.</p>
                </div>
              </div>
              <div className='bg-white rounded-r-[50px] rounded-tl-[50px] flex items-center gap-4'>
                <img className='w-[65px] h-[65px] pr-4 bg-secondary rounded-r-[50px] rounded-tl-[50px]' src={icon3} alt="" />
                <div className=''>
                  <h2 className='text-[22px] text-black font-bold font-primary my-[14px]'>Online Courses</h2>
                  <p className='text-[16px] text-secondary font-semibold font-primary my-[14px]'>There are many variation of the suffered.</p>
                </div>
              </div>
              <div className='bg-white rounded-r-[50px] rounded-tl-[50px] flex items-center gap-4'>
                <img className='w-[65px] h-[65px] pr-4 bg-secondary rounded-r-[50px] rounded-tl-[50px]' src={icon4} alt="" />
                <div className=''>
                  <h2 className='text-[22px] text-black font-bold font-primary my-[14px]'>Affordable Price</h2>
                  <p className='text-[16px] text-secondary font-semibold font-primary my-[14px]'>There are many variation of the suffered.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className='w-[526px] h-[578px] rounded-l-[200px] rounded-b-[200px]' src={whychoose} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;