import React from "react";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";

const List = () => {
  return (
    <div className="w-[30%]">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
