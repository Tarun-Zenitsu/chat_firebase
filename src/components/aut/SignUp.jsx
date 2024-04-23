import React, { useState } from "react";

const SignUp = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handelAvatar = (e) => {
    if (e.target.files) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="w-[90vw] h-[90vh] rounded-lg bg-purpal-1 backdrop-blur saturate-[180%] border-slate-300">
      <h2>Creat an account</h2>
      <form>
        <img src={avatar.url || "./avatar.png"} alt="avatar" />
        <label htmlFor="file">Upload a image</label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handelAvatar}
        />
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
      </form>
    </div>
  );
};

export default SignUp;
