import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  console.log(input);

  const handelEmoji = (e) => {
    setInput(input + e.emoji);
    setIsOpen(false);
  };
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
      <div className="p-5 flex-1 overflow-scroll flex flex-col gap-5">
        <div className="max-w-[70%] flex gap-5 ">
          <img
            src="./avatar.png"
            alt="user"
            className="w-7 h-7 object-cover rounded-full"
          />
          <div className="flex-1 flex-col gap-1">
            <p className="p-5 bg-purpal-1 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div className="text">
            <img
              src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-full h-[300px] rounded-lg object-cover"
            />
            <p className="bg-blue-400 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 ">
          <img
            src="./avatar.png"
            alt="user"
            className="w-7 h-7 object-cover rounded-full"
          />
          <div className="flex-1 flex-col gap-1">
            <p className="p-5 bg-purpal-1 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div className="text">
            <img
              src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-full h-[300px] rounded-lg object-cover"
            />
            <p className="bg-blue-400 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 ">
          <img
            src="./avatar.png"
            alt="user"
            className="w-7 h-7 object-cover rounded-full"
          />
          <div className="flex-1 flex-col gap-1">
            <p className="p-5 bg-purpal-1 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div className="text">
            <img
              src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-full h-[300px] rounded-lg object-cover"
            />
            <p className="bg-blue-400 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 ">
          <img
            src="./avatar.png"
            alt="user"
            className="w-7 h-7 object-cover rounded-full"
          />
          <div className="flex-1 flex-col gap-1">
            <p className="p-5 bg-purpal-1 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div className="text">
            <img
              src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-full h-[300px] rounded-lg object-cover"
            />
            <p className="bg-blue-400 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 ">
          <img
            src="./avatar.png"
            alt="user"
            className="w-7 h-7 object-cover rounded-full"
          />
          <div className="flex-1 flex-col gap-1">
            <p className="p-5 bg-purpal-1 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex gap-5 self-end">
          <div className="text">
            <img
              src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-full h-[300px] rounded-lg object-cover"
            />
            <p className="bg-blue-400 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloribus!
            </p>
            <span className="text-xs">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
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
