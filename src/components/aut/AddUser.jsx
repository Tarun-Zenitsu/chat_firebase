import React from "react";

const AddUser = () => {
  const handelSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const username = formData.get("username");

    try {
    } catch (error) {}
  };
  return (
    <div className="max-w-max max-h-max p-8 bg-purpal-1 rounded-md top-0 bottom-0 left-0 right-0 absolute m-auto">
      <form className="flex gap-5" onSubmit={handelSearch}>
        <input
          type="text"
          placeholder="username"
          name="user"
          className="p-3 bg-purpal-5 rounded-md border-none outline-none"
        />
        <button className="p-2 rounded-md bg-blue-400 text-white border-none">
          Search
        </button>
      </form>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src="./avatar.png"
            alt="user"
            className="w-12 h-12 rounded-full object-cover bg-purpal-5"
          />
          <span>Tarun kk</span>
        </div>
        <button className="p-2 rounded-md bg-blue-400 text-white border-none">
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
