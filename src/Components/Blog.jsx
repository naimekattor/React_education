import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import bimg from "../assets/images/blog/01.jpg"
import { FaComment } from 'react-icons/fa6';
import { blogData } from '../Data';
const Blog = () => {
  return (
    <section className='pb-[60px]'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <SectionHeader about="Our Blog" head="Latest News &" pHead="Blog" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          {
            blogData.map((curElem) => (
              <div key={curElem.url} className='bg-white drop-shadow-md p-4 rounded-t-[50px] rounded-r-[50px]'>
                <img className='rounded-t-[50px] rounded-r-[50px] hover:scale-110' src={curElem.url} alt="" />
                <div className='flex gap-4 py-[14px]'>
                  <h2 className='text-black font-semibold text-[14px] flex gap-x-2 font-secondary'><FaUser className='text-primary' /> By Alicia David</h2>
                  <h2 className='text-black font-semibold text-[14px] flex gap-x-2 font-secondary'><FaComment className='text-primary' />03 Comments</h2>
                </div>
                <hr />
                <p className='text-[20px] tracking-widest font-secondary text-secondary my-[14px] font-semibold'>There are many variations passage have suffered available.</p>
                <Button btnTxt="Read More" icon={<FaArrowRight />} />
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Blog;