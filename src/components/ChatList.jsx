import React, { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
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
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-gray-600">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-12 h-12 rounded-full object-fill"
        />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Tarun kk</span>
          <p className="font-light">hellow</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
