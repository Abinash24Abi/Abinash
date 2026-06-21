import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rmzpjerxnhzvxoivjgcy.supabase.co";
const supabaseAnonKey = "sb_publishable_69d13VkHYthQ_hje4VUWEQ_k6mDEoZh";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);