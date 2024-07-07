import logo from "../assets/shared/logo.svg";
import line from "../assets/shared/line.svg";
export  function Logo() {
  return (
    <div className=' flex  items-center grow'>
      <img
        className='size-10 ml-6 lg:ml-[64px] cursor-pointer '
        src={logo}
        alt='logo'
      />
      {/* TODO: cant make the line  */}
      {/* <img src={line} className=" left-[167px]  z-10 " alt="" /> */}
    </div>
  );
}
