import SectionHeader from './SectionHeader';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';
import icon1 from "../assets/images/icon/monitor.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, } from 'swiper/modules';
const Department = () => {


  return (
    <section className='pb-[60px]'>
      <div className='container mx-auto'>
        <div className='text-center mb-[30px]'>
          <SectionHeader about="Department" head="Browse Our" pHead=" Department" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}

          modules={[Pagination]}
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
          <SwiperSlide >
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