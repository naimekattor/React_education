import logo from "../assets/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaCross, FaPencil } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiCross } from "react-icons/bi";
const Navbar = () => {
  const [navbar, setNavBar] = useState(false);
  const [search, setSearch] = useState(false)

  return (
    <header className={`bg-white z-10 relative`}>
      <div className="container mx-auto">
        {/* navbar for desktop */}
        <nav className="flex justify-between lg:gap-4 items-center relative">
          <div>
            <Link to="/"><img className="w-[170px]" src={logo} alt="" /></Link>

          </div>
          <div className="lg:block hidden"><NavLinks /></div>
          <div className="md:block hidden" onClick={() => setSearch(true)}><IoSearchOutline className="text-[20px] cursor-pointer" /></div>
          <div className="xl:block hidden">
            <button className="gap-1 flex items-center p-4 bg-primary rounded-r-full rounded-t-full text-[14px] text-white font-secondary font-semibold hover:bg-[#116e63] hover:text-white transition-colors ease-in-out duration-300 relative">
              <span><FaPencil /></span>
              <span>APPLY NOW</span>
            </button>
          </div>
          <div className="lg:hidden block text-3xl py-4 cursor-pointer" onClick={() => setNavBar(!navbar)}>{
            navbar ? <RxCross2 /> : <FaBarsStaggered />}</div>

          {/* dnav menu for mobile*/}
          {
            navbar && <div className={`absolute top-16 left-0 bg-white flex items-center w-full  transition ease-in-out z-10 justify-center h-screen`}><NavLinks setNavBar={setNavBar} /></div>
          }
        </nav>
      </div>
      {
        search && <div className=" absolute top-0 w-full h-screen bg-gray-400/90 flex justify-center items-center flex-col gap-y-4">
          <div onClick={() => setSearch(false)} className="bg-white p-4 text-primary cursor-pointer rounded-md"><RxCross2 /></div>
          <div className=" relative flex items-center justify-center w-[500px]"><input type="text" className="h-[80px] w-[500px] focus:outline-none rounded-md" /><div className="absolute right-2 bg-secondary p-4 rounded-md"><FaSearch className="  text-4xl text-white cursor-pointer" /></div></div>
        </div>
      }
    </header>
  );
};

export default Navbar;