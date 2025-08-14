import { create } from "zustand";
import type { IStickersData } from "../interfaces/stickersData";

interface IStates {
  selectedView: "grid" | "list";
  listOrder: string | null;
  searchSticker: string;
  stickersData: IStickersData[];
  isExternalAlbum: boolean;
}

interface IActions {
  setSelectedView: (selectedView: "grid" | "list") => void;
  setListOrder: (listOrder: string | null) => void;
  setSearchSticker: (searchSticker: string) => void;
  setStickersData: (StickersData: IStickersData[]) => void;
  setIsExternalAlbum: (isExternalAlbum: boolean) => void;
}

export const TrackerStore = create<IStates & IActions>((set) => ({
  selectedView: "list",
  setSelectedView: (selectedView: "grid" | "list") => set({ selectedView }),
  listOrder: "nombre",
  setListOrder: (listOrder: string | null) => set({ listOrder }),
  stickersData: [],
  setStickersData: (stickersData: IStickersData[]) => set({ stickersData }),
  searchSticker: "",
  setSearchSticker: (searchSticker: string) => set({ searchSticker }),
  isExternalAlbum: true,
  setIsExternalAlbum: (isExternalAlbum: boolean) => set({ isExternalAlbum }),
}));
