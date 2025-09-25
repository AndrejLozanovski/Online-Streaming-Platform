import { create } from "zustand";

const userToken = localStorage.getItem("user");

export const useUserStore = create((set) => ({
  user: userToken ? JSON.parse(userToken) : null,
  setUser: (userPayload) => {
    localStorage.setItem("user", JSON.stringify(userPayload));
    set(() => ({
      user: userPayload,
    }));
  },
  logout: () => {
    localStorage.removeItem("user");
    set(() => ({
      user: null,
    }));
  },
  isLoggedIn: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
}));
