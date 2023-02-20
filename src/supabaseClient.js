import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabaseUrl = "https://otqzegjvkqnmtiahmrvx.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90cXplZ2p2a3FubXRpYWhtcnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzMTI0NTcsImV4cCI6MTk5MTg4ODQ1N30.BfS07hDkckwmtdliv0M4HoSDJC0hTsebH8RBIYpCNaw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
