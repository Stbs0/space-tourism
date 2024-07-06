import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Cancel from "../assets/shared/x-icon.svg";
import { useState } from "react";
const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log(open)
  return (
    <header className='h-20 w-full flex justify-stretch'>
      <div className='grow flex items-center'>
        <img
          className='size-10 ml-6 cursor-pointer '
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='grow flex justify-end  items-center mr-6'>
        <img
          onClick={() => setOpen(!open)}
          className='size-6'
          src={Hamburger}
          alt=''
        />
      </div>
      <div
        className={`absolute top-0 right-0 h-full w-2/3 bg-[#0B0D17]/15 backdrop-blur-3xl ${
          open ? "scale-x-100" : "scale-x-0"
        }  transition-transform duration-700 origin-right `}>
        <div>
          <div className="relative">
            <img className="absolute right-[24px] top-[32px] w-[24px]" onClick={() => setOpen(!open)}
              src={Cancel}
              alt=''
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Menu;
