import logo from "../assets/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavBar] = useState(false);


  return (
    <header className={`bg-white z-10`}>
      <div className="container mx-auto">
        {/* navbar for desktop */}
        <nav className="flex justify-between items-center relative">
          <div>
            <Link to="/"><img className="w-[170px]" src={logo} alt="" /></Link>

          </div>
          <div className="lg:block hidden"><NavLinks /></div>
          <div className="md:block hidden"><IoSearchOutline className="text-[20px] cursor-pointer" /></div>
          <div className="md:block hidden">
            <button className="gap-1 flex items-center p-4 bg-primary rounded-r-full rounded-t-full text-[14px] text-white font-secondary font-semibold hover:bg-[#116e63] hover:text-white transition-colors ease-in-out duration-300 relative">
              <span><FaPencil /></span>
              <span>APPLY NOW</span>
            </button>
          </div>
          <div className="lg:hidden block text-3xl py-4" onClick={() => setNavBar(!navbar)}>{
            navbar ? <RxCross2 /> : <FaBarsStaggered />}</div>

          {/* dnav menu for mobile*/}
          {
            navbar && <div className={`absolute top-16 left-0 bg-white flex items-center w-full  transition ease-in-out z-10 justify-center h-screen`}><NavLinks setNavBar={setNavBar} /></div>
          }
        </nav>


      </div>

    </header>
  );
};

export default Navbar;