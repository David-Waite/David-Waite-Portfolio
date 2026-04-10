import { createClient } from "@supabase/supabase-js";

// Server-only client — never imported by client components
// Env vars have no NEXT_PUBLIC_ prefix so they are never sent to the browser
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLISHABLE_KEY!
);
