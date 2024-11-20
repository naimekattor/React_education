import SectionHeader from './SectionHeader';
import tesimg1 from "../assets/images/testimonials/01.jpg"
import tesimg2 from "../assets/images/testimonials/02.jpg"
import tesimg3 from "../assets/images/testimonials/03.jpg"
import tesimg4 from "../assets/images/testimonials/04.jpg"
import { FaStar } from 'react-icons/fa';
import bg from "../assets/images/testimonials/bg.jpg"
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className='bg-cover '>
      <div className='bg-[#27466e]/90 py-[30px]'>
        <div className='container mx-auto'>
          <div className=' text-center pb-[30px] text-white'>
            <SectionHeader about="Testimonials" head="What Our Students" pHead="Say's" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
          </div>


          {/* slider for testimonials */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><div className='bg-white drop-shadow-md rounded-t-[50px] rounded-r-[50px] p-6'>
              <div className='text-primary text-xl flex gap-2 mb-[14px]'>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
              </div>

              <p className='text-[16px] font-secondary text-secondary tracking-widest'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatibus voluptatem dolore tempore corporis voluptas.</p>
              <div className='flex gap-4'>
                <img className=' rounded-full w-[63px] h-[63px] outline-dashed outline-[#fda335]' src={tesimg1} alt="" />
                <div>
                  <h1 className='text-[18px] text-black font-bold font-secondary'>naihal</h1>
                  <h4 className='text-[16px] text-primary font-semibold font-secondary'>Student</h4>
                </div>
              </div>
            </div></SwiperSlide>
            <SwiperSlide>
              <div className='bg-white drop-shadow-md rounded-t-[50px] rounded-r-[50px] p-6'>
                <div className='text-primary text-xl flex gap-2 mb-[14px]'>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>

                <p className='text-[16px] font-secondary text-secondary tracking-widest'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatibus voluptatem dolore tempore corporis voluptas.</p>
                <div className='flex gap-4'>
                  <img className=' rounded-full w-[63px] h-[63px] outline-dashed outline-[#fda335]' src={tesimg2} alt="" />
                  <div>
                    <h1 className='text-[18px] text-black font-bold font-secondary'>naihal</h1>
                    <h4 className='text-[16px] text-primary font-semibold font-secondary'>Student</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-white drop-shadow-md rounded-t-[50px] rounded-r-[50px] p-6'>
                <div className='text-primary text-xl flex gap-2 mb-[14px]'>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>

                <p className='text-[16px] font-secondary text-secondary tracking-widest'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatibus voluptatem dolore tempore corporis voluptas.</p>
                <div className='flex gap-4'>
                  <img className=' rounded-full w-[63px] h-[63px] outline-dashed outline-[#fda335]' src={tesimg3} alt="" />
                  <div>
                    <h1 className='text-[18px] text-black font-bold font-secondary'>naihal</h1>
                    <h4 className='text-[16px] text-primary font-semibold font-secondary'>Student</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-white drop-shadow-md rounded-t-[50px] rounded-r-[50px] p-6'>
                <div className='text-primary text-xl flex gap-2 mb-[14px]'>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>

                <p className='text-[16px] font-secondary text-secondary tracking-widest'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatibus voluptatem dolore tempore corporis voluptas.</p>
                <div className='flex gap-4'>
                  <img className=' rounded-full w-[63px] h-[63px] outline-dashed outline-[#fda335]' src={tesimg4} alt="" />
                  <div>
                    <h1 className='text-[18px] text-black font-bold font-secondary'>naihal</h1>
                    <h4 className='text-[16px] text-primary font-semibold font-secondary'>Student</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;