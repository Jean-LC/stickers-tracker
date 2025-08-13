import { create } from "zustand";
import type { IStickersData } from "../interfaces/stickersData";

interface IStates {
  selectedView: "grid" | "list";
  listOrder: string | null;
  searchSticker: string;
  selectedData: IStickersData[];
}

interface IActions {
  setSelectedView: (selectedView: "grid" | "list") => void;
  setListOrder: (listOrder: string | null) => void;
  setSearchSticker: (searchSticker: string) => void;
  setSelectedData: (selectedData: IStickersData[]) => void;
}

export const TrackerStore = create<IStates & IActions>((set) => ({
  selectedView: "list",
  setSelectedView: (selectedView: "grid" | "list") => set({ selectedView }),
  listOrder: "nombre",
  setListOrder: (listOrder: string | null) => set({ listOrder }),
  selectedData: [],
  setSelectedData: (selectedData: IStickersData[]) => set({ selectedData }),
  searchSticker: "",
  setSearchSticker: (searchSticker: string) => set({ searchSticker }),
}));
