import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <main>
        <div className='p-6 flex flex-col'>
          <h1 className='text-white   font-barlow'>
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h1 className='text-white text-[80px] font-Bellefair'>SPACE</h1>
          <p className='text-white text-[15px] font-regularBarlow '>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
