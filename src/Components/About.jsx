import img1 from '../assets/images/about/about1.jpg'
import img2 from '../assets/images/about/about2.jpg'
import img3 from '../assets/images/about/about3.jpg'
import icon1 from '../assets/images/download.svg'
import icon2 from '../assets/images/download (1).svg'
import icon3 from '../assets/images/download (2).svg'
import { SiComma } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa";
import Button from './Button'
const About = () => {
  return (
    <section>
      <div className='flex xl:flex-row flex-col gap-x-4 mt-[200px] container mx-auto'>
        <div className='flex gap-4 flex-1'>
          <div className='flex flex-col gap-4'>
            <img className=' rounded-t-[50px] rounded-l-[50px] h-[266px] w-[100%]' src={img1} alt="" />
            <div className='flex gap-4 p-4 bg-primary rounded-t-[50px] rounded-r-[50px]'><span className=''><img className='p-2 w-[150px] h-[65px]  bg-white  rounded-full' src={icon1} alt="" /></span><span className=' text-[18px] text-white font-secondary font-semibold'>30 Years Of
              Quality Service</span></div>
          </div>
          <div className='flex flex-col gap-4'><img className=' rounded-full ' src={img2} alt="" />
            <img className='rounded-t-[50px] rounded-r-[50px] h-[266px]' src={img3} alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h2 className=' text-[28px] text-primary font-semibold font-primary tracking-widest border-b-4 border-[#fda345] md:w-[100px] w-[150px]'>About Us</h2>
          <h1 className=' font-primary mb-[10px] text-[58px] font-bold'>Our Education System <br /><span className='text-primary'>Inspires</span>  You More.</h1>
          <p className='text-secondary text-[16px] font-secondary my-4'>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable. If you are going to use passage.</p>
          <div className='flex md:flex-row flex-col gap-4'>
            <div className='flex flex-col'>
              <div className='flex gap-4 justify-start'>
                <div className=''><img className='p-2 w-[150px] h-[65px]  bg-secondary  rounded-full ' src={icon2} alt="" /></div>
                <div>
                  <h2 className='text-[22px] font-semibold font-secondary text-black'>Education Services</h2>
                  <p className=' text-[16px] text-secondary font-secondary my-4'>It is a long established fact that reader will to using content.</p>
                </div>
              </div>
              <div className='flex  flex-row gap-4 justify-start'>
                <div className=''><img className='p-2 w-[150px] h-[65px]  bg-secondary  rounded-full ' src={icon3} alt="" /></div>
                <div>
                  <h2 className='text-[22px] font-semibold font-secondary text-black'>Education Services</h2>
                  <p className=' text-[16px] text-secondary font-secondary my-4'>It is a long established fact that reader will to using content.</p>
                </div>
              </div>

            </div>
            <div className=''>
              <p className=' text-[16px] font-secondary text-secondary p-8 bg-[#e9f2f1] w-1/2 rounded-[50px] text-center relative'>It is a long established fact that a reader will be distracted by the content of a page when looking at its reader for the long words layout.
                <span className=' absolute bottom-0 right-0 text-4xl text-primary'><SiComma /></span>
                <span className=' absolute bottom-0 right-6 text-4xl text-primary'><SiComma /></span>
              </p>
            </div>
          </div>
          <hr />
          <div className='my-[30px] flex gap-4'>
            <Button btnTxt="Discover More" />
            <div className='flex items-start justify-start gap-4'>
              <div className='text-3xl bg-secondary p-4 rounded-full text-white'><FaHeadphones /></div>
              <div className='flex flex-col  items-center'>
                <h2 className='text-primary font-secondary font-semibold text-[20px]'>Call Now <br /><span className='text-[#116e63]'>+8801518920316</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;