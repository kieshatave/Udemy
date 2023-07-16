import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzbifqilawdnsllymchg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6YmlmcWlsYXdkbnNsbHltY2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MDY5OTksImV4cCI6MjAwNDE4Mjk5OX0.lQ6zHpgqhU1rs9eeVp1fI4GNmNZ_OIur3El75ntUCOI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;