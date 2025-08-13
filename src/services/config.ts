import axios from "axios";

export const axiosCustom = axios.create({
  baseURL: "https://689b668458a27b18087b319f.mockapi.io/pipos/data",
});

export async function axiosFetcher(url: string) {
  try {
    const response = await axiosCustom.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
