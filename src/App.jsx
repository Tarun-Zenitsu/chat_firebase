import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import SignUp from "./components/aut/SignUp";
import LogIn from "./components/aut/LogIn";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
