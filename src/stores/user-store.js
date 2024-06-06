import { create } from "zustand";

const userToken = localStorage.getItem("user");

export const useUserStore = create((set) => ({
  user: userToken ? JSON.parse(userToken) : null,
  setUser: (userPayload) =>
    set(() => ({
      user: userPayload,
    })),
}));
