import React from "react";
import { useUserStore } from "../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="flex p-[20px] items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <img
          src={currentUser.avatar || "./avatar.png"}
          alt="user"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <h1>{currentUser.username}</h1>
      </div>
      <div className="flex items-center gap-3">
        <img src="./more.png" alt="more" className="w-[18px] h-[18px]" />
        <img src="./edit.png" alt="edit" className="w-[18px] h-[18px]" />
        <img src="./video.png" alt="video" className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default UserInfo;
