import React, { useEffect, useState } from "react";
import AddUser from "./aut/AddUser";
import { useUserStore } from "../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "usersChats", currentUser.id),
      async (res) => {
        const items = res.data().chats();
        const promises = items.map(async (items) => {
          const userDocRef = doc(db, "users", items.receiverId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();
          return { ...items, user };
        });
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );
    return () => {
      unsub();
    };
  }, [currentUser.id]);
  console.log(chats);
  return (
    <div className="flex-1 overflow-scroll">
      <div className="flex items-center gap-[20px] p-[20px]">
        <div className="flex-1 flex items-center gap-[20px] rounded-lg bg-purpal-2 p-2">
          <img src="/search.png" alt="search" className="w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="search"
            className="bg-transparent border-none outline-none text-white flex-1"
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="add"
          className="w-8 h-8 bg-purpal-2 p-2 rounded-lg"
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      {chats.map((chat) => (
        <div
          className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600"
          key={chat.chatId}
        >
          <img
            src="./avatar.png"
            alt="userimg"
            className="w-12 h-12 rounded-full object-fill"
          />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Tarun kk</span>
            <p className="font-light">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
