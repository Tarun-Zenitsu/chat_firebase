import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const SignUp = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const navigation = useNavigate();
  const [loding, setLoading] = useState(false);
  const handelAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "usersChats", res.user.uid), {
        chats: [],
      });
      toast.success("Account created you can login now");
      navigation("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5 w-[30vw] h-[60vh] bg bg-purpal-4">
        <h2 className="text-3xl">Crate an Account</h2>
        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleRegister}
        >
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
              name="username"
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
          <button
            className="bg-[#5183fe] text-white w-[18vw] py-1 rounded-md border-none"
            disabled={loding}
          >
            {loding ? "Loadig.." : "Sign Up"}
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
