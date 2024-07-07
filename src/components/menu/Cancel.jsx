import X from "../../assets/shared/x-icon.svg";
export function Cancel({ setOpen, open }) {
  return (
    <div className='relative mb-[48px] w-full h-[85px]'>
      <img
        className='absolute right-[24px] top-[32px] w-[24px]'
        onClick={() => setOpen(!open)}
        src={X}
        alt=''
      />
    </div>
  );
}
