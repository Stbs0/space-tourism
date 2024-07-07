import { NavLink } from "react-router-dom";
export function LinkItems({ label, number, path }) {
  return (
    <li className='h-full cursor-pointer flex items-center border-b-2 border-transparent has-[.active]:border-white transition-all duration-[600ms]   hover:border-b-white/50 '>
      <NavLink
        to={path}
        className='  text-left tracking-[2px]'>
        <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
          {number}
        </span>
        {label}
      </NavLink>
    </li>
  );
}
export default LinkItems;
