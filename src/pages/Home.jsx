import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import List from "../components/List";
import Details from "../components/Details";
import LogIn from "../components/aut/LogIn";
import { useUserStore } from "../lib/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

function Home() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  if (isLoading)
    return (
      <div className="p-12 text-3xl rounded-md bg-purpal-1">Loading..</div>
    );
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300 flex">
      {currentUser ? (
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
