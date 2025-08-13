import { create } from "zustand";
import type { IStickersData } from "../interfaces/stickersData";

interface IStates {
  selectedView: "grid" | "list";
  listOrder: string | null;
  searchSticker: string;
  albumExternalData: IStickersData[];
  isExternalAlbum: boolean;
}

interface IActions {
  setSelectedView: (selectedView: "grid" | "list") => void;
  setListOrder: (listOrder: string | null) => void;
  setSearchSticker: (searchSticker: string) => void;
  setAlbumExternalData: (albumExternalData: IStickersData[]) => void;
  setIsExternalAlbum: (isExternalAlbum: boolean) => void;
}

export const TrackerStore = create<IStates & IActions>((set) => ({
  selectedView: "list",
  setSelectedView: (selectedView: "grid" | "list") => set({ selectedView }),
  listOrder: "nombre",
  setListOrder: (listOrder: string | null) => set({ listOrder }),
  albumExternalData: [],
  setAlbumExternalData: (albumExternalData: IStickersData[]) =>
    set({ albumExternalData }),
  searchSticker: "",
  setSearchSticker: (searchSticker: string) => set({ searchSticker }),
  isExternalAlbum: true,
  setIsExternalAlbum: (isExternalAlbum: boolean) => set({ isExternalAlbum }),
}));
