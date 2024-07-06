import hamburger from "../assets/shared/icon-hamburger.svg";
export function Hamburger({ setOpen, open }) {
  return (
    <div className='grow flex sm:hidden justify-end  items-center mr-6'>
      <img
        onClick={() => setOpen(!open)}
        className='size-6'
        src={hamburger}
        alt=''
      />
    </div>
  );
}
