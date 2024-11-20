import SectionHeader from './SectionHeader';
import { FiShare2 } from "react-icons/fi";
import { teacher } from '../Data';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const Teachers = () => {
  return (
    <section className='mb-[60px]'>
      <div className=' container mx-auto'>
        <div className="text-center mb-[40px]">
          <SectionHeader about="Our Teachers" head="Meet With Our" pHead="Teachers" des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
          {
            teacher.map((curElem) => (
              <div key={curElem.url} className='rounded-t-[50px] rounded-r-[50px] drop-shadow-lg bg-primary relative group hover:-translate-y-6 duration-300'>
                <img className='w-[246px] h-[302px] rounded-t-[50px] rounded-r-[50px] drop-shadow-lg' src={curElem.url} alt="" />
                <div className='absolute top-4 right-2 translate-x-full group-hover:translate-x-0 hidden group-hover:flex flex-col gap-4 cursor-pointer duration-500'>
                  <FaFacebookF className=' text-white rotate-12 text-3xl bg-secondary rounded-t-[50px] rounded-r-[50px] hover:bg-white hover:text-primary' />
                  <FaXTwitter className=' text-white rotate-12 text-3xl bg-secondary rounded-t-[50px] rounded-r-[50px] hover:bg-white hover:text-primary' />
                  <FaInstagram className=' text-white rotate-12 text-3xl bg-secondary rounded-t-[50px] rounded-r-[50px] hover:bg-white hover:text-primary' />
                  <FaLinkedinIn className=' text-white rotate-12 text-3xl bg-secondary rounded-t-[50px] rounded-r-[50px] hover:bg-white hover:text-primary' />
                </div>
                <div className='flex justify-between items-center'>
                  <div className='p-2'>
                    <h2 className='text-[22px] text-white tracking-widest	font-bold font-primary my-[14px]'>Dennis A. Pruitt</h2>
                    <h4 className='text-[16px] tracking-widest	font-bold font-primary text-secondary my-[14px]'>Associate Professor</h4>
                  </div>
                  <span ><FiShare2 className='text-5xl p-2 bg-secondary text-white rounded-full group-hover:bg-white group-hover:text-primary' /></span>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Teachers;