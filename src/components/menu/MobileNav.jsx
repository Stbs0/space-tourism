import { MobileItemList } from "./MobileItemList";
import { Cancel } from "./Cancel";

import { NavLink } from "react-router-dom";
export function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`fixed sm:hidden top-0 right-0 h-screen w-2/3 bg-[#0B0D17]/15  backdrop-blur-xl ${
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } transition-all duration-700 origin-right flex flex-col`}>
      <Cancel
        setOpen={setOpen}
        open={open}
      />
      <nav className=' ml-[32px] grow   text-white tracking-wide'>
        <ul className='flex flex-col  space-y-[32px]  *:font-barlow '>
          <MobileItemList
            label={"HOME"}
            number={"00"}
            path={"/"}
          />
          <MobileItemList
            label={"DESTINATION"}
            number={"01"}
            path={"/Destination"}
          />
          <MobileItemList
            label={"CREW"}
            number={"02"}
            path={"/Crew"}
          />
          <MobileItemList
            label={"TECHNOLOGY"}
            number={"03"}
            path={"/Technology"}
          />
        </ul>
      </nav>
    </div>
  );
}
