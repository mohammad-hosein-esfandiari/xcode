import { create } from "zustand";
export const useErrorText = create((set) => ({
  error: "",
  setError: (arr) => set({ error: arr }),
}));
