import React from "react";

const UserInfo = () => {
  return (
    <div className="flex p-[20px] items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <img
          src="./avatar.png"
          alt="user"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <h1>User name</h1>
      </div>
      <div className="flex items-center gap-2">
        {" "}
        {/* Change flex-row to items-center */}
        <img src="./more.png" alt="more" className="w-[20px] h-[20px]" />
        <img src="./edit.png" alt="edit" className="w-[20px] h-[20px]" />
        <img src="./video.png" alt="video" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default UserInfo;
