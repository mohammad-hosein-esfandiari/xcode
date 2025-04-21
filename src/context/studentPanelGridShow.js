import { create } from "zustand";

export const useGridStudentPanel= create((set) => ({
  grid: 6,
  setGridSeven: () => set({ grid: 7 }),
  setGridSix: () => set({ grid: 6 }),
}));
