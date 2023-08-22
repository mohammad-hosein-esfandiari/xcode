import { create } from "zustand";
import { getRandomCode } from "@/core/utils/getRandomCode";
export const useStepperStore = create((set) => ({
  step: 0,
  randomCode: null,
  data: {},
  error:false,
  lastStepError:[],
  lastStepLoading:true,
  setStepNext: () => set((state) => ({ step: state.step + 1 })),
  setStepPrev: () => set((state) => ({ step: state.step - 1 })),
  setStepZero: () => set({ step: 0 }),
  setStep: (info) => set({ step: info}),
  setRandomCode: () => set({ randomCode: getRandomCode(1000, 10000) }),
  emptyRandomCode: () => set({ randomCode: null }),
  setData: (info) => set({ data: info }),
  setError:(info) => set({ error: info }),
  setLastStepError:(info) => set({ lastStepError: info }),
  setLastStepLoading:(info) => set({ lastStepLoading: info }),
}));
