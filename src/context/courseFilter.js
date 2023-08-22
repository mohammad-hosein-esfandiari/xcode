import { create } from "zustand";

export const useSearchParamsStore = create((set) => ({
  filter: {
    arrange: "",
    price: "",
    other: [],
  },
  setRadio: (info, id) =>
    set((state) => ({ filter: { ...state.filter, [info]: id } })),
  setCheckbox: (id) =>
    set((state) => {
      let isIn = state.filter.other.some((item) => item === id);
      if (isIn) {
        let array = state.filter.other.filter((item) => item !== id);
        return {
          filter: { ...state.filter, other: array },
        };
      } else {
        return {
          filter: { ...state.filter, other: [...state.filter.other, id] },
        };
      }
    }),
  setOther: (array) =>
    set((state) => ({ filter: { ...state.filter, other: array } })),
  setDeleteOther: (id) =>
    set((state) => {
      let deletedArray = state.filter.other.filter((item) => item !== id);
      return {
        filter: { ...state.filter, other: deletedArray },
      };
    }),
}));
