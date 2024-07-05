import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
const Menu = () => {
  return (
    <header className='h-20 w-full flex justify-stretch'>
      <div className='grow flex items-center'>
        <img
          className='size-10 ml-6'
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='grow flex justify-end  items-center mr-6'>
        <img
          className='size-6'
          src={Hamburger}
          alt=''
        />
      </div>
      <div className=""></div>
    </header>
  );
};
export default Menu;
