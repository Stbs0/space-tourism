import { LinkItems } from "./LinkItems";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <nav className='hidden sm:flex ml-[32px]  bg-white/5 h-[96px] max-w-[768px] backdrop-blur-xl  grow  text-white tracking-wide '>
      <ul className='flex grow items-center gap-[48px] justify-end pr-[40px] *:font-barlow '>
       <LinkItems label={"HOME"} number={"00"} path={"/"}/>
       <LinkItems label={"Destination"} number={"01"} path={"/Destination"}/>
       <LinkItems label={"CREW"} number={"02"} path={"/Crew"}/>
       <LinkItems label={"TECHNOLOGY"} number={"03"} path={"/Technology"}/>
      
      </ul>
    </nav>
  );
}
