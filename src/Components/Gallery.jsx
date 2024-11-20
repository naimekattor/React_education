import React from 'react';
import SectionHeader from './SectionHeader';
import { gallery } from '../Data';
import { HiPlus } from "react-icons/hi";
const Gallery = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='text-center'>
          <SectionHeader about="Gallery" head="Our Photo" pHead=" Gallery" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 py-4'>
          {
            gallery.map((curElem) => (
              <div key={curElem.url} className='relative group'>
                <img className='w-[400px] h-[300px] rounded-r-[50px] rounded-t-[50px]  ' src={curElem.url} alt="" />
                <div className='absolute w-[90%] h-[90%] rounded-r-[50px] rounded-t-[50px] group-hover:bg-primary/80 inset-x-3 inset-y-3 duration-300 flex items-center justify-center'><HiPlus className='text-6xl text-white hidden group-hover:block cursor-pointer duration-300' /></div>
              </div>

            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;