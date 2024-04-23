import React from "react";

const Details = () => {
  return (
    <div className="w-[30%]">
      <div className="px-7 py-5 flex flex-col items-center gap-5 border-b-2 border-gray-600 text-center">
        <img
          src="./avatar.png"
          alt="userimg"
          className="w-24 h-24 rounded-full object-cover"
        />
        <h2>Tarun kk</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="option">
          <div className="flex justify-between items-center cursor-pointer">
            <span>Chat Setting</span>
            <img
              src="./arrowUp.png"
              alt="upArrow"
              className="w-5 h-5 bg-purpal-1 rounded-full p-1"
            />
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <div className="flex justify-between items-center cursor-pointer">
            <span>Privecy & help</span>
            <img
              src="./arrowDown.png"
              alt="upArrow"
              className="w-5 h-5 bg-purpal-1 rounded-full p-1"
            />
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <span>Shared Photos</span>
            <img
              src="./arrowDown.png"
              alt="upArrow"
              className="w-5 h-5 bg-purpal-1 rounded-full p-1"
            />
          </div>
          <div className="flex flex-col gap-5">
            {/* image faching */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="img"
                  className="w-8 h-8 object-cover rounded-lg"
                />
                <span className="text-gray-400">your_photo.png</span>
              </div>
              <img
                src="download.png"
                alt="downlodImg"
                className="w-5 h-5 bg-purpal-1 rounded-full p-1"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="img"
                  className="w-8 h-8 object-cover rounded-lg"
                />
                <span className="text-gray-400">your_photo.png</span>
              </div>
              <img
                src="download.png"
                alt="downlodImg"
                className="w-5 h-5 bg-purpal-1 rounded-full p-1"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/19478782/pexels-photo-19478782/free-photo-of-woman-laying-face-down-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="img"
                  className="w-8 h-8 object-cover rounded-lg"
                />
                <span className="text-gray-400">your_photo.png</span>
              </div>
              <img
                src="download.png"
                alt="downlodImg"
                className="w-5 h-5 bg-purpal-1 rounded-full p-1"
              />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="flex justify-between items-center cursor-pointer">
            <span>share file</span>
            <img
              src="./arrowUp.png"
              alt="upArrow"
              className="w-5 h-5 bg-purpal-1 rounded-full p-1"
            />
          </div>
        </div>
        <button className="px-1 py-1 bg-red-400 rounded-lg hover:bg-red-500 text-white">
          Block User
        </button>
        <button className="px-1 py-1 bg-blue-400 rounded-lg hover:bg-blue-500 text-white">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Details;
