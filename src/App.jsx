import { Main } from "./components/Main";
import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Main     />
    </>
  );
}

export default App;
