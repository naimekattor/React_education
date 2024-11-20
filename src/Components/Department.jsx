import SectionHeader from './SectionHeader';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';
import icon1 from "../assets/images/icon/monitor.svg"
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/free-mode";


// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
const Department = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

  };
  return (
    <section className='pb-[60px]'>
      <div className='container mx-auto'>
        <div className='text-center mb-[30px]'>
          <SectionHeader about="Department" head="Browse Our" pHead=" Department" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=' drop-shadow-lg bg-white rounded-t-[50px] rounded-r-[50px] p-4'>
              <img className='w-[60px] h-[60px]' src={icon1} alt="" />
              <h1 className='text-[22px] text-black font-bold font-primary mt-[10px]'>Health And Medicine</h1>
              <p className='text-[16px] text-secondary my-[14px] font-sem font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ab.</p>
              <Button btnTxt="Read More" icon={<FaArrowRight />} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' drop-shadow-md bg-white rounded-t-[50px] rounded-r-[50px] p-4'>
              <img className='w-[60px] h-[60px]' src={icon1} alt="" />
              <h1 className='text-[22px] text-black font-bold font-primary mt-[10px]'>Health And Medicine</h1>
              <p className='text-[16px] text-secondary my-[14px] font-sem font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ab.</p>
              <Button btnTxt="Read More" icon={<FaArrowRight />} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' drop-shadow-md bg-white rounded-t-[50px] rounded-r-[50px] p-4'>
              <img className='w-[60px] h-[60px]' src={icon1} alt="" />
              <h1 className='text-[22px] text-black font-bold font-primary mt-[10px]'>Health And Medicine</h1>
              <p className='text-[16px] text-secondary my-[14px] font-sem font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ab.</p>
              <Button btnTxt="Read More" icon={<FaArrowRight />} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' drop-shadow-md bg-white rounded-t-[50px] rounded-r-[50px] p-4'>
              <img className='w-[60px] h-[60px]' src={icon1} alt="" />
              <h1 className='text-[22px] text-black font-bold font-primary mt-[10px]'>Health And Medicine</h1>
              <p className='text-[16px] text-secondary my-[14px] font-sem font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ab.</p>
              <Button btnTxt="Read More" icon={<FaArrowRight />} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Department;