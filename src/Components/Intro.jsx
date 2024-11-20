import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { feature, imgData } from "../Data";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
const Intro = () => {
  const [imgIndx, setImgIndx] = useState(0)
  /* handle slider left btn */
  const handleLeft = () => {
    setImgIndx(
      (prevIndex) => {
        if (prevIndex == 0) {
          return 1;
        }
        return prevIndex - 1;
      }
    )
  }
  /* handle slider left btn */
  const handleRight = () => {
    setImgIndx(
      (prevIndex) => {
        if (prevIndex === imgData.length - 2) {
          return 0;
        }
        return prevIndex + 1;
      }
    )
  }
  /* handle auto slider  */
  useEffect(() => {
    setInterval(handleRight, 2000);

  }, [])
  return (
    <section className="relative">
      <div className="  w-[100%] h-screen bg-cover" style={{ backgroundImage: `url(${imgData[imgIndx].url})` }}>
        <div className="flex relative items-center h-full bg-[#394761]/80">
          <button onClick={handleLeft} className="absolute p-4 bg-white/50 rounded-full md:left-8   hidden md:block"><FaArrowLeft /></button>
          <button onClick={handleRight} className="absolute p-4 bg-white/50 rounded-full md:right-8  hidden md:block right-2"><FaArrowRight /></button>
          <div className=" absolute container  lg:mx-[183px]  ">
            <h2 className=" lg:text-[35px] md:text-[30px] text-[25px] font-primary text-primary font-semibold">Welcome To Eduka!</h2>
            <h1 className="lg:text-[72px] md:text-[60px] text-[50px] font-primary text-white font-semibold my-[20px]">Start Your Beautiful And <br /> <span className=" text-primary"> Bright </span>Future</h1>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] font-primary text-white font-semibold mb-[20px] w-1/2">
              There are many variations of passages orem psum available but the majority have
              suffered alteration in some repeat predefined chunks form
              injected humour.
            </p>
            <div className="flex gap-4"><button className="gap-1 flex items-center p-4 bg-primary rounded-r-full rounded-t-full text-[14px] text-white font-secondary font-semibold hover:bg-[#116e63] hover:text-white transition-colors ease-in-out duration-300 relative">
              <span><FaPencil /></span>
              <span>About More</span>
            </button>
              <button className="gap-1 flex items-center p-4 bg-white rounded-r-full rounded-t-full text-[14px] text-secondary font-secondary font-semibold hover:bg-[#116e63] hover:text-white transition-colors ease-in-out duration-300 relative">
                <span><FaPencil /></span>
                <span>Learn more</span>
              </button></div>

          </div>
        </div>


      </div>
      <div className="md:grid xl:grid-cols-4 md:grid-cols-2 hidden items-center justify-center gap-8 absolute md:bottom-[-130px] bottom-[-100px] left-[220px] md:left-0">
        {
          feature.map((CurElem) => (
            <div className="bg-white drop-shadow-md w-[400px] rounded-t-[50px] rounded-r-[50px] p-4 hover:-translate-y-4 duration-300" key={CurElem.title}>
              <div className="flex justify-between"><span><img className="w-[60px] h-[60px] p-4 bg-primary rounded-full mb-[25px] cursor-pointer hover:rotate-[360deg] duration-300" src={CurElem.icon} alt="" /></span><span><img className="w-[60px] h-[60px] cursor-pointer hover:rotate-[360deg] duration-300" src={CurElem.numIcon} alt="" /></span></div>
              <h2 className=" text-black font-primary text-[28px] font-semibold mb-[20px]">{CurElem.title}</h2>
              <p className=" text-black text-[16px] font-secondary">{CurElem.description}</p>
            </div>
          ))
        }
      </div>

    </section>

  );
};

export default Intro;
