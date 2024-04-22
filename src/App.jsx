import { useState } from "react";
import "./index.css";
import Chat from "./components/Chat";
import Details from "./components/Details";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop:blur-[19px] saturate-[180%] border-slate-300 flex">
      <List />
      <Chat />
      <Details />
    </div>
  );
}

export default App;
