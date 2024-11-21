import { FaBook, FaHospitalUser, FaClockRotateLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { courseData } from "../Data";
import { FaStaylinked } from "react-icons/fa";
const Courses = () => {
  return (
    <section>
      <div className=' container mx-auto'>
        <div className='mt-[60px] text-center'>
          <h2 className=' lg:text-[35px] md:text-[30px] text-[25px] text-primary font-semibold font-primary tracking-widest  relative '><span className=' absolute bottom-0 bg-primary h-1 w-[150px] ' /> Our Courses</h2>
          <h1 className=' font-primary mb-[10px] lg:text-[72px] md:text-[60px] text-[50px] font-bold'>Let's Check Our <span className='text-primary'>Courses</span>  You More.</h1>
          <p className='text-secondary lg:text-[18px] md:text-[16px] text-[14px] font-secondary my-4'>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable. If you are going to use passage.</p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 place-items-center">
          {
            courseData.map((curElem) => (
              <div key={curElem.url} className=" drop-shadow-lg p-4 rounded-t-[50px] rounded-r-[50px] bg-white group">
                <div className=" relative flex items-center w-full justify-center">
                  <img className="w-full h-[224px] rounded-t-[50px] rounded-r-[50px] group-hover:origin-top-right cursor-pointer" src={curElem.url} alt="" />
                  <div className=" absolute w-full h-full rounded-t-[50px] rounded-r-[50px]  top-0 bg-none group-hover:bg-blue-300/50 cursor-pointer flex items-center justify-center" >
                    <span className="bg-white p-2 rounded-full text-primary text-2xl hidden group-hover:block hover:bg-primary hover:text-white"><FaStaylinked /></span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="mt-[18px] flex items-center gap-2">
                    <span className="text-[18px] text-primary"><FaBook /></span>
                    <h3 className=" text-secondary text-[18px] font-semibold">10 Lession</h3>
                  </div>
                  <div className="text-[18px] text-primary"><FaStar /></div>
                </div>
                <h2 className="text-[22px] mt-[18px] font-bold font-secondary text-black">{curElem.title}</h2>
                <p className="text-[16px] my-[18px] font-secondary text-black">There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.</p>
                <hr />
                <div className="flex justify-between mt-[20px]">
                  <div className="flex gap-2 items-center">
                    <span className="text-primary text-[16px]"><FaHospitalUser /></span>
                    <h3>75 Seats</h3>
                    <span className="text-primary text-[16px]"><FaClockRotateLeft /></span>
                    <h3>04 Years</h3>
                  </div>

                  <div className="text-white bg-primary p-2 rounded-t-[50px] rounded-r-[50px]">$750</div>
                </div>
              </div>
            ))
          }


        </div>
      </div>

    </section>
  );
};

export default Courses;