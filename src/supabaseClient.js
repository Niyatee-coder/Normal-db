import { createClient, SupabaseClient } from "@supabase/supabase-js";
const supabase = createClient("https://tnjbipgsxbpgcuyauplr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuamJpcGdzeGJwZ2N1eWF1cGxyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTAzODgxNSwiZXhwIjoyMDk2NjE0ODE1fQ.etrEFnysg9EmX7pH0FG73boWZ_R8VsdXxuDXAHiq2SQ");
export default SupabaseClient;
