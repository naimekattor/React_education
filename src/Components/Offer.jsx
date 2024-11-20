import React from 'react';
import Button from './Button';
import { FaArrowRightLong } from "react-icons/fa6";
import bg from "../assets/images/offer/offer.jpg"
const Offer = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className=' bg-cover bg-left my-[60px]'>
      <div className=' container mx-auto flex justify-between items-center'>
        <div className=' flex-1'></div>
        <div className=' flex-1 text-white bg-secondary p-8 rounded-t-[80px] rounded-r-[80px] border-4 '>
          <h1 className='text-[35px] font-secondary font-bold '>Our 20% Offer Running - Join Today For Your Course</h1>
          <h4 className='text-[16px] font-secondary font-semibold my-[20px]'>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable.</h4>
          <Button btnTxt="Apply Now" icon={<FaArrowRightLong />} />
        </div>
      </div>
    </section>
  );
};

export default Offer;