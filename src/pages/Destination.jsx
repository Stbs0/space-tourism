import Planet from "../components/Destination/Planet";
const Destination = () => {
  return (
    <main className='text-white grow p-6'>
      <div className='flex flex-col gap-6   grow'>
        <h3 className='font-barlow text-center tracking-[15%]'>
          <span className='inline-block mr-6 opacity-25 font-bold'>01</span>PICK
          YOUR DESTINATION
        </h3>

        <Planet />
      </div>
    </main>
  );
};
export default Destination;
