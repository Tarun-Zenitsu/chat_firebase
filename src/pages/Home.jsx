import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "../components/Chat";
import List from "../components/List";
import Details from "../components/Details";
import LogIn from "../components/aut/LogIn";

function Home() {
  const [count, setCount] = useState(0);
  const user = true;
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300 flex">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

export default Home;
