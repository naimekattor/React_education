import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';
import { FaArrowRightLong } from "react-icons/fa6";
import video from "../assets/images/latest .jpg"
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { ImCross } from "react-icons/im";
const LatestVideo = () => {
  const [showIframe, setShowIframe] = useState(false);
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex items-center gap-4 mt-[60px]'>
          <div className='flex1'>
            <SectionHeader about=" Latest Video" head="Let's Check Our" pHead=" Latest " lHead="Video" des="There are many variations of passages available but the majority have suffered alteration in some form by injected humour look even slightly believable." />
            <Button btnTxt="Learn More" icon={<FaArrowRightLong />} />
          </div>

          <div className='relative flex items-center justify-center w-[100%] h-[100%]'>
            <img className='rounded-t-[50px] rounded-r-[50px] ' src={video} alt="" />
            <span onClick={() => setShowIframe(prev => !prev)} className=' absolute top-0 flex items-center h-[100%] w-[100%]justify-center'><a href="https://www.youtube.com/embed/R4qzpJHnZvs?si=pRpUDfnTeDmvDRbT" target='iframe'>
              {showIframe ? <ImCross className='bg-primary text-4xl rounded-full size-16 text-white p-4 cursor-pointer hover:scale-[1.2]' /> : <SiGoogledisplayandvideo360 className='bg-primary text-4xl rounded-full size-16 text-white p-4 cursor-pointer hover:scale-[1.2]' />}

            </a>
              <div>
                {showIframe && <iframe className='md:w-[560px] md:h-[315px] w-[200px] h-[200px]' name='iframe' src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>}
              </div>


            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestVideo;