import React, { useState } from "react";
import { db } from "../../lib/firebase";
import {
  collection,
  getDocs,
  query,
  setDoc,
  where,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { useUserStore } from "../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      } else {
        setUser(null); // Clear user state if no user found
      }
    } catch (err) {
      console.log(err);
      // Handle error here (e.g., show an error message to the user)
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "usersChats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log(err);
      // Handle error here (e.g., show an error message to the user)
    }
  };

  return (
    <div className="max-w-max max-h-max p-8 bg-purpal-1 rounded-md top-0 bottom-0 left-0 right-0 absolute m-auto">
      <form className="flex gap-5" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="username"
          name="username" // Corrected input name to match FormData key
          className="p-3 bg-purpal-5 rounded-md border-none outline-none"
        />
        <button className="p-2 rounded-md bg-blue-400 text-white border-none">
          Search
        </button>
      </form>
      {user && (
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src={user.avatar || "./avatar.png"}
              alt="user"
              className="w-12 h-12 rounded-full object-cover bg-purpal-5"
            />
            <span>{user.username}</span>
          </div>
          <button
            className="p-2 rounded-md bg-blue-400 text-white border-none"
            onClick={handleAdd}
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
