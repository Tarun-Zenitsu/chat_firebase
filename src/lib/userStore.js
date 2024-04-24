import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../lib/firebase"; // Assuming db is imported from your Firebase configuration

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: (uid) => {
    if (!uid) {
      set({ currentUser: null, isLoading: false });
      return;
    }
    set({ isLoading: true });
    getUserInfo(uid)
      .then((userInfo) => {
        set({ currentUser: userInfo, isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
        set({ currentUser: null, isLoading: false });
      });
  },
}));

async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("User document not found");
  }
}
