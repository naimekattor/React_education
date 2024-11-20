import { footerData } from "../Data";
import Button from "./Button";
import { FaArrowRightLong, FaFacebook, FaInstagram, FaLinkedin, FaMap, FaPhone, FaVoicemail, FaYoutube } from "react-icons/fa6";
import bg from "../assets/images/shape/03.png"
import logo from "../assets/images/logo.png"
import { FaMailBulk } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
const Footer = () => {
  console.log(footerData[0].QuickLinks);

  return (
    <section style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center ">
      <div className="bg-[#042756]/95">
        <div className="container mx-auto py-[60px]">
          <div className="flex md:flex-row flex-col gap-4  text-white tracking-wider">
            <div className="flex-1">
              <img className="w-[220px] h-[53px]" src={logo} alt="" />
              <p className="text-[16px] font-secondary font-semibold my-[18px]">We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p>
              <h2 className="flex gap-x-2 text-[16px] font-secondary font-semibold my-[14px] items-center"><FaPhone className="text-primary" />+2 123 654 7898</h2>
              <h2 className="flex gap-x-2 text-[16px] font-secondary font-semibold my-[14px] items-center"><BiMap className="text-primary" /> 25/B Milford Road, New York</h2>
              <h2 className="flex gap-x-2 text-[16px] font-secondary font-semibold my-[14px] items-center"><MdEmail className="text-primary" /> info@example.com</h2>
            </div>
            <div className="flex-1">
              <h2 className="text-[20px] font-bold font-primary mb-[30px] before:content before:absolute before:w-[100px] before:h-1 before:bg-[#fda345] before:-bottom-2 relative">Quick Links</h2>
              <ul>
                {
                  footerData[0].QuickLinks.map((curElem) => (
                    <li className="text-[16px] font-secondary font-semibold my-[18px] cursor-pointer hover:text-primary hover:translate-x-4 flex gap-x-1 items-center" key={curElem}><IoMdArrowDropright className="text-primary text-xl" />{curElem}</li>
                  ))
                }
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-[20px] font-bold font-primary mb-[30px] before:content before:absolute before:w-[100px] before:h-1 before:bg-[#fda345] before:-bottom-2 relative">Quick Links</h2>
              <ul>
                {
                  footerData[0].Campus.map((curElem) => (
                    <li className="text-[16px] font-secondary font-semibold my-[18px] cursor-pointer hover:text-primary hover:translate-x-4 flex gap-x-1 items-center" key={curElem}><IoMdArrowDropright className="text-primary text-xl" /> {curElem}</li>
                  ))
                }
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-[20px] font-bold font-primary mb-[30px] before:content before:absolute before:w-[100px] before:h-1 before:bg-[#fda345] before:-bottom-2 relative">Newsletter</h2>
              <p className="text-[16px] font-secondary font-semibold my-[20px]">Subscribe Our Newsletter To Get Latest Update And News</p>
              <input className="w-full h-[50px] rounded text-black focus:outline-none mb-[30px]" type="email" name="" placeholder="Enter your Email" id="" />
              <Button btnTxt="Subscribe Now" icon={<FaArrowRightLong />} />
            </div>
          </div>
          <hr />
          <div className="flex justify-between mt-[30px] text-white">
            <h2 className="text-[14px] font-secondary tracking-wide flex-1">© Copyright 2024 Eduka All Rights Reserved.</h2>
            <div className="flex gap-x-2 text-primary text-[26px] cursor-pointer flex-1">
              <div className="bg-white p-4 rounded-t-[50px] rounded-r-[50px] hover:bg-secondary">
                <FaFacebook />
              </div>
              <div className="bg-white p-4 rounded-t-[50px] rounded-r-[50px] hover:bg-secondary">
                <FaInstagram />
              </div>
              <div className="bg-white p-4 rounded-t-[50px] rounded-r-[50px] hover:bg-secondary">
                <FaLinkedin />
              </div>
              <div className="bg-white p-4 rounded-t-[50px] rounded-r-[50px] hover:bg-secondary">
                <FaYoutube />
              </div>

            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Footer;
