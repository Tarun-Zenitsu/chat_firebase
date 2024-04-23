import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  console.log(input);

  const handelEmoji = (e) => {
    setInput(input + e.emoji);
    setIsOpen(false);
  };
  return (
    <div className="w-[49%] border-l-2 border-r-2 border-gray-600 h-full flex flex-col">
      <div className="p-5 flex items-center justify-between border-b-2 border-gray-600 mt-auto">
        <div className="flex items-center gap-5">
          <img
            src="./avatar.png"
            alt="userimg"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span>Tarun kk</span>
            <p className="text-sm font-light text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src="./phone.png" alt="cll" className="h-5 w-5" />
          <img src="./video.png" alt="videoCall" className="h-5 w-5" />
          <img src="./info.png" alt="info" className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5 flex-1"></div>
      <div className="p-5 flex items-center justify-between border-t-2 border-slate-600 gap-3">
        <div className="flex gap-5">
          <img src="./img.png" alt="img" className="w-5 h-5 cursor-pointer" />
          <img
            src="./camera.png"
            alt="camera"
            className="w-5 h-5 cursor-pointer"
          />
          <img src="./mic.png" alt="mic" className="w-5 h-5 cursor-pointer" />
        </div>
        <input
          type="text"
          value={input}
          placeholder="type a message..."
          className="flex-1 bg-purpal-2 border-none outline-none text-white p-2 rounded-lg"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="relative">
          <img
            src="./emoji.png"
            alt="emoji"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="absolute bottom-12 left-0">
            {isOpen && <EmojiPicker onEmojiClick={handelEmoji} />}
          </div>
        </div>
        <button className="bg-[#5183fe] text-white px-4 py-2 rounded-lg border-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
