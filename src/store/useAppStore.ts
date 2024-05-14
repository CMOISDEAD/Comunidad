import { create } from "zustand";

interface BearState {
  map: any | null;
  index: number;
  location: any;
  player: HTMLAudioElement;
  setMap: (map: any) => void;
  setIndex: (index: number) => void;
  setLocation: (location: any) => void;
  setPlayer: (player: HTMLAudioElement) => void;
}

export const useAppStore = create<BearState>()((set) => ({
  map: null,
  index: 0,
  location: null,
  player: new Audio(),
  setMap: (map) => set({ map }),
  setIndex: (index) => set({ index }),
  setLocation: (location) => set({ location }),
  setPlayer: (player) => set({ player }),
}));
