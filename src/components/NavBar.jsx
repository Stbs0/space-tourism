import { NavLink } from "react-router-dom";
export function NavBar({ isActive }) {
  return (
    <nav className='hidden sm:flex ml-[32px]  bg-white/5  max-w-[768px] backdrop-blur-xl  grow  text-white tracking-wide '>
      <ul className='flex grow items-center gap-[48px] justify-end pr-[40px] *:font-barlow group'>
        <li className='h-full flex items-center group-has-[.active]:border-b-2 group-has-[.active]:border-white  hover:border-b-2 hover:border-b-white/50'>
          <NavLink
            to='/'
            className={(isActive) =>
              isActive ? `active ` : ` text-left tracking-[2px]`
            }>
            <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
              00
            </span>
            HOME
          </NavLink>
        </li>
        <li
          className='h-full flex items-center  border-b-2 border-transparent 
          transition duration-[600ms]
         hover:border-b-white/50'>
          <h2 className='text-left tracking-[2px]'>
            <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
              01
            </span>
            DESTINATION
          </h2>
        </li>
        <li
          className='h-full flex items-center  border-b-2 border-transparent 
          transition duration-[600ms]
         hover:border-b-white/50'>
          <h2 className='text-left tracking-[2px]'>
            <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
              02
            </span>
            CREW
          </h2>
        </li>
        <li
          className='h-full flex items-center  border-b-2 border-transparent 
          transition duration-[600ms]
         hover:border-b-white/50'>
          <h2 className='text-left tracking-[2px]'>
            <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
              03
            </span>
            TECHNOLOGY
          </h2>
        </li>
      </ul>
    </nav>
  );
}
