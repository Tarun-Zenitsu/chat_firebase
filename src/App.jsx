import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import SignUp from "./components/aut/SignUp";
import LogIn from "./components/aut/LogIn";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

function App() {
  // const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  // const user = false;
  // useEffect(() => {
  //   const unSub = onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //   });
  //   return () => {
  //     unSub();
  //   };
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;
