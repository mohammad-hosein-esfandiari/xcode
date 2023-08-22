import { create } from "zustand";

export const useFilteredArrayCourses = create((set) => ({

  data: [],
  filteredData:[],
  setFirstArray: (arr) => set({ data: arr }),
  setFilteredData: (arr) => set({ filteredData: arr }),
}));