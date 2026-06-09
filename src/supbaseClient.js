import { createClient } from "@supabase/supabase-js";

// 1. createClient = Supabase SDK factory function
// 2. process env = Vite injects env variables at build time
// 3. we export single instance (singleton pattern)

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);