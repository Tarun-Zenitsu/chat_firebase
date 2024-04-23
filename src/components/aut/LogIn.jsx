import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-3xl">Welcome back.</h2>
        <form className="flex flex-col gap-2 items-center">
          <div className="gap-4">
            <span>Email</span>
            <input type="email" placeholder="yourname@gmail.com" name="name" />
          </div>
          <div>
            <span>Password</span>
            <input
              type="password"
              placeholder="your password"
              name="password"
            />
          </div>
          <button>Sign In</button>
          <div>
            <h1>
              new user ? <Link to="/signup">Signup</Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
