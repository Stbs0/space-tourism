import { ExploreBtn } from "./ExploreBtn";
import { TextContent } from "./TextContent";

export function Main() {
  return (
    <main className='grow flex p-[24px] sm:px-[40px] sm:py-[128px]   lg:py-[128px]'>
      <div className=' grow flex  '>
        <div className=' sm:gap-[66px] grow  lg:items-end  flex flex-col  items-center lg:flex-row '>
          <TextContent />
          <ExploreBtn />
        </div>
      </div>
    </main>
  );
}
