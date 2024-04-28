import { create } from "zustand";

interface BearState {
  index: number;
  location: any;
  setIndex: (index: number) => void;
  setLocation: (location: any) => void;
}

export const useAppStore = create<BearState>()((set) => ({
  index: 0,
  location: null,
  setIndex: (index) => set({ index }),
  setLocation: (location) => set({ location }),
}));
