import { NavBar } from './NavBar';
import { MobileNav } from "./MobileNav";
import { Hamburger } from "./Hamburger";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";

import { useState } from "react";
const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <header className='h-[88px] w-full flex justify-between'>
      <Logo />
      <Hamburger
        setOpen={setOpen}
        open={open}
      />
      <MobileNav
        open={open}
        setOpen={setOpen}
      />
     <NavBar     />
    </header>
  );
};
export default Menu;
