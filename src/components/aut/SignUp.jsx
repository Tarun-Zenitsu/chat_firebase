import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handelAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5 w-[30vw] h-[60vh] bg bg-purpal-4">
        <h2 className="text-3xl">Crate an Account</h2>
        <form className="flex flex-col gap-2 items-center">
          <img
            src={avatar.url || "./avatar.png"}
            alt="usrImg"
            className="rounded-full w-24 h-24 object-cover"
          />
          <label htmlFor="file" className="cursor-pointer">
            Upload an Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handelAvatar}
          />
          <div className="gap-4">
            <input
              type="username"
              placeholder="user name"
              name="name"
              className=" bg-purpal-3 w-[18vw] h-9 rounded-md border-none outline-none text-white placeholder:text-center p-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="yourname@gmail.com"
              name="email"
              className=" bg-purpal-3 w-[18vw] h-9 rounded-md border-none outline-none text-white placeholder:text-center p-2"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="your password"
              name="password"
              className=" bg-purpal-3 w-[18vw] h-9 rounded-md border-none outline-none text-white placeholder:text-center p-2"
            />
          </div>
          <button className="bg-[#5183fe] text-white w-[18vw] py-1 rounded-md border-none">
            Sign In
          </button>
          <div>
            <h1 className="text-lg text-gray-400">
              Alredy have an Account ?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
