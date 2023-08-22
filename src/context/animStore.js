import { create } from "zustand";
export const useAnimStore = create((set) => ({
  anim: true,
  setAnim : (info) => set({anim:info})
}));