import { Outlet } from "react-router-dom";
import { NavBar } from "../components/menu/NavBar";
import { MobileNav } from "../components/menu/MobileNav";
import { Hamburger } from "../components/menu/Hamburger";
import { Logo } from "../components/menu/Logo";

import { useState } from "react";
const HeaderLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='h-[88px] lg:h-[136px] w-full flex justify-between lg:items-center'>
        <Logo />
        <Hamburger
          setOpen={setOpen}
          open={open}
        />
        <MobileNav
          open={open}
          setOpen={setOpen}
        />
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};
export default HeaderLayout;
