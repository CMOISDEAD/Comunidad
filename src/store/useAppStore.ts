import { create } from "zustand";

interface BearState {
  index: number;
  location: any;
  player: HTMLAudioElement;
  setIndex: (index: number) => void;
  setLocation: (location: any) => void;
  setPlayer: (player: HTMLAudioElement) => void;
}

export const useAppStore = create<BearState>()((set) => ({
  index: 0,
  location: null,
  player: new Audio(),
  setIndex: (index) => set({ index }),
  setLocation: (location) => set({ location }),
  setPlayer: (player) => set({ player }),
}));
