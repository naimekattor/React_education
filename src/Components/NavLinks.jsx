import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/images/logo-light.png"
import { Link, NavLink } from "react-router-dom";
const NavLinks = ({ setNavBar }) => {
  const navList = [
    { name: "Courses", submenu: true, subLink: [{ name: "Course 01", url: "/courses" }, { name: "Course: 02", url: "/courses" }] },
    {
      name: "Academic", submenu_academics: true,
      subLink1: [{ name: "Art And Design" }, { name: "Acting And Drama" }, { name: "Accounting And Finance" }, { name: "Biology And Conservation" }, { name: "Science And Engineering" }],
      subLink2: [{ name: "Software Systems" }, { name: "Human Resource" }, { name: "Health Administration" }, { name: "Biochemistry" }, { name: " Computer Science" }],
      subLink3: [{ name: "Academics Department" }, { name: "Academic Department Single" }, { name: "Faculty Single" }, { name: "Biology And Conservation" }, { name: "Contact With Us" }]
    },
    { name: "Admission" },
    { name: "Blog", submenu: true, subLink: [{ name: "Blog 01", url: "/blog" }, { name: "Blog: 02", url: "/blog" }] },
    { name: "Contact" }
  ]


  return (
    <div>
      <ul className="flex lg:flex-row flex-col justify-between gap-8 z-20">
        {navList.map((list) =>
          <div key={list} className=" relative group">
            <li className="text-[17px] text-secondary font-secondary font-semibold mr-4 cursor-pointer hover:text-[#116e63] flex items-center relative py-8
             ">{list.name}<span><IoIosArrowDown /></span>
            </li>
            {
              list.submenu && (<div className="hidden group-hover:block hover:block absolute top-[90px] border-t-4 border-red-700 bg-secondary w-[200px] p-4 z-10">
                <ul className="   text-white ">
                  {list.subLink.map((sublist) =>
                    <NavLink onClick={() => setNavBar(false)} to={sublist.url} key={sublist.name}>
                      <li className="text-[14px] font-secondary font-semibold text-white mb-2 px-4 cursor-pointer duration-300 hover:text-primary border-b-2" >
                        {sublist.name}
                      </li>
                    </NavLink>

                  )}
                </ul>
              </div>)
            }
            {
              list.submenu_academics && (
                <div className="hidden group-hover:flex hover:flex  gap-x-4 justify-center items-start absolute top-[90px] left-[-100%] border-t-4 border-red-700 bg-secondary p-4 z-10">
                  <div className="flex lg:flex-row flex-col gap-4">
                    <div className="p-4 w-[300px] ">
                      <h2 className="text-[18px] font-secondary font-semibold text-primary mb-2 uppercase">About Us</h2>
                      <img className="w-[140px]" src={logo} alt="" />
                      <p className="text-[14px] text-white font-secondary mt-4">We are many variations of passages available but the majority have suffered alteration in some form by injected humour words injected humour believable.</p>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[18px] font-secondary font-semibold text-primary mb-4 uppercase">Undergraduate</h2>
                      <ul>
                        {
                          list.subLink1.map((links) => <li className="text-[14px] font-secondary font-semibold text-white mb-8 cursor-pointer duration-300 hover:text-primary border-b-2" key={links.name}>{links.name}</li>)
                        }
                      </ul>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[18px] font-secondary font-semibold text-primary mb-4 uppercase">Graduate Program</h2>
                      <ul>
                        {
                          list.subLink2.map((links) => <li className="text-[14px] font-secondary font-semibold text-white mb-8 cursor-pointer duration-300 hover:text-primary border-b-2" key={links.name}>{links.name}</li>)
                        }
                      </ul>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[18px] font-secondary font-semibold text-primary mb-4 uppercase">Resourses</h2>
                      <ul>
                        {
                          list.subLink3.map((links) => <li className="text-[14px] font-secondary font-semibold text-white mb-8 cursor-pointer duration-300 hover:text-primary border-b-2" key={links.name}>{links.name}</li>)
                        }
                      </ul>
                    </div>
                  </div>


                </div>
              )
            }

          </div>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;