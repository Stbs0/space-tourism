import { ExploreBtn } from "../components/home/ExploreBtn";
import { TextContent } from "../components/home/TextContent";

function Home() {
  return (
    <main className='grow mx-auto flex container p-[24px] sm:px-[40px] sm:py-[128px]   lg:py-[128px]'>
      <div className=' grow flex  '>
        <div className=' sm:gap-[66px] grow  lg:items-end  flex flex-col  items-center lg:flex-row '>
          <TextContent />
          <ExploreBtn />
        </div>
      </div>
    </main>
  );
}

export default Home;
