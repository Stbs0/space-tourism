import Cancel from "../../assets/shared/x-icon.svg";
import { NavLink } from "react-router-dom";
export function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`fixed sm:hidden top-0 right-0 h-screen w-2/3 bg-[#0B0D17]/15  backdrop-blur-xl ${
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } transition-all duration-700 origin-right flex flex-col`}>
      <div className='relative mb-[48px] w-full h-[85px]'>
        <img
          className='absolute right-[24px] top-[32px] w-[24px]'
          onClick={() => setOpen(!open)}
          src={Cancel}
          alt=''
        />
      </div>
      <nav className=' ml-[32px] grow  text-white tracking-wide'>
        <ul className='flex flex-col *:font-barlow '>
          <li>
            <NavLink
              to='/'
              className={(isActive) =>
                isActive ? `active-mobile w-full` : `text-left tracking-[2px]`
              }>
              <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
                00
              </span>
              HOME
            </NavLink>
          </li>
          <li>
            <h2 className='text-left tracking-[2px]'>
              <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
                01
              </span>
              DESTINATION
            </h2>
          </li>
          <li>
            <h2 className='text-left tracking-[2px]'>
              <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
                02
              </span>
              CREW
            </h2>
          </li>
          <li>
            <h2 className='text-left tracking-[2px]'>
              <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
                03
              </span>
              TECHNOLOGY
            </h2>
          </li>
        </ul>
      </nav>
    </div>
  );
}
