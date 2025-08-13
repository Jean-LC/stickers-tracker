import { supabase } from "../supabase/supabaseClient";

export async function axiosFetcher(url: string | null) {
  try {
    if (!url) return;
    const { data, error } = await supabase.from("album").select("*");

    if (error || !data) return;

    return data;
  } catch (e) {
    console.log(e);
  }
}
